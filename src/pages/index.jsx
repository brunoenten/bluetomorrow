import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Blog } from '@/components/Blog'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blue Tomorrow - Your source for everything green</title>
        <meta
          name="description"
          content="Blog about environmental technology news"
        />
      </Head>
      <Header />
      <main>
        <Blog />        
      </main>
      <Footer />
    </>
  )
}
