import React, { useState } from "react";
import { useEffect } from "react";

function Test() {
  let [time, Updatedtime] = useState(0);
  let [count, UpdateCount] = useState(0);
  useEffect(() => {
    console.log("this is from use effect");
  }, [count]);

  console.log("hi");

  return (
    <>
      <div>
        <h1> i run:{time}</h1>
        <h1> call a run:{count}</h1>

        <button
          onClick={() => {
            Updatedtime(time + 1);
          }}
        >
          {" "}
          add
        </button>
        <button
          onClick={() => {
            UpdateCount(count + 1);
          }}
        >
          {" "}
          add count
        </button>
      </div>
    </>
  );
}
export default Test;
