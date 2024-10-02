import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PowerfulAnalystic from "./components/PowerfulAnalystic";
import Services from "./components/Services";
import TrustedBy from "./components/TrustedBy";

function App() {
  return (
    <div className=" bg-hero-pattern bg-cover min-h-screen w-full font-montserrat">
      <Header />
      <TrustedBy />
      <Services />
      <PowerfulAnalystic />
      <Footer />
    </div>
  );
}

export default App;
