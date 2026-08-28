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
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=aaryanagvekar%40gmail.com"
                        className="contact-email"
                        target="_blank"
                        rel="noreferrer"
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