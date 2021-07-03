import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { store } from '../lib/store'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
