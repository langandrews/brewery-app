import React, { FormEvent, SyntheticEvent, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInput } from "./hooks/input-hook";
import { Brewery } from "./types/Brewery";
import "./App.css";
import axios from "axios";

export default function App() {
  const { value: state, bind: bindState, reset: resetState } = useInput("");
  const { value: city, bind: bindCity, reset: resetCity } = useInput("");
  const [breweries, setBreweries] = useState<Brewery[]>([]);

  let breweryList = breweries.map(brewery =>
    <li>{brewery.name}</li>
  )
  
  const handleBrewerySearch = (event: FormEvent) => {
    event.preventDefault();
    let stateQueryParameter = "by_state=" + state
    let cityQueryParameter = "by_city=" + city
    axios.get<Brewery[]>("https://api.openbrewerydb.org/breweries?" + stateQueryParameter + "&" + cityQueryParameter)
    .then(response => {
        setBreweries(response.data)
      }
    )
  };

  return (
    <div className="App">
      <form onSubmit={handleBrewerySearch}>
        <div className="row">
          <label>
            City:
            <div className="row">
              <input type="text" {...bindCity} />
            </div>
          </label>
        </div>
        <div className="row">
          <label>
            State:
            <div className="row">
              <input type="text" {...bindState} />
            </div>
          </label>
        </div>
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
      <ul>
        {breweryList}
      </ul>
    </div>
  );
}
