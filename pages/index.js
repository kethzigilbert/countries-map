import { Paper, Typography } from '@mui/material'
import Head from 'next/head'
import Map from '../components/map'
import WorldMap from '../components/maps'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Country Maps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className='d-flex flex-column'>

        <WorldMap />

      </main>

    </div>
  )
}
