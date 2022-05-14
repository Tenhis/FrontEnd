import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    NavMenu,
} from "./NavbarElements";

import DrawerMUI from "../../UI/DrawerMUI";


const Navbar = () => {
    return (

        <>
           <Nav>
            <NavLogo to="/">
                SurveyPoint
            </NavLogo>

            <NavMenu>
                <NavLink 
                  to="/" 
                  activestyle={{ color:'#404141' }}
                >
                    Kyselyt
                </NavLink>
                <NavLink 
                  to="/raportit" 
                  activestyle={{ color: 'black' }}
                >
                    Raportit
                </NavLink> 
            </NavMenu> 
           <DrawerMUI />
           </Nav> 
        </>
    );
};
export default Navbar;
//lainattu: https://dev.to/stephanieopala/simple-navigation-bar-in-react-js-4d5m

