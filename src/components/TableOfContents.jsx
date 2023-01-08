import { Container } from '@/components/CourseContainer'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Week 1: Who are you - really?': {
    'Introduce yourself': 'Day 1',
    'Wheel of life': 'Day 2',
    'Understand your personality': 'Day 3',
    'Recognise your strengths': 'Day 4',
    'Define your values': 'Day 5',
  },
  'Week 2: Skills Week': {
    'Managing perceptions of public servants': 'Day 8',
    'Tackling self-limiting beliefs': 'Day 9',
    'Explaining transferrable skills': 'Day 10',
    'Finding jobs you could do': 'Day 11',
    'Ikigai - your sense of purpose': 'Day 12',
  },
  'Week 3: CVs and Job Applications': {
    'Automating your job search': 'Day 15',
    'Defining a good CV': 'Day 16',
    'The cutting room floor - what to include': 'Day 17',
    '5 rules for CV formatting': 'Day 18',
    'Cover letters and processing feedback': 'Day 19',
  },
  'Week 4: Building your brand': {
    'Unlearning Social Media': 'Day 22',
    'Effective LinkedIn Profiles': 'Day 23',
    'Identify your Audience': 'Day 24',
    'Backstory - why leaving matters': ' Day 25',
    'Meet the new you': 'Day 26',
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Table of contents
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Take a look at all of the content covered in the course. Everything
          you need to know is included.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          OK... so “The Ex-Police Officers handbook” isn&apos;t an actual book,
          but it is a carefully structured, CPD accredited curriculum based on
          cutting-edge job search techniques and a holistic approach to health,
          wealth and happiness. We walk the path with you, every step of the
          way, with no unecessary filler.
        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 2)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 py-3 px-6 text-base tracking-tight sm:py-7 sm:px-8"
                      >
                        {Object.entries(pages).map(([title, day]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${day}`}
                          >
                            <span
                              className="font-medium text-slate-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                            <span
                              className="font-mono text-slate-400"
                              aria-hidden="true"
                            >
                              {day}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
              <Expandable.Button>See more</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
