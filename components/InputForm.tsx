import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

interface InputFormProps {
  input: string
  setInput: (input: string) => void
  onSubmit: (e: React.FormEvent) => void
  isLoading: boolean
}

export default function InputForm({ input, setInput, onSubmit, isLoading }: InputFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4 text-black">
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your medical report here..."
        className="w-full h-64 resize-none shadow-upper bg-[#F3F4F6] focus:outline-none outline-none"
      />
      <Button className='w-1/4 bg-white text-black font-semibold hover:border-[1px] hover:border-white hover:bg-black hover:text-white' type="submit" disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate'}
      </Button>
    </form>
  )
}

