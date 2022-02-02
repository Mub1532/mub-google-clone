import { AppProps } from "next/app";
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="fixed h-full w-full">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp


{
  /* 
  TODO: Make responsive, search functionality, darkmode
  */
}