// Written from scratch
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function ApplicationLayout(props) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Blue Tomorrow {router.pathname.substring(1)}</title>
        <meta
          name="description"
          content="Blog about environmental technology news"
        />
      </Head>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}
