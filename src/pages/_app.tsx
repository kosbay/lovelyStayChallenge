import React from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'

import '../../public/styles/index.scss'

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    }
  }
)

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: any
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}