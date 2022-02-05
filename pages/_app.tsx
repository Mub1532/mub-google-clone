import { ThemeProvider } from 'next-themes';
import { AppProps } from "next/app";
import Head from "next/head";
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="fixed h-full w-full bg-white dark:bg-zinc-900 transition-all ease-in duration-500 ">
      <Head>
        {/*<!-- Primary Meta Tags -->*/}
        <title>Google Clone || Projects @ mubkhan.dev</title>
        <meta name="title" content="Google Clone || Projects @ mubkhan.dev" />
        <meta name='og:site_name' content="Frontend Development || mubkhan.dev" />
        <meta name="description" content="Google (clone), except it doesnt track you, fully open source, with search functionality and dark mode, Made by mubkhan.dev" />
        <meta name="theme-color" content="#3759ec" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favico.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favico.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favico.ico" />
        {/*<!-- Open Graph / Facebook -->*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://google.mubkhan.dev" />
        <meta property="og:title" content="Google Clone || Projects @ mubkhan.dev" />
        <meta property="og:description" content="Google (clone), except it doesnt track you, fully open source, with search functionality and dark mode, Made by mubkhan.dev" />
        <meta property="og:image" content="https://media.discordapp.net/attachments/937815101275254804/939263093039575050/unknown.png" />

        {/*<!-- Twitter -->*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://google.mubkhan.dev" />
        <meta property="twitter:title" content="Google Clone || Projects @ mubkhan.dev" />
        <meta property="twitter:description" content="Google (clone), except it doesnt track you, with search functionality and dark mode, Made by mubkhan.dev" />
        <meta property="twitter:image" content="https://media.discordapp.net/attachments/937815101275254804/939263093039575050/unknown.png" />

      </Head>
      <ThemeProvider attribute="class" defaultTheme='light'>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp


{
  /* 
  TODO: Make responsive, search functionality, darkmode
  */
}