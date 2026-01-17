import { Mail,MapPin,Phone } from "lucide-react";
import { Linkedin,Github, Twitter,Instagram } from "lucide-react";

const Contact = () => {
    return (
        <section id="Contact" className="min-h-screen flex flex-col justify-center py-24 px-4">
            <div className="container mx-auto max-w-4xl text-center z-10">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Get in <span className="text-blue-400">Touch</span>
                    </h2>
                    <p className="text-lg text-center md:text-xl max-w-2xl text-gray-600 mb-12 mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8 p-8 rounded-xl border border-gray-700 shadow-lg bg-gray-900">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                            
                            <div className="space-y-6 justify-center">
                                <div className="flex items-center space-x-4">
                                    <div className="rounded-full p-3 bg-blue-500/10">
                                        <Mail className="h-6 w-6 text-blue-500"/>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">Email</h4>
                                        <a href="tejaswi@gmail.com" className="text-blue-200 hover:text-blue-400 transition-colors">tejaswi@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 justify-center">
                                <div className="flex items-center space-x-4">
                                    <div className="rounded-full p-3 bg-blue-500/10">
                                        <Phone className="h-6 w-6 text-blue-500"/>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">Phone</h4>
                                        <a href="+91 8247856789" className="text-blue-200 hover:text-blue-400 transition-colors">+91 8247856789</a>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 justify-center">
                                <div className="flex items-center space-x-4">
                                    <div className="rounded-full p-3 bg-blue-500/10">
                                        <MapPin className="h-6 w-6 text-blue-500"/>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">Location</h4>
                                        <a  className="text-blue-200 hover:text-blue-400 transition-colors">Bihar, India</a>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4>Connect with me</h4>
                                <div className="flex space-x-4 justify-center mt-4">
                                    <div className="rounded-full p-3 bg-blue-500/10">
                                        <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors"><Linkedin /></a>
                                    </div>
                                    <div className="rounded-full p-3 bg-blue-500/10">
                                        <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors"><Github /></a>
                                    </div>
                                    <div className="rounded-full p-3 bg-blue-500/10">
                                        <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors"><Twitter /></a>
                                    </div>
                                    <div className="rounded-full p-3 bg-blue-500/10">
                                        <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors"><Instagram /></a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="p-8 rounded-xl border border-gray-700 shadow-lg bg-gray-900">
                            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                    <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-input bg-black/70  rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-hidden" placeholder="Tejaswi Raj..."/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                    <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-input bg-black/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-hidden " placeholder="email@gmail.com"/>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-input bg-black/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-hidden" placeholder="Type a message"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact