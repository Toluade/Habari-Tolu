import "./App.css";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Solutions from "./components/Solutions";
import Support from "./components/Support";
import LastSection from "./components/LastSection";

function App() {
  return (
    <div className="app">
      <Menu />
      <Hero />
      <Features />
      <Solutions />
      <Support />
      <LastSection />

      <Menu />
    </div>
  );
}

export default App;
