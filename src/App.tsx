import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TroubleShooting from "./components/TroubleShooting";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";

function Divider(): React.JSX.Element {
  return (
    <div className="w-full max-w-5xl px-6">
      <hr className="border-gray-100" />
    </div>
  );
}

export default function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="flex flex-col items-center">
        <Hero />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <TroubleShooting />
        <Divider />
        <Collaboration />
      </main>
      <Footer />
    </div>
  );
}
