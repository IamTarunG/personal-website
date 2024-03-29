import Head from "next/head"
import { useRouter } from 'next/router'
function HeadContent({ title, description }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta property="og:url" content={`https://tarungudipalli.vercel.app${router.asPath}`} />
        <link rel="canonical" href={`https://tarungudipalli.vercel.app${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tarun Gudipalli" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_tarungudipalli" />
        <meta name="twitter:title" content="Tarun" />
        <meta name="twitter:description" content="I love learning new stuff!" />
        <link rel="icon" type="image/png" sizes="32x32" href="/tg.png"></link>

      </Head>
    </>
  )
}

export default HeadContent
