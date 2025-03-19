import "./App.css";
import Aboutme from "./components/Aboutme";
import BackgroundCircles from "./components/BackgroundCircles";
import Info from "./components/Info";
import Portfolio from "./components/Portfolio";
import PortfolioPopup from "./components/PortfolioPopup";
import Skills from "./components/skills";

import movo from "./assets/movo.png";
function App() {
  return (
    <div className="relative h-[1000vh]">
      <BackgroundCircles />
      <Info />
      <Aboutme />
      <Skills />
      <Portfolio />
      {/* <PortfolioPopup img={movo} title={"운동인들의 커뮤니티 - Movo"} /> */}
    </div>
  );
}

export default App;
