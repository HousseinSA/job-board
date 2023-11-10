import "../app/global.css"
import {SessionProvider} from "next-auth/react"
import Head from "next/head"

function MyApp({Component, pageProps}) {
  return (
    <SessionProvider>
      <Head>
        <title>Job-Board</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
