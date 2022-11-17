import Candidate from "./components/Candidate";
import ChallengeNProfit from "./components/ChallengeNProfit";
import Coach from "./components/Coach";
import PopupRegister from "./components/common/PopupRegister";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Organiser from "./components/Organiser";
import Plan from "./components/Plan";
import { PopupProvider } from "./contexts/popupContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BackToTop from "./components/common/BackToTop";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <PopupProvider>
        <Header></Header>
        <Hero></Hero>
        <Candidate></Candidate>
        <ChallengeNProfit></ChallengeNProfit>
        <Plan></Plan>
        <Coach></Coach>
        <Content></Content>
        <Organiser></Organiser>
        <Footer></Footer>
        <PopupRegister></PopupRegister>
        <BackToTop></BackToTop>
      </PopupProvider>
    </>
  );
}

export default App;
