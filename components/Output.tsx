import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ReactMarkdown from "react-markdown"

interface OutputProps {
  completion: string
  error: Error | null
  isLoading: boolean
}

export default function Output({ completion, error, isLoading }: OutputProps) {
  return (
    <Card className='shadow-upper space-y-4 bg-[#F3F4F6]'>
      <CardHeader>
        <CardTitle>AI Output</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && <p>Generating...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}
        {completion && <ReactMarkdown className="whitespace-pre-wrap">{completion}</ReactMarkdown>}
      </CardContent>
    </Card>
  )
}

