import { streamText } from 'ai'
import { createOpenAI as createGroq } from '@ai-sdk/openai'

// Verify that the GROQ_API_KEY is being used correctly
const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
})

export const runtime = 'edge'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  const response = streamText({
    model: groq('llama-3.3-70b-versatile'),
    messages: [
      { role: 'system', content: `Analyze the following medical report and provide insights. Format your response in Markdown for better readability,
        write same data in gujrati language also after english, and keep numbering in bullet points,
        Please provide the following information:
        1. A summary of the medical report
        2. Key findings and their implications
        3. Recommended follow-up actions or tests
        4. Any potential red flags or areas of concern
        5. General health advice based on the report
        6. Provide Prediction of diseases to be happening in the upcoming years and write the particular predicted years, also provide the age per the year for the patient
        
        If no report is provided ask the user to provide a medical record and dont generate  content without that.

        Use markdown for bold text for the required portions and all the topics to be covered will have bold to them and use italics also in gennerated body.`},
      { role: 'user', content: prompt }],
  })

  return response.toDataStreamResponse()
}

