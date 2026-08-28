import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {

    return (
        <section id="projects" className="projects-section">

            <div className="projects-header">

                <div>

                    <p>
                        02 / A FEW THINGS
                    </p>

                    <h2>
                        FEATURED
                        <br />
                        <span>PROJECTS</span>
                    </h2>

                </div>


                <div className="projects-note">

                    IDEAS.
                    <br />
                    CODE.
                    <br />
                    <span>IMPACT.</span>

                </div>

            </div>


            <div className="projects-list">

                {projects.map(
                    project => (
                        <ProjectCard
                            key={project.number}
                            project={project}
                        />
                    )
                )}

            </div>


            <div className="projects-footer">

                EACH PROJECT TAUGHT ME
                <span> SOMETHING NEW.</span>

                <br />

                EACH PROBLEM MADE ME
                <span> A LITTLE BETTER.</span>

            </div>

        </section>
    );
}

export default Projects;