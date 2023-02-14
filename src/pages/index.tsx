import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-red-600">
     <div><Link href="/P001">01</Link></div> 
     <div><Link href="/P002">02</Link></div>
     <div><Link href="/P003">03</Link></div>
    </div>
  )
}
