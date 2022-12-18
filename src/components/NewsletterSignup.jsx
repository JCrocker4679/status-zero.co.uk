import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/CourseContainer'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function NewsletterSignup() {
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
          className="py-18 relative grid grid-cols-1 items-end gap-y-12 lg:static lg:grid-cols-2 lg:py-20 xl:py-20"
        >
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Get the free newsletter
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-100">
              Enter your email address and I’ll send you updates from our
              community, success stories, tips, events and resources.
            </p>
          </div>
          <form className="lg:pl-16">
            <h3 className="text-base font-medium tracking-tight text-white">
              Get the highlights straight to your inbox{' '}
              <span aria-hidden="true">&rarr;</span>
            </h3>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="email"
                  id="email-address"
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  className=" peer relative z-10 w-full appearance-none border-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:border-none focus:outline-none focus:ring-0 focus:filter-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-blue-500 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" />
              </div>
              <Button
                type="submit"
                color="white"
                className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
              >
                Get the Newsletter
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </section>
  )
}
