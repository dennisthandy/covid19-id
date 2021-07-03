import React, { useEffect } from 'react'
import { ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { getData } from '../lib/slices/covid'
import Layout from '../components/Layout'
import Card from '../components/Card'

export default function Home(): ReactElement {
  const dispatch = useAppDispatch()
  const { data, loading, error } = useAppSelector((state) => state.covid)

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

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
          Jumlah Kasus
        </h1>
        <p className="text-ex-gray text-sm bg-">
          Berikut ini informasi jumlah kasus di Indonesia saat ini, pembaruan
          terakhir {`${data?.timestamp}`}
        </p>
      </div>

      <div className="mt-8 grid place-items-center gap-5">
        <Card label="Terinfeksi" cases={data?.numbers?.infected} color="bg-yellow-600" />
        <Card label="Sembuh" cases={data?.numbers?.recovered} color="bg-green-600"/>
        <Card label="Meninggal" cases={data?.numbers?.fatal} color="bg-ex-red" />
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
    </Layout>
  )
}
