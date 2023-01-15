import React from "react";
import "./libcont.css";
import "./weather.css";

function weather() {
  return (
    <>
      <div className="foodcontainer">
      <div class="div-a">
        <iframe
          src={"/weather/index.html"}
          name="iframe-music"
          style={{ top:'200pt', width: '100%', border: '0px', height: '100%' }}
        />
        </div>
        <div class="div-b">
        <iframe
          src={"/trending/index.html"}
          name="iframe-msic"
          style={{ top:'200pt', width: '100%', border: '0px', height: '100%' }}
        />
        </div>  
      </div>
    </>
  );
}


export default weather;