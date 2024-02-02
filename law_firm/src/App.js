import React from "react";
import Home from "./Component/HomeComp/Home";
import IntroSection from "./Component/IntroSection/IntroSection";
import Navbar from "./Component/NavBar/Navbar";
import styles from "./App.module.css";
import PracticeAreas from "./Component/PractcieAreas/PracticeAreas";
import ReviewComp from "./Component/ReviewSection/ReviewComp";
import Team from "./Component/Team/Team";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />

        <div className={styles.wrapper}>
          <IntroSection />
          <PracticeAreas />
          <ReviewComp />
          <Team />
        </div>

        <Footer />
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
