import React, { PropsWithChildren, ReactElement } from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout<T>({
  children
}: PropsWithChildren<T>): ReactElement {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
