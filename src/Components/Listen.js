import React from "react";
import "./libcont.css";



function listen() {

  return (
    <>
      <div className="foodcontainer">
                <div className="left-side">
                <iframe
                  src={"/static/listenHome.html"}
                  height={"100%"}
                  width={"100%"}
                  name="iframe-music"
                  style={{ width: '100%', border: '0px', height: '700px' }}
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


    // return (
    // <div>
    //   {/* <iframe
    //   src={"https://platform.twitter.com/widgets/tweet_button.html"}
    //   height={"100%"}
    //   width={"100%"}
    //   name="iframe-video"
    //   /> */}
    //   {/* <iframe src="/Users/liziyu/Desktop/STORAGE/Cloud/STALCO_old/src/Components/listenHome.html"></iframe> */}
    //     {/* <iframe title="myFrame" src="./listenHome.html"></iframe> */}
    //   </div>
    // );
  // }
  
export default listen;


