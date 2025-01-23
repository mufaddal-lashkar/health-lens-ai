'use client'

import { useState } from 'react'
import { useCompletion } from 'ai/react'
import InputForm from './InputForm'
import Output from './Output'

export default function Dashboard() {
  const [input, setInput] = useState('')
  const { complete, completion, isLoading, error } = useCompletion({
    api: '/api/generate',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    complete(input)
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 my-6 w-[90%]">
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
  )
}

