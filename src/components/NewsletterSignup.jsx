import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { NewsletterSuccess } from '@/components/NewsletterSuccess'
import { Button } from '@/components/Button'
import { Container } from '@/components/CourseContainer'
import classNames from 'classnames'
import backgroundImage from '@/images/background-call-to-action.jpg'

const ErrorMessage = ({ message }) => (
  <p className="mt-1 inline-block px-3 text-sm font-bold text-red-800">
    {' '}
    {message}
  </p>
)

export function NewsletterSignup() {
  const { handleSubmit, register, errors } = useForm()

  const subscribe = async ({ email }) => {
    const res = await fetch(`/api/subscribe?email=${email}`)
    if (!res.ok) {
      throw 'There was an error signing up. Please try again later.'
    }
  }

  const { mutate, isSuccess, isLoading, isError, error } = useMutation((data) =>
    subscribe(data)
  )

  const onSubmit = (data) => mutate(data)

  const inputClass = classNames({
    'peer relative z-10 w-full appearance-none border-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:border-none focus:outline-none focus:ring-0 focus:filter-none sm:py-3': true,
    'opacity-50 cursor-not-allowed': isLoading,
  })

  const btnClass = classNames({
    'mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none': true,
    'opacity-50 cursor-not-allowed': isLoading,
  })

  const formClass = classNames({
    'absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-blue-500 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl': true,
    'bg-blue-500 border-blue-300 ring-1 ring-blue-300 cursor-not-allowed':
      isLoading,
  })

  if (isSuccess) {
    return <NewsletterSuccess />
  }

  return (
    <section
      id="interested"
      className="relative scroll-mt-14 overflow-hidden scroll-smooth bg-blue-600 py-32"
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
          size="lg"
          className="py-18 relative grid grid-cols-1 items-end gap-y-12 lg:static lg:grid-cols-2 lg:py-10 xl:py-10"
        >
          <div>
            <h2 className="font-display text-5xl tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Register your interest
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-100">
              Get periodic emails about course developments, feedback, success
              stories, and new course dates, so you can sign up when you&apos;re
              ready.
            </p>
          </div>
          <form className="lg:pl-16" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-base font-medium tracking-tight text-white">
              No spam, unsubscribe at any time.
              <span aria-hidden="true">&rarr;</span>
            </h3>

            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="email"
                  id="email-address"
                  name="email"
                  {...register('email')}
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  className={inputClass}
                  disabled={isLoading}
                />
                <div className={formClass} />
              </div>
              <Button
                type="submit"
                color="white"
                className={btnClass}
                disabled={isLoading}
              >
                {isLoading ? 'Processing' : "I'm interested"}
              </Button>
            </div>
            {isError && <ErrorMessage message={error} />}
          </form>
        </Container>
      </div>
    </section>
  )
}
