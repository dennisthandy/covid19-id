/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { formatDate } from '../lib'
import { getData } from '../lib/slices/covid'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Province from '../components/Province'

export default function Home(): ReactElement {
  const dispatch = useAppDispatch()
  const { data, loading, error } = useAppSelector((state) => state.covid)
  const [search, setSearch] = useState<string>('')
  const [regions] = useState(data?.regions)
  const [filteredRegions, setFilteredRegions] = useState([])

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  useEffect(() => {
    setFilteredRegions(
      regions?.filter((region: any) =>
        region.name
          .toLowerCase()
          .replace(/\s/g, '')
          .includes(search.toLowerCase())
      )
    )
  }, [search, regions])

  if (loading === 'pending') {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    )
  }

  return (
    <Layout>
      <div className="grid place-content-start gap-1">
        <h1 className="text-2xl font-bold tracking-wider text-ex-black">
          Kasus Seluruh Indonesia
        </h1>
        <p className="text-ex-gray text-sm bg-">
          Berikut ini informasi jumlah kasus di Indonesia saat ini, pembaruan
          terakhir{' '}
          <span className="text-ex-black">{formatDate(data?.timestamp)}</span>
        </p>
      </div>

      <div className="mt-8 grid place-items-center gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Card
          label="Terinfeksi"
          cases={data?.numbers?.infected}
          color="bg-yellow-600"
        />
        <Card
          label="Sembuh"
          cases={data?.numbers?.recovered}
          color="bg-green-600"
        />
        <Card
          label="Meninggal"
          cases={data?.numbers?.fatal}
          color="bg-ex-red"
        />
        <Card
          label="Dalam Perawatan"
          cases={
            data?.numbers?.infected -
            data?.numbers?.recovered -
            data?.numbers?.fatal
          }
          color="bg-ex-pink"
        />
      </div>

      <div className="grid gap-1 mt-10">
        <h1 className="text-2xl font-bold tracking-wider text-ex-black">
          Kasus Tiap Provinsi
        </h1>
        <p className="text-ex-gray text-sm bg-">
          Berikut ini informasi jumlah kasus tiap Provinsi di Indonesia saat
          ini, pembaruan terakhir{' '}
          <span className="text-ex-black">{formatDate(data?.timestamp)}</span>
        </p>
        <div className="relative w-full">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            className="form-input rounded mt-2 py-1 w-full"
            type="text"
            value={search}
            placeholder=" "
          />
          <label htmlFor="cari" className="absolute top-3 left-3 opacity-50">
            Cari Provinsi
          </label>
        </div>
      </div>

      <div className="mt-8 grid place-content-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
        {filteredRegions?.map((province: any, index: number) => {
          return (
            <Province
              key={index}
              name={province.name}
              cases={province.numbers}
            />
          )
        })}
      </div>
    </Layout>
  )
}
