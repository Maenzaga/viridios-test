import styles from "./CountryCard.module.scss";

export function CountryCard(countryInfo) {
  return (
    <div className="cardContainer">
      <div className="CountryInfo">
        <p>countryInfo["Country"]</p>
        <p>countryInfo["id"]</p>
      </div>
      <div className="SDGInfo">
        <p>countryInfo["2020 SDG Index Score"]</p>
        <p>countryInfo["2020 SDG Index Rank"]</p>
      </div>
    </div>
  );
}
