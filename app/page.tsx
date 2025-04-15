import Dashboard from '@/components/Dashboard';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="container mx-auto p-4 flex justify-center bg-white text-[#242424] items-center flex-col overflow-hidden w-screen h-screen">
                <h1 className="text-4xl font-bold mb-6 text-center">Your Health, Decoded: Smarter Insights for Better Care</h1>
                <p className='text-xl font-semibold mb-6 text-center'>Analyze medical reports effortlessly and unlock vital insights with AI-powered precision.</p>
                <Dashboard />
            </main>
  );
}



