import React from "react";
import Link from "next/link";
import "./page.css";



async function dashboard() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const response = await res.json();
  return (
    <div className="dashbord-container">
      
      <div>
        <h1 className="heading">Memes maker</h1>
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
