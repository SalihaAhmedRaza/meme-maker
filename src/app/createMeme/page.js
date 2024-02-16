import React from "react";
import "./meme.css";
import ClientComponent from "../components/ClientMeme/page";

function createMeme({ searchParams }) {
  return <ClientComponent url={searchParams.imgUrl} id={searchParams.id} />;
}

export default createMeme;
