import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./libcont.css";
import LibBox from "./LibBox";
import Map from "./Map";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";

import plan10 from "../img/plan_BU_R0.png";
import plan11 from "../img/plan_BU_R1.png";
import plan12 from "../img/plan_BU_R2.png";

import plan0 from "../img/plan_BMC_R0.jpg";
import plan1 from "../img/plan_BMC_R1.jpg";
import plan2 from "../img/plan_BMC_R2.jpg";



function LibCont() {
    const [areas, setAreas] = useState([]);
    const [floors, setFloors] = useState([]);
    const [floorSelected, setFloorSelected] = useState("");

    useEffect(() => {
        axios.get(`https://stalco.tk/api/area/list`)
        .then(res => {
            //console.log(res.data.data);
            setAreas(res.data.data);
        });
    }, []);

    useEffect(() => {
        areas[0] && axios.get(`https://stalco.tk/api/area/`+areas[0].id)
        .then(res => {
            //console.log(res.data.data.floors);
            setFloors(res.data.data.floors);
        });
    }, [areas]);

    /*useEffect(() => {
        console.log(floorSelected);
    }, [floorSelected]);*/

  return (
    <>
      <div className="foodcontainer">
                <div className="left-side">
                    <div className="cards">
                        <div className="all">
                            <div className="varieties">
                                {floorSelected === "" ? 
                                <><Link to="/" className="var-btn">
                                    All
                                </Link>
                                <Link to="/Bib1" className="var-btn">
                                    BU Doua
                                </Link>
                                <Link to="/Bib2" className="var-btn">
                                    Bib M-C
                                </Link></>
                                :
                                <><Link onClick={() => {setFloorSelected("")}} className="var-btn">
                                    Retour
                                </Link></>}
                          
                            </div>
                        </div>

                        <main>
                        {floorSelected === "" ?
                            floors.map((floor) => {
                                return (<div key={floor.id} onClick={() => {setFloorSelected(floor.id)}}>
                                <LibBox imgSrc={floor.image} title={floor.name} price={"87"}/>
                                </div>)
                            })
                        :
                            <Map floor={floors.filter(floor => floor.id === floorSelected)}/>
                        }
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
/*
{/* <div class="anim" style="--delay: .1s"> */
//<LibBox imgSrc={plan10} title={"Etaokokge 0"} price={"76"} onClick={() => {console.log("click")}}/>
//<LibBox imgSrc={plan11} title={"Etage 1"} price={"87"}/>
//<LibBox imgSrc={plan12} title={"Etage 2"} price={"90"}/>
{/* </div> */}
{/* <div class="anim" style="--delay: .2s"> */}
//<LibBox imgSrc={plan0} title={"Etage 0"} price={"76"}/>
//<LibBox imgSrc={plan1} title={"Etage 1"} price={"87"}/>
//<LibBox imgSrc={plan2} title={"Etage 2"} price={"90"}/>
{/* </div> */}

