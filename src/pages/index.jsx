import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { ReadinessQuiz } from '@/components/ReadinessQuiz'

export default function Home() {
  return (
    <>
      <Head>
        <title>Responsibility Roadmap</title>
        <meta
          name="description"
          content="Learn skills, get insight, and find tools to help you navigate the challenges of adulthood."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Pricing />
        <Faqs />
        <ReadinessQuiz />
      </main>
      <Footer />
    </>
  )
}
