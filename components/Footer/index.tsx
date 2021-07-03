import React, { ReactElement } from 'react'

export default function Footer(): ReactElement {
  return (
    <footer>
      <p className="text-center text-sm">
        Made with 💛 by{' '}
        <a
          className="text-blue-400 hover:text-blue-600"
          href="https://github.com/dennisthandy">
          @dennisthandy
        </a>
      </p>
    </footer>
  )
}
