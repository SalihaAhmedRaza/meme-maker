"use client";
import React, { useState } from "react";
import "./clientComponent.css";

function ClientComponent(props) {
  const { id, url } = props;
  const [text1, setText1] = useState();
  const [text2, setText2] = useState();
  const [fetchRes, setFetchRes] = useState(null);

  const genrateImg = () => {
    if (!text1 || !text2) {
      return alert("enter text");
    }
    fetch(
      `https://api.imgflip.com/caption_image?template_id=${id}
      &username=MuhammadArslanSher&password=salloo2002&text0=${text1}&text1=${text2}`
    )
      .then((res) => res.json())
      .then((response) => setFetchRes(response.data.url));
  };

  console.log(fetchRes, "<- ressss");

  return (
    <>
      <div className="createMemeContainer">
        {!fetchRes ? (
          <div className="meme-contant">
            <img
              className="meme-img"
              //  src={props.url}
              src={url}
              alt=""
            />
            <div className="meme-inputField">
              <input
                type="text"
                placeholder="enter text 1"
                className="inputField"
                onChange={(e) => setText1(e.target.value)}
              />
              <input
                type="text"
                placeholder="enter text 2"
                className="inputField"
                onChange={(e) => setText2(e.target.value)}
              />
            </div>
            <div className="memeBtn-div">
              <button className="memeBtn" onClick={genrateImg}>
                GENERATE MEME
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="userMemeImg-div">
              <div className="flex items-center justify-around bg-black">
                <img
                  src="https://usagif.com/wp-content/uploads/gif/laughing-emoji-40.gif"
                  alt=""
                  width={60}
                  className="text-center"
                />
                <h2 className="text-white">Happy Hacking!!</h2>
              </div>
              <img className="userMemeImg" src={fetchRes} alt="" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ClientComponent;
