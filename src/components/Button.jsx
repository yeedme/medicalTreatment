import React from "react";

export default function Button(props) {
  const { className ,children} = props;
  return <button className={className}>{children}</button>;
}
