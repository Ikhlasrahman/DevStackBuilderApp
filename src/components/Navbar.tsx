import logo from '../assets/logo.svg'
import '../index.css'

const Navbar = () => {
    return (
        <div className="w-full border-b border-gray-200">
            <div className="container mx-auto">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title navbar">
                    <div className="navbar-start">
                        <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <img src={logo} alt="DevStackBuilder Logo" className="w-34 h-8" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><button className="btn btn-ghost btn-secondary">Home</button></li>
                            <li><button className="btn btn-ghost">Technologies</button></li>
                            <li><button className="btn btn-ghost">Projects</button></li>
                            <li><button className="btn btn-ghost">About</button></li>
                            <li><button className="btn btn-ghost">Contact</button></li>
                        </ul>
                    </div>

                    <div className="navbar-end lg:flex gap-2">
                        <button className="btn btn-ghost">Sign In</button>
                        <button className="btn btn-secondary rounded-3xl">Sign Up</button>
                    </div>

                </div>

                <div className="collapse-content lg:hidden z-1"> <ul className="menu">
                    <li><button className="btn btn-outline btn-secondary">Home</button></li>
                    <li><button>Technologies</button></li>
                    <li><button>Projects</button></li>
                    <li><button>About</button></li>
                    <li><button>Contact</button></li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;