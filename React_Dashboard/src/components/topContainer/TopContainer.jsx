import "./topContainer.css";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import userAvatar from "../../img/women.jpg";
import { useEffect } from "react";
export function TopContainer() {

    useEffect(()=>{
const menuTarget =  document.getElementById('menuChevron');
const menuContainer =  document.getElementById('menuContainer');

menuTarget.addEventListener("mouseenter",()=>{
    menuTarget.style.transform="rotate(180deg)"
    menuContainer.style.transform="translateX(0px)"
})
menuContainer.addEventListener("mouseleave",()=>{
    menuTarget.style.transform="rotate(0deg)"
    menuContainer.style.transform="translateX(300px)"
})

    },[])

  return (
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="Search item, collections" />
        <i>
          <BiSearchAlt />
        </i>
      </div>
      <div className="profileContainer">
        <i className="profileIcon">
          <FaBell />
          </i>
          <div className="profileImage">
            <img src={userAvatar} alt="" />
          </div>

          <p className="profileName">James Json</p>
          <i className="menuChevron" id="menuChevron">
            <FaChevronDown />
          </i>
      <div className="menuContainer" id="menuContainer">
        <ul>
            <li>Web Design</li>
            <li>UI / UX</li>
            <li>Form Design</li>
            <li>UI Design</li>
        </ul>
      </div>
      </div>
    </div>
  );
}
