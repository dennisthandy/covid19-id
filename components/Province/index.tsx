import React, { ReactElement } from 'react'
import { Cases } from '../../lib/types'
import { formatCurrency } from '../../lib'

interface Props {
  name: string
  cases: Cases
}

export default function Province({ name, cases }: Props): ReactElement {
  return (
    <div className="rounded-3xl bg-ex-sky p-3 hover:shadow-md">
      <h4 className="text-center text-ex-black font-bold text-base mb-4">
        {name}
      </h4>
      <div className="text-center grid gap-2">
        <p>
          <span className="font-bold tracking-wide text-lg">
            {formatCurrency(cases.infected)}
          </span>
          <br />
          <span className="text-white px-2 py-1 rounded-lg bg-yellow-600 text-xs">
            Terkonfimasi
          </span>{' '}
        </p>
        <p>
          <span className="font-bold tracking-wide text-lg">
            {formatCurrency(cases.recovered)}
          </span>
          <br />
          <span className="text-white px-2 py-1 rounded-lg bg-green-600 text-xs">
            Sembuh
          </span>
        </p>
        <p>
          <span className="font-bold tracking-wide text-lg">
            {formatCurrency(cases.fatal)}
          </span>
          <br />
          <span className="text-white px-2 py-1 rounded-lg bg-ex-red text-xs">
            Meninggal
          </span>
        </p>
      </div>
    </div>
  )
}
