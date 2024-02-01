import Home from "./Component/HomeComp/Home";
import IntroSection from "./Component/IntroSection/IntroSection";
import Navbar from "./Component/NavBar/Navbar";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className={styles.wrapper}>
        {" "}
        <IntroSection />{" "}
      </div>{" "}
    </div>
  );
}

export default App;
