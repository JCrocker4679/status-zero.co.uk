import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
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
      {/* <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div> */}
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="pt-p6 bg-slate-50 sm:rounded-6xl">
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
              <span className="block text-blue-700">Joe Crocker –</span> Hey
              there, I’m the ex-cop behind Status Zero.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              5 years ago, I left policing for a tech startup.{' '}
            </p>

            <p className="mt-4 text-lg tracking-tight text-slate-700">
              After 9 years service, with 2 kids, a mortgage and some
              challenging personal circumstances, I felt more broke and lost
              than I did as a Uni student. I had developed skills and expertise
              I didn&apos;t feel were recognised by the job, and I didn&apos;t
              want to leave those skills behind for a &apos;promotion&apos; to
              custody, main office or traffic. I left because I needed to make
              more money.
            </p>

            <p className="mt-4 text-lg tracking-tight text-slate-700">
              {' '}
              In less than 2 years I doubled my salary and 10x&apos;d my quality
              of life. I&apos;ve since worked as a hiring manager for 2 tech
              start-ups for over 15 different roles, reviewed 100s of CVs,
              conducted a bunch of interviews and I&apos;ve been helping cops
              write their CVs for over 18 months.{' '}
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Now, I write on LinkedIn every day to thousands of unsettled
              police officers looking for help in making their own career
              transitions, and am growing the Status Zero support community as
              best I can.
            </p>
            <p className="mt-8">
              <Link
                href="#"
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
