import React from "react";
import "./main.scss";
import logo from "./img/github-logo.png";
import bell from "./img/bell.png";
import plus from "./img/plus.png";
import pro from "./img/pro.webp";
import { valueCon } from "../../context";

export default function Navbar() {
  const searchRef = React.useRef(null);
  const [value , setValue] = React.useContext(valueCon);

  function getSearchValue(e) {
    if (e.code === "Enter") {
      return setValue(searchRef.current.value);
    }
  }
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo ml-5">
              <img src={logo} alt="github" />

              <div className="search_inp">
                <input
                  ref={searchRef}
                  type="search"
                  className="search form-control ml-2"
                  onKeyDown={(e) => getSearchValue(e)}
                  placeholder="Search Users "
                />
              </div>
            </div>
            <div className="header__text">
              <ul>
                <li>
                  <a href="#">
                  
                    <h5> Requests</h5>
                  </a>

                  <a href="#">
                 
                    <h5>Issues</h5>
                  </a>

                  <a href="#">
                 
                    <h5>Marketplace</h5>
                  </a>

                  <a href="#">
                 
                    <h5>Explore</h5>
                  </a>
                </li>
              </ul>
            </div>
            <div className="profile">
              <div className="bell">
                <img src={bell} alt="" />
              </div>
              <div className="plus">
                <img src={plus} alt="" />
              </div>
              <div className="profile__img">
                <div className="dropdown-toggle">
                  <img src={pro} alt="profile react" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
