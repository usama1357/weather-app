import React, { useState } from "react";
import { Input } from "antd";

export default function Input_Field(props) {
  const [val, setval] = useState("");

  return (
    <>
      <Input
        style={{ width: "200px", textAlign: "center" }}
        placeholder="Enter City"
        value={val}
        onChange={(e) => setval(e.target.value)}
        onPressEnter={() => props.getData(val)}
      />
    </>
  );
}
