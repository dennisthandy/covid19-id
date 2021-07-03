/* eslint-disable @typescript-eslint/no-explicit-any */
// https://dekontaminasi.com/api/id/covid19/stats
// file:///C:/Users/Dennis/Downloads/stats.timestamp
// https://cekdiri.id/vaksinasi/

export async function getCovid(): Promise<any> {
  const response = await fetch('/api/id/covid19/stats')
  const data = await response.json()
  return data
}
