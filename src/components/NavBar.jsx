import react from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
    return(
        <>
            <header className="bg-gray-100">
                <nav className="flex p-6 justify-between items-center">
                <div className="flex items-center space-x-20">
                    <div className="logo flex items-center">
                    <img src="/slooze-logo.png" alt="logo" className="h-20" />
                    <h1 className="tangerine-bold text-gray-700 text-5xl">Slooze</h1>
                    </div>
                    <ul className="flex space-x-10 text-gray-700 newsreader-font menu">
                    <li>Product</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>Contact</li>
                    </ul>
                </div>
                {/* Right side: Login and Sign Up */}
                <div>
                    <ul className="flex space-x-14 text-gray-700 newsreader-font">
                    <li>
                        <MagnifyingGlassIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
                    </li>
                    <div className='menu'>
                        <li className='mr-10'>
                            Login
                        </li>
                        <li>
                            Sign up
                        </li>
                    </div>
                    </ul>
                </div>
                </nav>
            </header>
        </>
    )
}
export default NavBar;