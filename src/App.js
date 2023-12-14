import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Project from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
