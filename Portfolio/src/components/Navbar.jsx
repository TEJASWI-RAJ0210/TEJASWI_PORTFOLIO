import { Menu } from "lucide-react";
const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
             <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold hover:text-[#1DA1F2]">
                Tejaswi<span className="text-blue-500">Raj</span>
            </a>
            <div className="md:flex hidden items-center gap-1">
                <div className="rounded-full px-2 py-1 flex items-center gap-1">
                    <a href="#Home" className="px-4 py-2 text-sm text-[#7a8491] hover:text-[#1DA1F2] rounded-full hover:bg-[#1a2329]">Home</a>
                    <a href="#About" className="px-4 py-2 text-sm text-[#7a8491] hover:text-[#1DA1F2] rounded-full hover:bg-[#1a2329]">About</a>
                    <a href="#Projects" className="px-4 py-2 text-sm text-[#7a8491] hover:text-[#1DA1F2] rounded-full hover:bg-[#1a2329]">Projects</a>
                    <a href="#Contact" className="px-4 py-2 text-sm text-[#7a8491] hover:text-[#1DA1F2] rounded-full hover:bg-[#1a2329]">Contact</a>
                </div>
            </div>
            <div className="hidden md:block">
                <button className="relative rounded-full font-medium overflow-hidden px-4 py-2 text-sm bg-[#1DA1F2] text-white hover:bg-[#1a2329]"><span className="relative flex items-center justify-center gap-2">Contact Me</span></button>
                
            </div>
            <button className="md:hidden p-2 text-white"><Menu /></button>
        </nav>
        </header>
       
    )
}
export default Navbar