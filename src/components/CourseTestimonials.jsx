import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/CourseContainer'
import { Expandable } from '@/components/Expandable'
import hampshire from '@/images/avatars/hampshire.png'
import surrey from '@/images/avatars/surreypolice.png'
import avonandsomerset from '@/images/avatars/avonandsomerset.png'
import leicestershire from '@/images/avatars/leicestershire.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'

const testimonials = [
  [
    {
      content:
        'The course has given me some additional confidence that I am in teh right place in terms of what I am seeking to achieve',
      author: {
        name: 'Hampshire Police',
        role: 'March 2021',
        image: hampshire,
      },
    },
    {
      content:
        'It was all very professional. I very much felt that the presenters definitely knew their stuff. Very useful and inspiring.',
      author: {
        name: 'Surrey Police',
        role: 'July 2021',
        image: surrey,
      },
    },
    {
      content:
        "It helped me understand how to translate my police experience into business value and now I'm much more confident applying for jobs",
      author: {
        name: 'Avon and Somerset Police',
        role: 'May 2019',
        image: avonandsomerset,
      },
    },
  ],
  [
    {
      content:
        'I have acquired a surprising amount of detail in relation to CVs, interviews and interview technique. I feel much more equipped going forward',
      author: {
        name: 'Surrey Police',
        role: 'July 2021',
        image: surrey,
      },
    },
    {
      content:
        "We're all more skilled than we realise and those skills are transferable - i'm not 'just' a cop!",
      author: {
        name: 'Leicestershire Police',
        role: 'September 2021',
        image: leicestershire,
      },
    },
    {
      content:
        "The course and inputs has really made me feel more open to the next phase of my working life - not seeing it as retirement made a huge difference. I'm looking forward to the end date.",
      author: {
        name: 'Hampshire Police',
        role: 'March 2021',
        image: hampshire,
      },
    },
  ],
  [
    {
      content:
        "I felt a bit lost wasn't really sure where to start as it had been 25 years since I last applied for a job - I am much more positive and with more self belief.",
      author: {
        name: 'Hampshire Police',
        role: 'March 2021',
        image: hampshire,
      },
    },
    {
      content:
        'Whilst I had an understanding of CV writing I have learned far more than I expected about content, layout and how to tailor htem to specific job roles.',
      author: {
        name: 'Surrey Police',
        role: 'July 2021',
        image: surrey,
      },
    },
    {
      content:
        'Excellent, clear, professional - great mix of getting involved and presentations. Time went quick which is a good sign!',
      author: {
        name: 'Leicestershire Police',
        role: 'September 2021',
        image: leicestershire,
      },
    },
  ],
]

function Testimonial({ author, children }) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-contain"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className=" py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Some kind words from other cops...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          It might be the first time we&apos;ve taken the course online, but
          we&apos;ve been teaching police officers these tricks for years.
          Here&apos;s what some of them had to say.
        </p>
      </Container>
      <Expandable>
        {({ isExpanded }) => (
          <>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
            >
              {testimonials
                .map((column) => column[0])
                .map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex} className="lg:hidden">
                    <Testimonial author={testimonial.author}>
                      {testimonial.content}
                    </Testimonial>
                  </li>
                ))}
              {testimonials.map((column, columnIndex) => (
                <li
                  key={columnIndex}
                  className={isExpanded ? undefined : 'hidden lg:list-item'}
                >
                  <ul role="list">
                    {column
                      .slice(0, isExpanded ? undefined : 2)
                      .map((testimonial, testimonialIndex) => (
                        <li
                          key={testimonialIndex}
                          className={clsx(
                            testimonialIndex === 0 && 'hidden lg:list-item',
                            testimonialIndex === 1 && 'lg:mt-8',
                            testimonialIndex > 1 && 'mt-8'
                          )}
                        >
                          <Testimonial author={testimonial.author}>
                            {testimonial.content}
                          </Testimonial>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
            <Expandable.Button>Read more testimonials</Expandable.Button>
          </>
        )}
      </Expandable>
    </section>
  )
}
