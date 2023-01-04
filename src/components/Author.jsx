import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/author3.png'

function LinkedinIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 25 25" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

export function Author() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      {/* <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div> */}
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <SectionHeading number="5" id="author-title" className="mb-16">
          Authors
        </SectionHeading>
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-blue-700">Tom Wheelhouse –</span> Hey
              there, I help people achieve the change they&apos;re searching for
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              I left the police in 2013 with no plan, no sense of identity and
              no skills (or so I thought).
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Since then I have worked in business development and management
              consulting in global firms, specialising in people-driven change.
              In 2015, I founded Mightify to show first responders what they are
              truly capable of, and have had the privilege of helping thousands
              worldwide achieve the careers and lifestyles they previously
              talked themselves out of.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              I am a qualified and experienced coach, delivering accredited
              resettlement programmes to police forces nationwide. My policing
              background and skill set was the springboard to every subsequent
              chapter and adventure – showing others how to unlock and present
              this is something I’m passionate about, and I’m delighted to be
              working with Joe to bring this insight and support to the Status
              Zero community.
            </p>
            <p className="mt-8">
              <Link
                href="https://www.linkedin.com/in/tomwheelhouse/"
                className="inline-flex items-center text-base font-medium tracking-tight text-blue-700"
              >
                <LinkedinIcon className="h-10 w-10 fill-current" />
                <span className="ml-4">Follow me on LinkedIn</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
