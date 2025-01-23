'use client'

import Dashboard from "@/components/Dashboard";
import InputForm from "@/components/InputForm";
import Output from "@/components/Output";
import { useCompletion } from "ai/react";
import { useState } from "react";

export default function ChatBot() {
    const [input, setInput] = useState('')
    const { complete, completion, isLoading, error } = useCompletion({
        api: '/api/chat',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        complete(input)
    }
    return (
        <>
            <h1 className="text-4xl font-bold mb-6 text-center text-white">Meet Your Smart Health Companion</h1>
            <p className='text-xl font-semibold mb-6 text-center text-white'>Your AI-powered chatbot for instant symptom analysis and personalized care guidance.</p>
            <div className="flex-col md:flex-row gap-4 my-6 flex justify-center w-full px-[5%]">
                <div className="w-full md:w-1/2">
                    <InputForm
                        input={input}
                        setInput={setInput}
                        onSubmit={handleSubmit}
                        isLoading={isLoading}
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <Output completion={completion} error={error} isLoading={isLoading} />
                </div>
            </div>
        </>
    )
}