function ProjectCard({ project }) {

    return (
        <article className="project-card">

            <div className="project-number">
                {project.number}
            </div>


            <div className="project-image">

                <img
                    src={project.image}
                    alt={project.title}
                />

            </div>


            <div className="project-content">

                <h3>
                    {project.title}
                </h3>

                <p className="project-tagline">
                    {project.subtitle}
                </p>

                <p className="project-description">
                    {project.description}
                </p>


                <div className="project-tech">

                    {project.tags.map(
                        tag => (
                            <span key={tag}>
                                {tag}
                            </span>
                        )
                    )}

                </div>

            </div>


            <div className="project-links">

                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    GITHUB ↗
                </a>

                {/* Live demo links will be added when the demos are ready. */}

            </div>

        </article>
    );
}

export default ProjectCard;