

const listProjects = [
    {
        id: 1,
        title: "Connect",
        description: "A social media platform to connect with friends and family.",
        tech: ["React", "Tailwind CSS"],
        image: "/Projects/Project1.png",
        link: "#"
    },
    {
        id: 2,
        title: "Chat App",
        description: "A real-time chat application for seamless communication.",
        tech: ["React","Tailwind CSS", "Node.js", "Socket.io"],
        image: "/Projects/Project2.png",
        link: "#"
    },
]

const Projects = () => {
    return (
        <section id="Projects" className="min-h-screen flex flex-col justify-center py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-blue-400">Projects</span>
                </h2>

                <p className="text-center text-white mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project showcases my skills and expertise in web development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
                    {listProjects.map((project) => (
                        <div key={project.id} className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-transform ">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;