import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ReactMarkdown from "react-markdown"
import { useEffect, useRef } from 'react'

interface OutputProps {
  completion: string
  error: Error | null
  isLoading: boolean
}

export default function Output({ completion, error, isLoading }: OutputProps) {
  const outputRef = useRef<HTMLDivElement>(null)

  // Optional auto-scroll into view when new content is generated
  useEffect(() => {
    if (completion && outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [completion])

  return (
    <Card className="shadow-upper space-y-4 bg-[#F3F4F6] max-h-[400px] overflow-y-auto">
      <CardHeader>
        <CardTitle>AI Output</CardTitle>
      </CardHeader>
      <CardContent ref={outputRef}>
        {isLoading && <p>Generating...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}
        {completion && (
          <ReactMarkdown className="whitespace-pre-wrap">
            {completion}
          </ReactMarkdown>
        )}
      </CardContent>
    </Card>
  )
}
