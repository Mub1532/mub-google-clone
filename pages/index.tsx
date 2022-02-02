import type { NextPage } from "next";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return <div className="h-full w-full text-slate-600">
    <div className="flex flex-col h-full w-full">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>;
};

export default Home;
