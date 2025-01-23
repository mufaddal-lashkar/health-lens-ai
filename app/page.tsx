import Dashboard from '@/components/Dashboard';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { GlobeDemo } from '@/components/globe';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="main w-full h-screen">
      <GlobeDemo />
    </div>
  );
}



