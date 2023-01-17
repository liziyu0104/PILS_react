import React from "react";
import { FaTrashAlt } from "react-icons/fa";
//const {readFileSync} = require('fs');
//import  {readFileSync} from "fs"
//import {fs} from 'fs';




function PaymentSect() {
  

  return (
    <>
      <div className="payment">
        <div className="name">
          <h1>Affluence par étage</h1>
        </div>
        <div className="name">
          <h4>Bib</h4>
          <p>Etage</p>
          <p>Busy</p>
        </div>

        <div className="price">


          <article>
            <div className="pay">
              <div>
                <b>BU Doua</b>
                <p>Lyon</p>
              </div>
              <p className="qty-box">RC</p>
              <p>20%</p>
            </div>

            <div className="pay">
            </div>
          </article>


          <article>
            <div className="pay">
              <div>
                <b>BU Doua</b>
                <p>Lyon</p>
              </div>
              <p className="qty-box">1</p>
              <p>23%</p>
            </div>

            <div className="pay">
            </div>
          </article>

          <article>
            <div className="pay">
              <div>
                <b>BU Doua</b>
                <p>Lyon</p>
              </div>
              <p className="qty-box">2</p>
              <p>23%</p>
            </div>

            <div className="pay">
            </div>
          </article>



          <article>
            <div className="pay">
              <div>
                <b>Bib M-C</b>
                <p>Lyon</p>
              </div>
              <p className="qty-box">RC</p>
              <p>9%</p>
            </div>

            <div className="pay">
            </div>
          </article>

          <article>
            <div className="pay">
              <div>
                <b>Bib M-C</b>
                <p>Lyon</p>
              </div>
              <p className="qty-box">1</p>
              <p>9%</p>
            </div>

            <div className="pay">
            </div>
          </article>

          <article>
            <div className="pay">
              <div>
                <b>Bib M-C</b>
                <p>Lyon</p>
              </div>
              <p className="qty-box">2</p>
              <p>9%</p>
            </div>

            <div className="pay">
            </div>
          </article>


          




        </div>
      </div>
    </>
  );
}

export default PaymentSect;
