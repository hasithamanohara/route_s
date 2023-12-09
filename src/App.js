import "./App.css";
import Main from "./Components/Main";
import { MyData } from "./Data/MyData";
import { MyData2 } from "./Data/MyData";

const DataBlock = () => {
  return (
    <>
      {MyData2.map((ele ,index) => {
        return <Main key={index} name={ele.name} city={ele.city} />;
      })}
    </>
  );
};

function App() {
  return (
    <>
      <div>
        {MyData.map(({ name, city }, index) => {
          return <Main key={index} name={name} city={city} />;
        })}
      </div>
      <DataBlock />
    </>
  );
}

export default App;
