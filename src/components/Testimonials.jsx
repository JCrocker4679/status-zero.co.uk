import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/icocklin.jpeg'
import avatarImage2 from '@/images/avatars/jclifford.jpeg'
import avatarImage3 from '@/images/avatars/jgiddens.jpeg'
import avatarImage4 from '@/images/avatars/rdorsi.jpeg'
import avatarImage5 from '@/images/avatars/clawrence.jpeg'
import avatarImage6 from '@/images/avatars/gpinner.jpeg'

const testimonials = [
  [
    {
      content:
        "Joe, looking to leave......the best tenner I've spent today!👍🏻 Seriously thanks for compiling such a comprehensive guide. First thing I've done since reading it was to head over to the college of Policing site and lift the role profiles and CVFs into a spreadsheet 👍🏻 so I can compare roles I've had against advertised vacancies",
      author: {
        name: 'Carl Lawrence',
        role: 'Detective Constable, Suffolk',
        image: avatarImage5,
      },
    },
    {
      content:
        'Joe has assisted with translating a career of experience and skills into a CV that translates the public sector private sector language difference. In doing so, Joe’s guidance has demystified the systems, processes, terminology and cultures involved and how my experience should be articulated to transcend such. It has been a painless and developmental experience, made so by the depth and breadth of Joe’s knowledge and emotionally intelligence approach to engagement. Joe’s ability to be succinct, straight talking and frank has been especially refreshing.',
      author: {
        name: "Rafaele D'Orsi",
        role: 'Borough Commander, The Met',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'Massive thanks to Joe Crocker for his help and support in working with me on the development of my CV. If you are looking to transition from Policing to the Private sector and you have not seen his page, then you are missing a trick. His daily updates are invaluable and you really should visit his page. Thanks again Joe.',
      author: {
        name: 'Ian Cocklin',
        role: 'Police Constbale, Devon and Cornwall',
        image: avatarImage1,
      },
    },
    {
      content:
        "I reached out to Joe through LinkedIn after I found myself confused, scared and generally clueless at were to start with leaving the police. Joe was amazing in his quick response to messages and arranging a zoom chat. I went into the zoom chat not really knowing what Joe could do for me, but left feeling proud of what I've achieved, excited for what I can bring to a new role and inspired to apply to jobs I had previously been too scared to apply to.",
      author: {
        name: 'Jason Stanley',
        role: 'Police Sergeant, Sussex',
        image: avatarImage3,
      },
    },
  ],

  [
    {
      content:
        "If anyone is looking at leaving policing or thinking of dipping their toe into the 'real world' I would highly recommend speaking to Joe Crocker. Joe has helped me create a CV and to really understand the transferable skills that officers have in policing. Having been an officer himself he understood what I was trying to explain and expand on in regards to incidents and projects. Who knew all the things we do daily without giving a second thought to are great attributes to a business and actually how skilled and developed officer's really are!? If you are looking at leaving or just want to refresh an existing CV then I couldn't recommend Joe more highly.",
      author: {
        name: 'Gary Pinner',
        role: 'Detective Inspector, BTP',
        image: avatarImage6,
      },
    },
    {
      content:
        'Another day and more great advice from Joe Crocker. Joe has kindly collated lots of fantastic advice onto his feed that I know works. Take confidence from Joe’s advice because it’s true.',
      author: {
        name: 'John Clifford',
        role: 'Detective Sergeant, Durham',
        image: avatarImage2,
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Some nice things people have said"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Kind words from people we&apos;ve helped
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            The ex-police family is one of the most powerful support networks
            anywhere on the planet, and we&apos;re just a small part of it.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
