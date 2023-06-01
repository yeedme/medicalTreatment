import React from "react";
import Button from "../components/Button";
import Doctor from "../assets/imgs/Doctor.svg";
import Drug from "../assets/imgs/Drug.svg";
export default function Home() {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="bg-emerald-500 w-full h-1/3 text-center text-4xl text-gray-100 text font-semibold flex items-center justify-center">
          <div>
            <h2> 你好</h2>
            <h2>这里是乐山人民医院</h2>
            <h2>请你选一个选项</h2>
          </div>
        </div>
        <div className="w-full flex justify-center ">
            {/* 两个选项 */}
          <div className="mx-16 w-64 flex flex-col items-center">
            <Button className=" bg-emerald-500 w-44 h-44 text-white font-semibold rounded-b-full flex flex-col items-center justify-center">
              <img src={Doctor} className="w-24 h-24" />
              <h2 className="mt-2">生病/看医生</h2>
            </Button>
            <video autoplay="autoplay" controls className="w-full h-64 mt-8"/>
          </div>
          <div className="mx-16 w-64 flex flex-col items-center">
            <Button className=" bg-emerald-500 w-44 h-44 text-white font-semibold rounded-b-full flex flex-col items-center justify-center">
              <img src={Drug} className="w-24 h-24" />
              <h2 className="mt-2">拿药/取药</h2>
            </Button>
            <video autoplay="autoplay" controls className="w-full h-64 mt-8"/>
          </div>
        </div>
      </div>
    </>
  );
}
