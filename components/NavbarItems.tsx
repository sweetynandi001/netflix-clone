import React from "react";

interface NavbarItemsProps{
    label:string
}
const NavbarItems: React.FC<NavbarItemsProps> =({label})=>{
    return(
     <div className="text-white hover:text-gray-300 transition">
        {label}
     </div>
    )
}
export default NavbarItems;
