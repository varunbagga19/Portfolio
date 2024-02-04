import Image from 'next/image'
import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import Skills from '@/Components/Skills'
export default function Home() {
  return (
    <main className=" h-screen bg-white snap-y snap-mandatory overflow-scroll">
      <Navbar/>
      <Hero/>
      <Skills/>
    </main>
  )
}
