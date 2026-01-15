const Hero = () => {
    return (
        <section className="pt-20 pb-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Tejaswi Raj</h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8">Full Stack Developer</p>
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">Get Started</button>
                </div>
            </div>
        </section>
    )
};

export default Hero;