'use client';

import Solve, { Format } from '@/lib/numbers'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    let result = Solve([75, 100, 6, 1, 4, 2], 982);
    console.log("RESULT", Format(result));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  )
}
