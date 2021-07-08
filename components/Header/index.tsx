import React, { ReactElement } from 'react'
import * as Icon from '@geist-ui/react-icons'
import Image from 'next/image'
export default function Header(): ReactElement {
  return (
    <header className="relative px-3 py-2">
      <nav className="grid grid-flow-col place-content-between">
        <div>
          <p className="font-bold">Covid-19 Indonesia</p>
        </div>
        <div className="flex">
          <a
            href="https://trakteer.id/dennisthandy/tip"
            target="_target"
            rel="noreferrer"
            className="rounded mr-2 px-2"
            style={{
              background: '#991a26'
            }}>
            <Image
              src="/navbar-logo-lite-white-beta.png"
              alt="Trakteer"
              width={68}
              height={18}
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/dennisthandy/covid19-id">
            <Icon.Github />
          </a>
        </div>
      </nav>
    </header>
  )
}
