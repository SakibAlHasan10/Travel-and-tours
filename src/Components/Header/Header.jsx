
import { FaAlignLeft } from 'react-icons/fa';
const Header = () => {
    return (
            <div className="navbar bg-base-100 max-w-screen-xl px-8 py-4 mx-auto">
                <div className="navbar-start w-1/4">
                    <div className="dropdown">
                        <label className="btn btn-ghost lg:hidden">
                            <FaAlignLeft/>
                        </label>
                        <ul  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Packages</a></li>
                            <li><a>Shop</a></li>
                            <li><a>About</a></li>
                            <li><a>Pages</a></li>
                            <li><a>News</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-2xl">daisyUI</a>
                    </div>
                    <div className=" navbar-end w-3/4">
                    <div className=" navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal md:text-xl font-semibold  px-1">
                        <li><a>Home</a></li>
                            <li><a>Packages</a></li>
                            <li><a>Shop</a></li>
                            <li><a>About</a></li>
                            <li><a>Pages</a></li>
                            <li><a>News</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
            <div className="navbar-end w-32 ">
                <a className="btn rounded-3xl btn-accent text-white">Book now</a>
            </div>
        </div>
    </div>
    );
};

export default Header;