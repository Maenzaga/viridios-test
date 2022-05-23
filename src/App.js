import data from "./data.json";
import "./App.css";
import Multiselect from "multiselect-react-dropdown";
import { CountryCard } from "./components/CountryCard/CountryCard";
import { useEffect, useState } from "react";

function App() {
  const countryInfo = data["SDR2020 Data"].map((country) => country);
  const optionsInfo = countryInfo.map((country) => country["Country"]);
  const [render, setRender] = useState([]);
  const renderedCountry = countryInfo.filter((country) => {
    for (let i = 0; i == render.length; i++) {
      return country["Country"] === render[i] ? country : "";
    }
  });
  const renderCard = () => {
    return (
      <>
        {renderedCountry.map((country) => {
          return <CountryCard key={country.id} countryInfo={country} />;
        })}
      </>
    );
  };
  useEffect(() => {}, [render]);
  return (
    <div className="App">
      <Multiselect
        isObject={false}
        onKeyPressFn={function noRefCheck() {}}
        onRemove={(event) => {
          console.log("REMOVE", event);
        }}
        onSearch={(event) => {
          console.log("SEARCH", event);
        }}
        onSelect={(event) => {
          setRender(event);
          console.log("SELECT", event, render);
        }}
        options={optionsInfo}
      />
      <div>{renderCard()}</div>
    </div>
  );
}

export default App;
