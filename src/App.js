import MainSlider from "./components/slider/MainSlider";
import NavBar from "./components/NavBar";
// import NavBarLoggIn from "./components/NavBarLoggIn";
import Community from "./components/community/Community";
import AboutUs from "./components/AboutUs";
import Wwp from "./components/Wwp";
import Counter from "./components/Counter";
import OurBlogs from "./components/blogs/OurBlogs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSlider />
      <Community />
      <AboutUs />
      <Wwp />
      <Counter />
      <OurBlogs />
      <Footer />
    </div>
  );
}

export default App;
