import React from "react";

const name = "hasitha";
const age = "25";
const city = "tanamalwila";

const user = {
  name: `${name}`,
  age: `${age}`,
  city: `${city}`,
};

function Main(props) {
    const {fname, ncity, oage} = props;
    const { city } = user;
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{city} this is from object destructuring </p>
      <p>this is a main component</p>
      <p>{fname}</p>
      <p>{ncity}</p>
      <p>{oage}</p>
    </div>
  );
}

export default Main;
