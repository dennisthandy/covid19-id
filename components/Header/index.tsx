import React, { ReactElement, useState } from 'react'
import Link from 'next/link'
import * as Icon from '@geist-ui/react-icons'

export default function Header(): ReactElement {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <header className="relative px-3 py-2">
      <nav className="grid grid-flow-col place-content-between">
        <div><p className="font-bold">Covid-19 Indonesia</p></div>
        <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <Icon.X size={16} /> : <Icon.Menu size={16} />}
        </button>
        <ul
          className={`${
            openMenu ? '' : 'hidden'
          } absolute md:relative z-10 top-0 left-0 right-1/4 bg-white min-h-screen md:min-h-0 grid md:grid md:grid-flow-col place-content-start gap-2 p-4 md:py-0 shadow-lg md:shadow-none`}>
          <li>
            <Link href="/">Beranda</Link>
          </li>
          <li>
            <Link href="/">Vaksin</Link>
          </li>
          <li>
            <Link href="/">Tentang</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
