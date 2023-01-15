import React from "react";
import "./libcont.css";

function play() {

  return (
    <>
      <div className="foodcontainer">
               
                <iframe
                  src={"/cat/index.html"}
                  height={"100%"}
                  width={"100%"}
                  name="iframe-music"
                  style={{ width: '100%', border: '0px', height: '70%' }}
                />
                
      </div>
    </>
  );
}
  
export default play;


