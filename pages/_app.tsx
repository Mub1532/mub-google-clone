import { ThemeProvider } from 'next-themes';
import { AppProps } from "next/app";
import Head from "next/head";
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="fixed h-full w-full bg-white dark:bg-zinc-900 transition-all ease-in duration-500 ">
      <Head>
        {/*<!-- Primary Meta Tags -->*/}
        <title>Frontend Development || Mub1532</title>
        <meta name="title" content="Google Clone || Projects @ mubkhan.dev" />
        <meta name="description" content="A Google clone, made by Mub" />
        <meta name="theme-color" content="#3e8fe6" />

        {/*<!-- Open Graph / Facebook -->*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://google.mubkhan.dev" />
        <meta property="og:title" content="Frontend Development || Mub1532" />
        <meta property="og:description" content="A Google clone, made by Mub" />
        <meta property="og:image" content="https://cdn.discordapp.com/avatars/518720512344457216/cabfd7d8b8af9cb5da61124bac1309da.png" />

        {/*<!-- Twitter -->*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://google.mubkhan.dev" />
        <meta property="twitter:title" content="Frontend Development || Mub1532" />
        <meta property="twitter:description" content="A Google clone, made by Mub" />
        <meta property="twitter:image" content="https://cdn.discordapp.com/avatars/518720512344457216/cabfd7d8b8af9cb5da61124bac1309da.png" />

      </Head>
      <ThemeProvider attribute="class">
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