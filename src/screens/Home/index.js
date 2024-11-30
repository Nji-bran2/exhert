import React, { useRef } from "react";
import Main from "./Main";
import Learn from "./Learn";
import Trend from "./Trend";
import Popular from "../../components/Popular";
import Download from "./Download";
import News from "../../components/News";
import Steps from "./Steps";
import Newsletter from "./News";
import AboutUs from "./about";
import Feature from "./Features";
import Market from "../p2p";
import OrderForm from "../../components/OrderForm";
import P2PMarket from "./P2PTable";

const Home = () => {
   const scrollToRef = useRef(null);

  return (
    <>
      <Main />
      <AboutUs/>
      <Learn scrollToRef={scrollToRef} />
      
      <Trend />
      <Popular classSection="section-bg section-mb0" />
      <Download />
      <News classSection="section-bg" />
      <Steps />

      <Feature/>
    </>
  );
};

export default Home;
