import React from "react";
import Link from "next/link";
import "./page.css";

import { IoMdHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

async function dashboard() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const response = await res.json();
  return (
    <div className="dashbord-container">
      <div>
        {/* nav-start */}
        <nav className="navbar">
          <div className="menu">
            <ul className="list">
              <li className="item ">
                <a href="#">
                  <span className="icon">
                    <IoMdHome />
                  </span>
                  <span className="text">Home</span>
                </a>
              </li>
              <li className="item">
                <a href="#">
                  <span className="icon">
                    <FaUserAlt />
                  </span>
                  <span className="text">About</span>
                </a>
              </li>
              <li className="item">
                <a href="#">
                  <span className="icon">
                    <IoMdMenu />
                  </span>
                  <span className="text">Menu</span>
                </a>
              </li>
              <li className="item">
                <a href="#">
                  <span className="icon set">
                    <IoSettings />
                  </span>
                  <span className="text">Setting</span>
                </a>
              </li>
              <div className="ind" />
            </ul>
          </div>
        </nav>

        {/* nav end */}
      </div>
      <div>
        <h1 className="heading">😍Welcome back on MEME legend page😁 😁</h1>
      </div>

      <div className="card-container">
        {response.data.memes.map((object, index) => {
          return (
            <div key={index} className="single-card">
              <div className="card-img ">
                <img src={object.url} />
              </div>
              <div className="content">
                <Link
                  className="memeBtn"
                  href={{
                    pathname: "/createMeme",
                    query: {
                      imgUrl: object.url,
                      id: object.id,
                    },
                  }}
                >
                  Create Meme
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default dashboard;
