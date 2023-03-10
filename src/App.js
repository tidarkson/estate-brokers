import Hero from "./components/Hero";
import Listings from "./components/Listings";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Listings/>
    </div>
  );
}

export default App;
