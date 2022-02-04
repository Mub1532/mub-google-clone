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
        <meta name="title" content="Frontend Development || Mub1532" />
        <meta name="description" content="Hello, welcome to my site, here you will find all sorts of things such as My Projects, services and much more!" />

        {/*<!-- Open Graph / Facebook -->*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mubkhan.dev/" />
        <meta property="og:title" content="Frontend Development || Mub1532" />
        <meta property="og:description" content="Hello, welcome to my site, here you will find all sorts of things such as My Projects, services and much more!" />
        <meta property="og:image" content="https://cdn.discordapp.com/avatars/518720512344457216/cabfd7d8b8af9cb5da61124bac1309da.png" />

        {/*<!-- Twitter -->*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.mubkhan.dev/" />
        <meta property="twitter:title" content="Frontend Development || Mub1532" />
        <meta property="twitter:description" content="Hello, welcome to my site, here you will find all sorts of things such as My Projects, services and much more!" />
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