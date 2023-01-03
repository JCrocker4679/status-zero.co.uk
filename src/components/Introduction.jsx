import Link from 'next/link'

import { QuestionIcon } from '@/components/QuestionIcon'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/CourseContainer'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="bg-slate-50 pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Are you a police officer considering your options?
        </p>
        <p className="mt-4">
          If you&apos;re anything like me, I felt my value was only in my:{' '}
          <ul className="my-4">
            <li> • Current rank</li>
            <li> • Years of Service </li>
            <li> • Completed training courses </li>
          </ul>
          Which is understandable, because that&apos;s how they decide how much
          you get paid.
        </p>
        <p className="mt-4">
          I did 9 years, Response, Neighborhoods, CID, and ended up as a
          Cybercrime investigation specialist. Top of the pay scale, I
          didn&apos;t want to leave those skills behind for a
          &apos;promotion&apos; to custody, main office or traffic, but I needed
          to make more money. So in 2018, I quit and went to work for a tech
          start-up.
        </p>
        <p className="mt-4">
          In 4 years, I&apos;ve doubled my salary and 10x&apos;d my quality of
          life - This is the guide I wish I&apos;d had back then.
        </p>
        <p className="mt-4 font-bold text-slate-900">
          I get asked the same questions every single day:
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            "I want to leave but I don't know where to start",
            'What jobs can I even do',
            'But I cant afford to take a paycut to re-train',
            "How do I write a CV - I've not done one since school ",
            "But I'm only a response cop, I don't have any transferrable skills",
            'Why am I not being invited to job interviews?',
          ].map((feature) => (
            <li key={feature} className="flex">
              <QuestionIcon className="h-8 w-8 flex-none fill-blue-700" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          This course was created by ex-cops who know how to answer those
          questions. With a combined 20 years diverse policing experience, and
          10 years outside the job in tech start-ups, coaching, recruitment and
          change management, we know the resources and guidance you need to
          start your next chapter.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get a free chapter straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
