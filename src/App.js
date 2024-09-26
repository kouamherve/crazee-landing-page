import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import TrustedBy from "./components/TrustedBy";

function App() {
  return (
    <div className=" bg-hero-pattern bg-cover min-h-screen w-full font-montserrat">
      <Header />
      <TrustedBy />
      <Services />
    </div>
  );
}

export default App;
