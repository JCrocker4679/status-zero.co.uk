import Head from 'next/head'

import { Author1 } from '@/components/Author1'
import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { FreeChapters } from '@/components/FreeChapters'
import { CourseHero } from '@/components/CourseHero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/CoursePricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/CourseTestimonial'
import { Testimonials } from '@/components/CourseTestimonials'
import { Faqs } from '@/components/Faqs'
import avatarImage1 from '@/images/avatars/surreypolice.png'
import avatarImage2 from '@/images/avatars/hampshire.png'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import ContactUs from '@/components/ContactUs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Status Zero - Police Resettlement Course</title>
        <meta
          name="description"
          content="A 30 day, online, cohort based course to help law enforcement professionals transition to a new career "
        />
      </Head>
      <Header />
      <CourseHero />
      <Introduction />
      {/* <NavBar /> */}
      <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Surrey Police',
          role: 'July 2021',
          image: avatarImage1,
        }}
      >
        <p>
          “The Course left me feeling much more positive about my future options
          and my potential value in the jobs marketplace.”
        </p>
      </Testimonial>
      <Screencasts />
      <Testimonial
        id="testimonial-from-hampshire-police"
        author={{
          name: 'Hampshire Police',
          role: 'March 2021',
          image: avatarImage2,
        }}
      >
        <p>
          “some really useful tips and particularly around Linkedin. I suspect
          many of us are suspicious or certainly very wary of social media to to
          be walked and talked through it was very helpful.”
        </p>
      </Testimonial>
      <Resources />
      <NewsletterSignup />

      <Pricing />

      <Testimonials />
      <Author />
      <Author1 />

      <Faqs />
      <ContactUs />

      <Footer />
    </>
  )
}
