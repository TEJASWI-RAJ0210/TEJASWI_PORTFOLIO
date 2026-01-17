import { Briefcase, Code, User } from "lucide-react";

const About = () => {
    return (
        <section id="About" className="min-h-screen flex flex-col justify-center py-24 px-4">
        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-blue-400">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 ">
                    <h3 className="text-2xl font-semibold">Passionate web Developer & tech creator</h3>

                    <p className="text-gray-600">
                    I'm Tejaswi Raj, a dedicated full-stack developer with a passion for crafting dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I thrive on turning complex problems into elegant solutions. My journey in web development is fueled by a love for coding and a commitment to continuous learning. I enjoy collaborating on innovative projects that push the boundaries of technology and creativity.
                    </p>
                    <p className="text-gray-600">
                    I'm Tejaswi Raj, a dedicated full-stack developer with a passion for crafting dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I thrive on turning complex problems into elegant solutions. My journey in web development is fueled by a love for coding and a commitment to continuous learning. I enjoy collaborating on innovative projects that push the boundaries of technology and creativity.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#Contact" className="px-6 py-3 bg-blue-500 text-white rounded-full text-center">{""} Get In Touch</a>
                        <a href="" className="px-6 py-3 bg-blue-500/10 text-white rounded-full hover:bg-blue-500 text-center">{""} Download CV</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-xl hover:scale-105 transition-transform">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-blue-500/10">
                                <Code className="h-6 w-6 text-black"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold">Web Development</h4>
                                <p className="text-white/90">
                                Building responsive and dynamic websites using modern technologies.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-xl hover:scale-105 transition-transform">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-blue-500/10">
                                <User className="h-6 w-6 text-black"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold">Web Development</h4>
                                <p className="text-white/90">
                                Building responsive and dynamic websites using modern technologies.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-xl hover:scale-105 transition-transform">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-blue-500/10">
                                <Briefcase className="h-6 w-6 text-black"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold">Web Development</h4>
                                <p className="text-white/90">
                                Building responsive and dynamic websites using modern technologies.
                                </p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>    

        </section>

    );
}

export default About;