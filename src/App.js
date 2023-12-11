import { Fragment } from "react";
import "./App.css";
import Main from "./Components/Main";
import { MyData } from "./Data/MyData";
import { MyData2 } from "./Data/MyData";

const DataBlock = () => {
  return (
    <Fragment>
      {MyData2.map((ele, index) => {
        return <Main key={index} name={ele.name} city={ele.city} />;
      })}
    </Fragment>
  );
};

function App() {
  const Datablock2 = MyData2.map(({ name, city }, index) => {
    return <Main key={index} name={name} city={city} />;
  });

  return (
    <Fragment>
      <div>
        {MyData.map(({ name, city }, index) => {
          return <Main key={index} name={name} city={city} />;
        })}
      </div>
      <DataBlock />
      {Datablock2}
    </Fragment>
  );
}

export default App;
