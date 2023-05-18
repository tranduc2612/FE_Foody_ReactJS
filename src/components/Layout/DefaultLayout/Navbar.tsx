import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faHouse, faUtensils, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css"
import { memo } from "react";
function Navbar() {
    return ( <nav className="mx-auto max-w-7xl py-7">
        <div className="relative flex flex-col h-16 items-center justify-around">
            <div className="navbar__logo">
                <Link className="text-lg m-3 items-center flex font-semibold" to={'/home'}>
                    <img style={{width:"18rem"}} src="/src/assets/logo/brand.svg" alt="" />
                </Link>
            </div>
        
            <ul className="navbar__navigation-list flex mt-6">
                    <li className="navbar__navigation-item relative">
                        <Link className="active navbar__navigation-link text-sm m-3 p-2 items-center flex font-semibold" to={'/home'}>
                            <FontAwesomeIcon className="navbar__icon text-2xl mr-2" icon={faHouse} />
                            <span className="">Trang Chủ</span>
                        </Link>
                    </li>

                    
                    <li className="navbar__navigation-item relative">
                        <Link className="navbar__navigation-link text-sm m-3 p-2 items-center flex font-semibold" to={'/home'}>
                            <FontAwesomeIcon className="navbar__icon text-2xl mr-2" icon={faUtensils} />
                            <span className="">Công thức</span>
                        </Link>
                    </li>
                    

                    <li className="navbar__navigation-item relative">
                        <Link className="navbar__navigation-link text-sm m-3 p-2 items-center flex font-semibold" to={'/home'}>
                            <FontAwesomeIcon className="navbar__icon text-2xl mr-2" icon={faBlog} />
                            <span className="">Blogs</span>
                        </Link>
                    </li>

                    <li className="navbar__navigation-item relative">
                        <Link className="navbar__navigation-link text-sm m-3 p-2 items-center flex font-semibold" to={'/home'}>
                            <FontAwesomeIcon className="navbar__icon text-2xl mr-2" icon={faSquarePlus} />
                            <span className="">Viết món mới</span>
                        </Link>
                    </li>
            </ul>
        </div>

        

    </nav> );
}

export default memo(Navbar);