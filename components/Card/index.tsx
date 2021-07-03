import React, { ReactElement } from 'react'
import {formatCurrency} from '../../lib'

interface Props {
  label: string
  cases: number
  color?: string 
}

export default function Card({label, cases, color}: Props): ReactElement {
  return (
    <div className="relative grid place-items-center gap-1 px-4 py-2 w-full rounded-3xl bg-ex-white transition-shadow hover:shadow-md">
      <p className="font-bold text-4xl tracking-wider">{formatCurrency(cases)}</p>
      <p className={`px-2 pb-1 rounded-md ${color} text-white inline-block`}>{label}</p>
    </div>
  )
}
