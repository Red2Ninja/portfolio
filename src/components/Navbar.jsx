function Navbar() {

    return (
        <nav className="navbar">

            <a
                href="#home"
                className="nav-logo"
            >
                <span className="crown">♛</span>
                A.N.
            </a>


            <div className="nav-links">

                <a href="#home">
                    HOME
                </a>

                <a href="#skills">
                    SKILLS
                </a>

                <a href="#projects">
                    PROJECTS
                </a>

                <a href="#contact">
                    CONTACT
                </a>

            </div>


            <a
                href="mailto:aaryanagvekar@gmail.com"
                className="nav-email"
            >
                EMAIL ME
                <span>✉</span>
            </a>

        </nav>
    );
}

export default Navbar;