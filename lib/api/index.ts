/* eslint-disable @typescript-eslint/no-explicit-any */
// https://api.kawalcorona.com/indonesia/provinsi/
export async function getCovid(): Promise<any> {
  const response = await fetch('/api/id/covid19/stats/')
  const data = await response.json()
  return data
}
