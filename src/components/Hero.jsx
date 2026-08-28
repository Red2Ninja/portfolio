function Hero() {

    return (

        <section
            id="home"
            className="hero"
        >

            {/* Decorative graffiti */}

            <div className="paint-splash splash-one"></div>

            <div className="paint-splash splash-two"></div>

            <div className="paint-splash splash-three"></div>


            {/* Main content */}

            <div className="hero-content">

                <p className="eyebrow">
                    Think it Build it Ship it.
                </p>


                <h1 className="hero-title">

                    AARYA

                    <span>
                        NAGVEKAR
                    </span>

                </h1>


                <p className="hero-description">

                    I build{" "}

                    <strong>
                        intelligent
                    </strong>
                    ,{" "}

                    <strong>
                        secure
                    </strong>
                    {" "}and{" "}

                    <strong>
                        scalable
                    </strong>

                    {" "}
                    solutions at the intersection
                    of AI, cybersecurity and full-stack development.

                </p>


                <a
                    href="#projects"
                    className="explore-btn"
                >

                    EXPLORE MY WORK

                    <span>
                        →
                    </span>

                </a>

            </div>


            {/* Artwork */}

            <div className="hero-art">

                

                <div className="portrait">

                <img
                    src="/images/profile.png"
                    alt="Aarya Nagvekar"
                />

                <div className="portrait-overlay"></div>

                </div>


                <div className="art-note">

                    BUILDING
                    <br />
                    IDEAS.

                </div>

            </div>


            <div className="scroll-indicator">

                SCROLL

                <span>
                    ↓
                </span>

            </div>

        </section>

    );
}

export default Hero;