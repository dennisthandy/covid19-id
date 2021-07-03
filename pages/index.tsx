import React, { useEffect } from 'react'
import { ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { getData } from '../lib/slices/covid'
import Layout from '../components/Layout'

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

  if(error) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    )
  }

  return (
    <Layout>
      <h1 className="text-blue-400">im from tailwind css</h1>
      {data && JSON.stringify(data)}
    </Layout>
  )
}
