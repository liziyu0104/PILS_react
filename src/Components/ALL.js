import React from "react";
import "./libcont.css";
import LibBox from "./LibBox";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";

import plan10 from "../img/plan_BU_R0.png";
import plan11 from "../img/plan_BU_R1.png";
import plan12 from "../img/plan_BU_R2.png";

import plan0 from "../img/plan_BMC_R0.jpg";
import plan1 from "../img/plan_BMC_R1.jpg";
import plan2 from "../img/plan_BMC_R2.jpg";

function LibCont() {
  return (
    <>
      <div className="foodcontainer">
                <div className="left-side">
                    <div className="cards">
                        <div className="all">
                            <div className="varieties">
                                <Link to="/" className="var-btn">
                                    All
                                </Link>
                                <Link to="/Bib1" className="var-btn">
                                    BU Duoa
                                </Link>
                                <Link to="/Bib2" className="var-btn">
                                    Bib M-C
                                </Link>
                          
                            </div>
                        </div>

                        <main>
                        {/* <div class="anim" style="--delay: .1s"> */}
                            <LibBox imgSrc={plan10} title={"Etage 0"} price={"76"}/>
                            <LibBox imgSrc={plan11} title={"Etage 1"} price={"87"}/>
                            <LibBox imgSrc={plan12} title={"Etage 2"} price={"90"}/>
                        {/* </div> */}
                        {/* <div class="anim" style="--delay: .2s"> */}
                            <LibBox imgSrc={plan0} title={"Etage 0"} price={"76"}/>
                            <LibBox imgSrc={plan1} title={"Etage 1"} price={"87"}/>
                            <LibBox imgSrc={plan2} title={"Etage 2"} price={"90"}/>
                        {/* </div> */}
                        </main>
                    </div>
                </div>
                <div className="right-side">
                    <PaymentSect />
                </div>
            </div>
    </>
  );
}

export default LibCont;
