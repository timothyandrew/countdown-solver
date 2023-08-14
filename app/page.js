'use client';

import Solve, { Format } from '@/lib/numbers'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    let results = Solve([75, 100, 6, 1, 4, 2], 982);
    console.log("RESULTS");
    results.forEach(r => console.info(Format(r)));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  )
}
