import MainSlider from "./components/slider/MainSlider";

import NavBarLoggIn from "./components/NavBarLoggIn";
import Community from "./components/community/Community";
import AboutUs from "./components/AboutUs";
import Wwp from "./components/Wwp";
import Counter from "./components/Counter";
import OurBlogs from "./components/blogs/OurBlogs";
import Footer from "./components/footer/Footer";

function LogInHome() {
  return (
    <div className="App">
      <NavBarLoggIn />
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

export default LogInHome;
