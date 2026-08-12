import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Stats from "./components/Stats";
import Contact from "./components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <SelectedWorks />
        <Stats />
      </main>
      <Contact />
    </>
  );
}

export default App;
