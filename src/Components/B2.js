import React from "react";
import "./libcont.css";
import LibBox from "./LibBox";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";
import plan0 from "../img/plan_BMC_R0.jpg";
import plan1 from "../img/plan_BMC_R1.jpg";
import plan2 from "../img/plan_BMC_R2.jpg";


function BIB2() {
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
                            <a href="http://20.216.146.156:3000/"><LibBox imgSrc={plan0} title={"Etage 0"} price={"76"}/></a>
                            <a href="http://20.216.146.156:3000/"><LibBox imgSrc={plan1} title={"Etage 1"} price={"87"}/></a>
                            <a href="http://20.216.146.156:3000/"><LibBox imgSrc={plan2} title={"Etage 2"} price={"90"}/></a>
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

export default BIB2;
