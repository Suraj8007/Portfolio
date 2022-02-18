import React from "react";
import { FaBars } from "react-icons/fa";
import "./nav.css"


const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          
         
         
          {state ? (
            <ul className="navbar__right">
              <li>
                <a href="#Home">Home</a>
              </li>

              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#Skill">Skills</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1j6ZWx_ZYrdW0nk5-UOo-eB0LAQvCUBVs/view?usp=sharing">Resume</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaBars className="fa" />
      </div>
    </nav>
  );
};

export default Nav