import "./App.css";
import Main from "./Components/Main";

function App() {
  return (
    <div>
      <Main fname="hasith" ncity="tanamalwila" oage="20" />
      <Main>
        <p>hasitha this is a children</p>
      </Main>
    </div>
  );
}

export default App;
