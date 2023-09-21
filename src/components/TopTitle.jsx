import React from "react";
import { ReactComponent as GoBackSVG } from "../assets/imgs/goback.svg";
import { useNavigate } from 'react-router-dom';
export default function TopTitle(props) {
  const { titleText, children } = props;
  const navigate = useNavigate();
  function goback(){
    navigate(-1); // 返回上一级
  }
  return (
    <div className="bg-emerald-500 h-1/3 px-4 w-screen text-center text-4xl text-gray-100 text font-semibold flex items-center justify-between ">
      <div className="w-16 h-16 text-2xl cursor-pointer" onClick={goback}>
        <GoBackSVG />
        返回
      </div>
      <div>
        {titleText}
        {children}
      </div>
      <div className="w-16 h-16">
        <GoBackSVG hidden />
      </div>
    </div>
  );
}
