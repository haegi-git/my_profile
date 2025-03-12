import { useState } from "react";
import "./App.css";
import StartPopup from "./components/StartPopup";
import Profile from "./components/Profile";
import Skills from "./components/skills";
import Portfolio from "./components/Protfolio/Portfolio";

function App() {
  const [closeGreetings, setCloseGreetings] = useState(true);
  const [fadeGreetings, setFadeGreetings] = useState(false);

  const handleGreetings = () => {
    setFadeGreetings(true);
    setTimeout(() => {
      setCloseGreetings(false);
    }, 1000);
  };
  return (
    <>
      <div onClick={handleGreetings}>
        <Profile />
        <Skills />
        <Portfolio />
        {closeGreetings ? <StartPopup fadeGreetings={fadeGreetings} /> : null}
      </div>
    </>
  );
}

export default App;
