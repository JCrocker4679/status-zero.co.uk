import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Will you find me a job?',
      answer:
        "No - we'll give you the tools, skills and confidence to figure out the next step in your career and go get it, but we're not recruiters and we don't work with any recruitment agencies.",
    },
    {
      question: "Why isn't this free?",
      answer:
        'Unlike with the military, there are no formal government backed resettlement schemes that would include this type of training. We provide this training independently because we know just how hard it is to get any support for leaving. We want to keep the cost accessible whilst charging enough to keep you accountable.',
    },
    {
      question: 'How much does it cost?',
      answer:
        "You can find career coaches charging £1000's for tips, tricks and hacks who know nothing about policing. We believe cops just need clear instructions and the tools and confidence to get started. The course gives you that for £199. ",
    },
  ],
  [
    {
      question: 'Can this really work for me?',
      answer:
        "Honestly, it's not rocket science. The problem wont be a lack of skills or experience, it will be a lack of clarity around what your next career move should be and a lack of knowledge around best practices. We can help with both.",
    },
    {
      question: 'Do I have to attend the live sessions?',
      answer:
        'No - everything is available as a recording for you to watch whenver suits you. We encourage you to add comments and posts ',
    },
    {
      question: 'How does the community element work?',
      answer:
        "The course is provided through an online application called circle.so. It's not 'social media' so everything is kept private - the only people who can see it are people who've paid to be on the course. All your videos, materials and classmates will be provided through circle, and we encourage comments and feedback on exercises throughout the course within the platform.",
    },
  ],
  [
    {
      question: 'What if I want a refund?',
      answer:
        "If you don't think the course was worth the money, for whatever reason, we'll refund your purchase. All we ask if that you engage with the course materials and live sessions for 14 days. If after enrolling you find that your schedule is busier than you though, we'll roll you forward into a future cohort at zero additional cost. ",
    },
    {
      question: 'How long do I have access to the course materials?',
      answer:
        "You get everything - forever. All course materials will be available to you in circle and to download. You'll be able to stay in touch for as long as you need, and we hope eventually you'll share your story back with us.",
    },
    {
      question: "What if i'm not very tech savvy?",
      answer:
        "Don't worry, you're not alone. If you're familiar with tools like Zoom, Teams or LinkedIn, you'll be right at home in Circle and we spend the first part of the course making sure everyone in the class is comfortable with the tech.",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-4xl font-bold tracking-tight text-slate-900"
          >
            Frequently asked questions
          </h2>
          <p className="text-slate-60 mt-4 text-lg tracking-tight">
            Most people have the same questions and worries, so here is what we
            get asked most often.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
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
