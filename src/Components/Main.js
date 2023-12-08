import React from "react";

const myObj = [
  {
    name: "hasitha",
    age: "25",
    city: "tanamalwila",
  },
  {
    name: "manohara",
    age: "20",
    city: "tissa",
  },
];

function Main(children) {
  const { fname, ncity, oage } = children;
  return (
    <>
      <div>
        <p>this is a main component</p>
        <p>{fname}</p>
        <p>{ncity}</p>
        <p>{oage}</p>
      </div>
      {myObj.map((ele) => {
        return (
          <>
            <p>{ele.name}</p>
            <p>{ele.age}</p>
            <p>{ele.city}</p>
          </>
        );
      })}
    </>
  );
}

export default Main;
