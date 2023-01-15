import React from "react";
import "./libcont.css";
  

function todo() {

  return (
    <>
      <div className="foodcontainer">
                <div className="left-side">
                <iframe
                  src={"/todo/index.html"}
                  name="iframe-music"
                  style={{ top:'200pt', width: '100%', border: '0px', height: '100%' }}
                />
                </div>
                <div className="right-side">
                <iframe
                  src={"/apple_watch/index.html"}
                  // height={"20%"}
                  // width={"100%"}
                  name="iframe-music"
                  style={{ width: '100%', border: '0px', height: '100%'}}
                />
                </div>
      </div>
    </>
  );
}


export default todo;