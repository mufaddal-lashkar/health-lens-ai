import { streamText } from 'ai';
import { createOpenAI as createGroq } from '@ai-sdk/openai';

// Verify that the GROQ_API_KEY is being used correctly
const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  // Check if the prompt is empty
  if (!prompt) {
    return new Response(JSON.stringify({ error: 'Please provide a medical record or query.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const response = streamText({
    model: groq('llama-3.3-70b-versatile'),
    messages: [
      {
        role: 'system',
        content: `Act as a multilingual medical assistant. When provided with symptoms, respond in the following way:
          - Accept input in English, Hindi, or Hinglish (a mix of Hindi and English).
          - If input is in English, Then respond in English mandatoryly.
          - Provide a brief list of possible diseases or conditions related to the symptoms.
          - Suggest quick and simple precautions the user can take immediately.
          - Offer basic remedies or actions to manage the symptoms.

          Keep responses concise, friendly, and understandable regardless of the input language. Always include a note advising users to consult a doctor for accurate diagnosis.

          Examples of Hinglish inputs:
          - "Mujhe fever aur sore throat ho raha hai."
          - "Body pain aur cold lag raha hai."
          Provide responses in the language of the user's input or in English if the language is unclear.`,
      },
      { role: 'user', content: prompt },
    ],
});

  return response.toDataStreamResponse();
}