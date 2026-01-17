import React, { useState } from "react";
const skill = [
    { name: "HTML", level: 90, category: "Frontend"},
    { name: "CSS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "React", level: 75, category: "Frontend" },

    { name: "Node.js", level: 70, category: "Backend" },
    { name: "Python", level: 65, category: "Backend" },
    { name: "Django", level: 60, category: "Backend" },
    { name: "SQL", level: 70, category: "Backend" },

    { name: "Git", level: 80, category: "Tools" },
    { name: "Docker", level: 60, category: "Tools" },
    { name: "Webpack", level: 70, category: "Tools" },
    { name: "Jest", level: 65, category: "Tools" },
];

const Skills = () => {
    const [active, setActive] = useState("ALL");

    const filteredSkills = active === "ALL" ? skill : skill.filter((item) => item.category.toUpperCase() === active || active === "ALL");
    return (
        <section id="Skills" className="min-h-screen flex flex-col justify-center px-4 py-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-blue-400">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button className="px-4 py-2 text-sm bg-gray-700 text-white rounded-full hover:bg-blue-500" onClick={() => setActive("ALL")}>All</button>
                    <button className="px-4 py-2 text-sm bg-gray-700 text-white rounded-full hover:bg-blue-500" onClick={() => setActive("FRONTEND")}>Frontend</button>
                    <button className="px-4 py-2 text-sm bg-gray-700 text-white rounded-full hover:bg-blue-500" onClick={() => setActive("BACKEND")}>Backend</button>
                    <button className="px-4 py-2 text-sm bg-gray-700 text-white rounded-full hover:bg-blue-500" onClick={() => setActive("TOOLS")}>Tools</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((item, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                                <div
                                    className="bg-blue-400 h-2.5 rounded-full"
                                    style={{ width: `${item.level}%` }}
                                ></div>
                            </div>
                            <p className="text-gray-400 text-sm">{item.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Skills;