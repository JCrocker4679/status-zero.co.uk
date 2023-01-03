import Image from 'next/image'

import { Container } from '@/components/CourseContainer'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import circleImage from '@/images/resources/Circle_Logo.png'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'
import exercisesImage from '@/images/resources/exercises.svg'
import downloadImage from '@/images/resources/download.svg'
import communityImage from '@/images/resources/community2.svg'

const resources = [
  {
    title: 'Private community of cops',
    description:
      'A safe online space of like-minded cops where you can get help and collaborate.',
    image: function CircleImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 ">
          <Image src={communityImage} alt="" unoptimized height={145} />
        </div>
      )
    },
  },
  {
    title: 'Practical Exercises',
    description:
      'Build yourself a CV and LinkedIn profile that gets you interviews for the jobs you want',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center  bg-slate-100">
          <Image src={exercisesImage} alt="" height={150} unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Completely Flexible',
    description:
      'Follow along live or catch-up later, all videos and resources are available to download after.',
    image: function VideoPlayerImage() {
      return (
        <div className="] absolute inset-0 flex items-center  justify-center bg-slate-100">
          {/* <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          /> */}
          <Image
            className="relative"
            src={downloadImage}
            alt=""
            height={200}
            unoptimized
          />
        </div>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="resources-title">
          Online Delivery
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          A cutting-edge approach to courses and job searching
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Becoming part of a &quot;Job Search Council&quot; is the best kept
          secret in Silicon Valley, and by studying as a group you increase your
          chances of success to over 85%.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
