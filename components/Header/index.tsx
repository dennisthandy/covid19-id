import React, { ReactElement, useState } from 'react'
import Link from 'next/link'
import * as Icon from '@geist-ui/react-icons'

export default function Header(): ReactElement {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <header className="px-3 py-2">
      <nav className="relative grid grid-flow-col place-content-between">
        <div>Covid-19 Indonesia</div>
        <button onClick={() => setOpenMenu(true)}>
          <Icon.Menu size={16} />
        </button>
        <ul className={`${openMenu ? '' : 'hidden'}`}>
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
