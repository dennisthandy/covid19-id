import React, { PropsWithChildren, ReactElement } from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout<T>({
  children
}: PropsWithChildren<T>): ReactElement {
  return (
    <section className="relative min-h-screen container mx-auto lg:px-14 2xl:px-28">
      <Header />
      <main className="py-10 px-3">{children}</main>
      <Footer />
    </section>
  )
}
