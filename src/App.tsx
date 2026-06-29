import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TroubleShooting from "./components/TroubleShooting";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";

export default function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main className="flex flex-col items-center">
        <Hero />
        <div className="w-full max-w-5xl px-6">
          <hr className="border-gray-800" />
        </div>
        <Projects />
        <div className="w-full max-w-5xl px-6">
          <hr className="border-gray-800" />
        </div>
        <TroubleShooting />
        <div className="w-full max-w-5xl px-6">
          <hr className="border-gray-800" />
        </div>
        <Collaboration />
      </main>
      <Footer />
    </div>
  );
}
