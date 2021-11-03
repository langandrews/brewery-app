import React, { FormEvent, SyntheticEvent, useState } from "react";
import { useInput } from "./hooks/input-hook";
import { Brewery } from "./types/Brewery";
import "./App.css";
import axios from "axios";
import BreweryForm from "./components/BreweryForm";

export default function App() {
  const [breweries, setBreweries] = useState<Brewery[]>([]);

  let breweryList = breweries.map(brewery =>
    <li>
      <p>{brewery.name}</p>
    </li>
  )
  

  return (
    <div className="App">
      <BreweryForm setBreweriesCallback={setBreweries}/>
      <ul>
        {breweryList}
      </ul>
    </div>
  );
}
