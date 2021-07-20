import { useState } from "react";


const Button = ({ handle, symbol }) => {
  return <button onClick={handle}>{symbol}</button>;
};

export default Button;