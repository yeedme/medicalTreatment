import React from "react";

export default function TopTitle(props) {
  const { titleText, children } = props;
  return (
    <div className="bg-emerald-500 h-1/3 w-screen text-center text-4xl text-gray-100 text font-semibold flex items-center justify-center">
      <div>
        {titleText}
        {children}
      </div>
    </div>
  );
}
