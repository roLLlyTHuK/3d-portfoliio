import { Link } from "react-router-dom"
import { projects } from "../constants"
import { arrow } from "../assets/icons"
import CTA from "../components/CTA"

const Projects = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>I've had the chance to work on so many amazing projects during my studies and internships! Some I worked on by myself, and some I did with a great team of like-minded people. They've all been really close to my heart. I'd love for you to take a look at them and give me your thoughts on how I could make them even better. Your feedback will help me to grow as a developer and make my code even more awesome!</p>
            </div>

            <div className="flex flex-wrap my-20 gap-16">
                {projects.map((project) => (
                    <div className="lg:w-[400px] w-full" key={project.name}>
                        <div className="block-container w-12 h-12">
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={project.iconUrl}
                                    alt="Project Icon"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col">
                            <h4 className="text-4xl font-poppins font-semibold">
                                {project.name}
                            </h4>
                            <p className="mt-2 text-slate-500">
                                {project.description}
                            </p>
                            <div className="mt-5 flex items-center gap-2 font-poppins">
                                <Link
                                    to={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-blue-500"
                                >
                                    Code Link
                                </Link>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-4 h-4 object-contain"
                                />
                            </div>
                            <div className=" flex items-center gap-2 font-poppins">
                                <Link
                                    to={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-blue-500"
                                >
                                    Demo Link
                                </Link>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-4 h-4 object-contain"
                                />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <hr className="border-slate-200" />

            <CTA />

        </section>
    )
}

export default Projects