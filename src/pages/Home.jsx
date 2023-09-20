/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Doctor from "../assets/imgs/Doctor.svg";
import Drug from "../assets/imgs/Drug.svg";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
 const currentData0=[
  "你好",
  "这里是乐山人民医院",
  "请你选一个选项",
];
const currentData1=[
  "如果你感觉身体不适，或者对过去病情有疑问和复查",
  "如果你需要体检和健康筛查，等其他问题",
  "请选择看病/看医生",
];
const currentData2=[
  "如果你有处方单或药物单，需要获取药物",
  "请选择拿药/取药",
];
export default function Home() {
  const [topTitles, setTitle] = useState([]);
  const [currentHover, setCurrentHover] = useState(0);
  const navagtion=useNavigate()
  function changgeTitle(currentHover) {
    if(currentHover===0){
      setTitle(currentData0)
    } if(currentHover===1){
      setTitle(currentData1)
    } if(currentHover===2) {
      setTitle(currentData2)
    }
 
  }
  function move(index){
    if(index===2){

      navagtion('/medicine')
    }if(index===1){
      navagtion('/doctor')
    }
  }
  useEffect(() => {
   changgeTitle(currentHover)

  }, [currentHover]);

  useEffect(()=>{
    const ctx=gsap.context(()=>{
     
    })
    return ()=>ctx.revert(); 
  },[])
  return (
    <>
      <div className="w-screen h-screen">
        <div className="bg-emerald-500 w-full h-1/3 text-center text-4xl text-gray-100 text font-semibold flex items-center justify-center">
          <div className="">
           {topTitles.map((t,index)=>{
            return <>
              <h2 key={index}>{t}</h2>
            </>
           })}
          </div>
        </div>
        <div className="w-full flex justify-center ">
          {/* 两个选项 */}
          <div
            className="mx-16 w-96 flex flex-col items-center"
            onMouseEnter={() => setCurrentHover(1)}
            onMouseLeave={() => setCurrentHover(0)}
            onClick={()=>move(1)}
          >
            <Button className=" bg-emerald-500 w-44 h-44 text-white font-semibold rounded-b-full flex flex-col items-center justify-center">
              <img src={Doctor} className="w-24 h-24" />
              <h2 className="mt-2">生病/看医生</h2>
            </Button>
            <video autoPlay="autoplay" controls className="w-full h-64 mt-8" />
          </div>
          <div
            className="mx-16 w-96 flex flex-col items-center"
            onMouseEnter={() => setCurrentHover(2)}
            onMouseLeave={() => setCurrentHover(0)}
            onClick={()=>move(2)}
          >
            <Button className=" bg-emerald-500 w-44 h-44 text-white font-semibold rounded-b-full flex flex-col items-center justify-center">
              <img src={Drug} className="w-24 h-24" />
              <h2 className="mt-2">拿药/取药</h2>
            </Button>
            <video autoPlay="autoplay" controls className="w-full h-64 mt-8" />
          </div>
        </div>
      </div>
    </>
  );
}
