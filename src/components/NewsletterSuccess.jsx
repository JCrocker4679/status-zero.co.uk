import Image from 'next/image'
import { Container } from '@/components/CourseContainer'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function NewsletterSuccess() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="py-18 relative grid grid-cols-1 items-end gap-y-12 lg:static lg:py-10 xl:py-10"
        >
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Thanks for signing up.
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-100">
              Please check your emails to confirm your email address
            </p>
          </div>
        </Container>
      </div>
    </section>
  )
}
