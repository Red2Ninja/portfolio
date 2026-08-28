import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./App.css";

function App() {
    return (
        <div className="app">

            <Navbar />

            <main>

                <Hero />

                <Skills />

                <Projects />

                <section id="contact" className="contact-section">

                    <h2>
                        LET'S
                        <span> TALK.</span>
                    </h2>

                    <a
                        href="mailto:aaryanagvekar@gmail.com"
                        className="contact-email"
                    >
                        aaryanagvekar@gmail.com ↗
                    </a>

                </section>

            </main>

            <Footer />

        </div>
    );
}

export default App;