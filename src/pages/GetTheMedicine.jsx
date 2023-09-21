import React from "react";
import TopTitle from "../components/TopTitle";
import { useNavigate } from 'react-router-dom';
export default function GetTheMedicine() {
  const navigate = useNavigate();
  function confirm(){
    navigate(-1);
  }
  return (
    <>
      <div className="h-screen ">
        <TopTitle titleText="请输入输入身份证和姓名" />
        <div className="flex w-full justify-center items-center flex-col   pt-10 ">
          <div className="text-xl">
            身份证：
            <input className="w-96 border-2 h-12 border-black" />
          </div>
          <div className="text-xl">
            姓名：
            <input className="w-96 border-2 h-12 border-black" />
          </div>
          <div>
            <button className="w-16 h-8 bg-emerald-500 text-white">确认</button>
          </div>
        </div>
      </div>
    </>
  );
}
