import 'focus-visible'
import '@/styles/tailwind.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useEffect } from 'react'
import Router from 'next/router'
import * as Fathom from 'fathom-client'

// Record a pageview when route changes
Router.events.on('routeChangeComplete', (as, routeProps) => {
  if (!routeProps.shallow) {
    Fathom.trackPageview()
  }
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Fathom.load('MZNWGAND', {
      includedDomains: ['www.statuszero.co.uk', 'statuszero.co.uk'],
    })
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
