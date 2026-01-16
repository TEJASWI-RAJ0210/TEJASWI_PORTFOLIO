const Home = () => {
    return (
        <section id="Home" className="min-h-screen flex flex-col justify-center px-4">
            <div className="container mx-auto max-w-4xl text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="">Hello, I'm </span>
                        <span className="text-blue-400">{""}Tejaswi</span>
                        <span className="">{""} Raj</span>
                    </h1>
                    <p className="text-lg md:text-xl max-2-2xl text-gray-600 mb-8"> i am a full stack developer and love to code and create new projects , i build responsive websites and applications using modern technologies.</p>
                    <div className="pt-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 inline-block hover:scale-105 transition-transform">
                        <a href="projects" className="flex items-center gap-1 px-4 py-1 mb-2 rounded-xl text-white font-medium hover:bg-transparent transition-colors">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Home;