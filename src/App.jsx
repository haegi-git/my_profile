import "./App.css";
import Aboutme from "./components/Aboutme";
import BackgroundCircles from "./components/BackgroundCircles";
import Info from "./components/Info";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative lg:w-[80%] m-auto font-montserrat">
      <BackgroundCircles />

      {/* ✅ 데스크탑(lg 이상)에서는 그룹으로 묶음 */}
      <div className="hidden lg:flex lg:gap-8">
        <div className="lg:flex lg:flex-col w-1/2">
          <Info />
          <Skills />
        </div>
        <Aboutme />
      </div>

      {/* ✅ 모바일에서는 개별적으로 출력 */}
      <div className="lg:hidden">
        <Info />
        <Aboutme />
        <Skills />
      </div>

      <Portfolio />
    </div>
  );
}

export default App;
