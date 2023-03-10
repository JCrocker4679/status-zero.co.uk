import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Author1 } from '@/components/Author1'
import { NewsletterSignup } from '@/components/NewsletterSignup'

export default function Home() {
  return (
    <>
      <Head>
        <title>Status Zero - Officer Needs Assistance</title>
        <meta
          name="description"
          content="There's no government support or military style resettlement scheem for police officers looking to leave. We are a community of ex-cops who have succesfully transitioned into new careers with the skills, knowledge and resources to help you do the same."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        {/* <SecondaryFeatures /> */}
        <Testimonials />
        <NewsletterSignup />
        <Author1 />
        {/* <Pricing /> */}
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
