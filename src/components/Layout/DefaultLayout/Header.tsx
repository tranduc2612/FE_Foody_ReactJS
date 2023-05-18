import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "./Modal";

interface IHeader{
    onHandleShowForm: any;
}

function Header() {

    const [showModal,setModal] = useState(false);

    return ( <header className="flex justify-between self-center m-auto max-w-6xl py-3 mb-20">
        <div className="header__social flex justify-between items-center">
            <div className="header__social-icon mr-2 cursor-pointer hover:text-green-600">
                <svg className="" data-name="feather-icon/facebook" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <rect data-name="Bounding Box" width="20" height="20" fill="rgba(255,255,255,0)"></rect>
                  <path d="M6.667,18.333H3.333A.834.834,0,0,1,2.5,17.5V11.667H.833A.835.835,0,0,1,0,10.833V7.5a.834.834,0,0,1,.833-.833H2.5V5a5.006,5.006,0,0,1,5-5H10a.834.834,0,0,1,.833.833V4.167A.834.834,0,0,1,10,5H7.5V6.667H10A.833.833,0,0,1,10.808,7.7l-.833,3.334a.831.831,0,0,1-.809.631H7.5V17.5A.834.834,0,0,1,6.667,18.333Zm-5-10V10H3.333a.835.835,0,0,1,.834.833v5.834H5.833V10.833A.834.834,0,0,1,6.667,10h1.85l.416-1.667H6.667A.834.834,0,0,1,5.833,7.5V5A1.669,1.669,0,0,1,7.5,3.333H9.166V1.666H7.5A3.337,3.337,0,0,0,4.167,5V7.5a.835.835,0,0,1-.834.833Z" transform="translate(5 0.833)" fill="#000000"></path>
                </svg>
            </div>

            <div className="header__social-icon ml-2 cursor-pointer ">
                 <svg data-name="feather-icon/instagram" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <rect data-name="Bounding Box" width="20" height="20" fill="rgba(255,255,255,0)"></rect>
                    <path d="M5,18.333a5.005,5.005,0,0,1-5-5V5A5.006,5.006,0,0,1,5,0h8.333a5.005,5.005,0,0,1,5,5v8.333a5,5,0,0,1-5,5ZM1.667,5v8.333A3.337,3.337,0,0,0,5,16.667h8.333a3.337,3.337,0,0,0,3.333-3.333V5a3.337,3.337,0,0,0-3.333-3.334H5A3.338,3.338,0,0,0,1.667,5Zm4.59,7.076A4.164,4.164,0,1,1,9.2,13.3,4.161,4.161,0,0,1,6.256,12.076Zm.713-4.07a2.5,2.5,0,1,0,2.6-1.348A2.527,2.527,0,0,0,9.2,6.631,2.487,2.487,0,0,0,6.97,8.006Zm6.191-2.833a.833.833,0,1,1,.589.244A.834.834,0,0,1,13.161,5.173Z" transform="translate(0.833 0.833)" fill="#000000"></path>
                </svg>
            </div>
        </div>

        <div className="header__authentication flex justify-between items-center">
            <div className="header__authentication-search mr-3 cursor-pointer">
                <FontAwesomeIcon className="text-xl" icon={faMagnifyingGlass} />
            </div>

            <div className="header__authentication-login ml-3 cursor-pointer">
                <FontAwesomeIcon className="text-xl" icon={faUser} onClick={()=>setModal(!showModal)}/>
            </div>
        </div>

        {showModal?<Modal />:null}
        
    </header> );
}

export default Header;