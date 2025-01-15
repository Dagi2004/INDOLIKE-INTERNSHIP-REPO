import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <>
      <main className="flex flex-col items-center  ">
        <Home />
        <Menu />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
