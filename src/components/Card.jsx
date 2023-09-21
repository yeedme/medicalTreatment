import React, { Children } from "react";
 
export default function Card(props) {
  const {title}=props
  return (
    <div className="bg-emerald-500 hover:bg-emerald-600 w-44 h-54 flex justify-center flex-col items-center rounded-xl border-2">
      <div className="w-44 h-44 ">{props.children}</div>
      <h2 className="text-2xl text-white">{title}</h2>
    </div>
  );
}
