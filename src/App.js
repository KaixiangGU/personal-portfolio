import HeroBanner from "./components/HeroBanner/HeroBanner";
import Tech from "./components/Tech/Tech";
import Projects from "./components/Projects/Projects";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <HeroBanner />
      <Tech />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
