import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/author2.png'

function LinkedinIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 25 25" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

export function Author1() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="sm:rounded-7xl pt-p6 bg-slate-50">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            {/* <SectionHeading number="0" id="author-title">
              Creator
            </SectionHeading> */}
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-blue-600">Joe Crocker –</span> Hey
              there, I’m the ex-cop behind Status Zero.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              I’ve been designing icons professionally for over a decade and
              have worked with dozens of the biggest brands to create custom
              sets for their products. I’m an accomplished conference speaker,
              and have been teaching icon design workshops every month for the
              last three years. I’ve worked with designers of all skill levels
              and honed my way of teaching to really click for anyone who has
              the itch to start designing their own icons.
            </p>
            <p className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
              >
                <LinkedinIcon className="h-10 w-10 fill-current" />
                <span className="ml-4">Follow on LinkedIn</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
