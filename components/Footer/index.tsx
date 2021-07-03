import React, { ReactElement } from 'react'

export default function Footer(): ReactElement {
  return (
    <footer className="absolute bottom-0 w-full py-3">
      <p className="text-center text-xs">
        Made with <span role="img" aria-label="heart">💛</span> by{' '}
        <a
          className="text-blue-400 hover:text-blue-600"
          href="https://github.com/dennisthandy">
          @dennisthandy
        </a>
      </p>
    </footer>
  )
}
