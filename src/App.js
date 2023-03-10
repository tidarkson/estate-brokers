import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Listings from "./components/Listings";
import Mobile from "./components/Mobile";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Listings/>
      <About/>
      <Testimonials/>
      <Blog/>
      <Mobile/>
      <Footer/>
    </div>
  );
}

export default App;
