import React from "react";
import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <>
      <div className="text">
        Hey there!<br></br>I am made with React and framer motion.<br></br>
        Click on the hamburger menu on your top right. <br></br>
        Enjoy your burger.<br></br>
      </div>
      <Nav></Nav>
      <footer>
        Developed by <a href="https://deevoid.netlify.app/">Dev</a>
      </footer>
    </>
  );
}

export default App;
