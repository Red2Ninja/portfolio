import { skillCategories } from "../data/skills";

function Skills() {

    return (

        <section
            id="skills"
            className="section skills-section"
        >

            <div className="section-heading">

                <p className="section-label">
                    01 / WHAT I USE
                </p>

                <h2>
                    MY <span>SKILLS</span>
                </h2>

            </div>


            <div className="skills-grid">

                {skillCategories.map(
                    (category) => (

                        <div
                            className="skill-category"
                            key={category.title}
                        >

                            <h3>
                                {category.title}
                            </h3>


                            <div className="skill-list">

                                {category.skills.map(
                                    (skill) => (

                                        <div
                                            className="skill-item"
                                            key={skill.name}
                                        >

                                            {skill.logo && (

                                                <img
                                                    src={skill.logo}
                                                    alt=""
                                                />

                                            )}

                                            <span>
                                                {skill.name}
                                            </span>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    )
                )}

            </div>

        </section>

    );
}

export default Skills;