import React from "react";
import TopTitle from "../components/TopTitle";
import { ReactComponent as Pediatrics } from "../assets/imgs/department/Pediatrics.svg";
import Card from "../components/Card";
 
import { ReactComponent as Surgery } from  '../assets/imgs/department/Surgery.svg'
import { ReactComponent as InternalMedicine } from  '../assets/imgs/department/InternalMedicine.svg'
import { ReactComponent as Pentaphthaliaceae } from  '../assets/imgs/department/Pentaphthaliaceae.svg'
import { ReactComponent as Obstetrical } from  '../assets/imgs/department/Obstetrical.svg'
import { ReactComponent as Eye } from  '../assets/imgs/department/Eye.svg'

export default function Doctor() {
  function selectDoctor() {
    const k = ["请选择对应科室", " "];
    return k.map((t, index) => {
      return <h2 key={index}>{t}</h2>;
    });
  }
  return (
    <>
      <div className="h-screen">
        <TopTitle titleText={selectDoctor()} />
        <div className="w-screen grid grid-cols-6 justify-center items-center ">
          {/* <BarCode /> */}
 
          <Card title="儿科">
            <Pediatrics />
          </Card>
       
          <Card title="内科">
            <InternalMedicine />
          </Card>
          
          <Card title="五官科">
            <Pentaphthaliaceae />
          </Card>
          
          <Card title="外科">
            <Surgery />
          </Card>
          
          <Card title="产科">
            <Obstetrical />
          </Card>

          <Card title="眼科">
            <Eye />
          </Card>
          
        </div>
      </div>
    </>
  );
}
