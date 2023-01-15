import React from "react";
import "./libcont.css";
import "./news.css";

function news() {

    return (
      <>
            
          <div className="foodcontainer">
            
            <div className="left-side">
                
                <div class="row">
                <div class="example-2 card">
                <div class="wrapper">
                    <div class="header">
                        <div class="date">
                            <span class="day">12</span>
                            <span class="month">Aug</span>
                            <span class="year">2016</span>
                        </div>
                            {/* <ul class="menu-content">
                                <li><a href="#" class="fa fa-bookmark-o"></a></li>
                                <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
                                <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
                            </ul> */}
                    </div>
                    <div class="data">
                        <div class="content">
                            <span class="author">Jane Doe</span>
                            <h1 class="title"><a href="#">stage in Bell-Labs Edge Computing</a></h1>
                            <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                            <a href="https://aluperf.referrals.selectminds.com/jobs/stage-bell-labs-edge-computing-et-5-6g-92262" class="button">Read more</a>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>

            <div className="right-side">
                <iframe
                    src={"/apple_watch/index.html"}
                    name="iframe-music"
                    style={{ width: '100%', border: '0px', height: '100%'}}
                />
            </div>
          </div>
                 
                  
                  
      </>
    );
  }
  
export default news;