import React from "react";
import TopTitle from "../components/TopTitle";
import Card from "../components/Card";
import BarCode from "../components/BarCode";
// import { findImgs } from "../util/department";
import Surgery from  '../assets/imgs/department/surgery.svg' 
export default function Doctor() {
  function selectDoctor() {
    const k = ["asd", "asdas1"];
    return k.map((t, index) => {
      return <h2 key={index}>{t}</h2>;
    });
  }
  return (
    <>
      <div className="h-screen">
        <TopTitle titleText={selectDoctor()} />
        <div>
        <BarCode/>
          <div className="bg-red-100 mt-12">
          <img src={Surgery} alt="" style={{width:'200px',height:'200px'}} />
          </div>
        </div>
      </div>
    </>
  );
}
