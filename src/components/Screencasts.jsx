import Image from 'next/image'

import { Container } from '@/components/CourseContainer'
import { SectionHeading } from '@/components/SectionHeading'
import duotoneImage from '@/images/screencasts/duotone.svg'
import gridsImage from '@/images/screencasts/grids.svg'
import setupImage from '@/images/screencasts/setup.svg'
import strokesImage from '@/images/screencasts/strokes.svg'
import introduction from '@/images/screencasts/introduction.jpeg'
import meet from '@/images/screencasts/meet.svg'
import skills from '@/images/screencasts/skills.svg'
import jobsearch from '@/images/screencasts/jobsearch.svg'
import socialmedia from '@/images/screencasts/socialmedia.svg'

const videos = [
  {
    title: 'Find your fit',
    description:
      'See the intersection between your hopes, dreams and market realities, or your "candidate-market-fit".',
    image: meet,
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: 'Translate your skills ',
    description:
      'Translate your police achievements into business language hiring managers are looking for.',
    image: skills,
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: 'Create your assets',
    description:
      'Craft CVs, cover letters, LinkedIn profiles and other assets that stand out in your job search.',
    image: jobsearch,
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Increase your chances',
    description:
      'Grow your surface area for success by building a body of evidence and network of references online.',
    image: socialmedia,
    runtime: { minutes: 28, seconds: 44 },
  },
]

// function PlayIcon(props) {
//   return (
//     <svg
//       aria-hidden="true"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       viewBox="0 0 16 16"
//       {...props}
//     >
//       <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
//       <circle cx="8" cy="8" r="6.25" fill="none" />
//     </svg>
//   )
// }

export function Screencasts() {
  return (
    <section
      id="Online Delivery"
      aria-labelledby="Online Delivery - title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="screencasts-title">
          How it Works
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Our 4-step process to finding the job you want.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Most career changers focus waste £100&apos;s on generic CVs then post
          on LinkedIn to announce they are &quot;open to opportunities&quot;
          only to find that nothing happens. Succesful job searches are focused
          on outcomes - we&apos;ll show you what really works and exactly how to
          do it.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-y-10 gap-x-6 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {videos.map((video) => (
            <li key={video.title} className="[counter-increment:video]">
              <div

              // className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
              // style={{
              //   backgroundImage:
              //     'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
              // }}
              >
                <div>
                  {/* <div className="flex overflow-hidden rounded shadow-sm"> */}
                  <Image src={video.image} height={165} alt="" unoptimized />
                </div>
                {/* <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  <PlayIcon className="h-4 w-4 fill-current stroke-current" />
                  <time
                    dateTime={`${video.runtime.minutes}m ${video.runtime.seconds}s`}
                    className="ml-2"
                  >
                    {`${video.runtime.minutes}:${video.runtime.seconds
                      .toString()
                      .padStart(2, '0')}`}
                  </time>
                </div> */}
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{video.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
