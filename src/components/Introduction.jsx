import Link from 'next/link'

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
          “The ex-police officer&apos;s handbook” is an online course that helps
          you create a CV and authentic professional brand that will open up
          exciting new opportunities and give you the confidence to take on new
          challenges.
        </p>
        <p className="mt-4">
          Ok so it&apos;s not really a handbook at all, but there are guides for
          everything in policing and we think this one would be more important
          than all the others you&apos;ve got gathering dust in the back of your
          locker.
        </p>
        <p className="mt-4">
          But it turns out reading guidebooks and checklists will only get you
          so far...
        </p>
        <p className="mt-4">Our</p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Using boolean operations to combine basic shapes into complex icons',
            'How to adapt icons to different sizes',
            'Translating icons from an outline style to a solid style',
            'Identifying the characteristics that make an icon set cohesive',
            'Figma features and keyboard shortcuts to speed up your workflow',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          By the end of the course, you’ll have all the confidence you need to
          dig in and start creating beautiful icons that can hold their own
          against any of the sets you can find online.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get two free chapters straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
