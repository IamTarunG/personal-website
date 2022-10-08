import Head from "next/head"

function HeadContent({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        {/* <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
              <link rel="canonical" href={`https://leerob.io${router.asPath}`} /> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tarun Gudipalli" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        {/* <meta property="og:image" content={meta.image} /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_tarungudipalli" />
        <meta name="twitter:title" content="Tarun" />
        <meta name="twitter:description" content="Focused on Web Development.Love to do 3D renders." />
        {/* <meta name="twitter:image" content={meta.image} /> */}
        {/* {meta.date && (
                  <meta property="article:published_time" content={meta.date} />
              )} */}

      </Head>
    </>
  )
}

export default HeadContent