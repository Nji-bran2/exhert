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

const Home = () => {
   const scrollToRef = useRef(null);

  return (
    <>
      <Main />
      <Learn scrollToRef={scrollToRef} />
      <AboutUs/>
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
