import React, { useState } from "react";
import {
  Route,
  Link,
  Switch,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import { Brewery } from "./types/Brewery";
import "./App.css";
import BreweryForm from "./components/BreweryForm";
import BreweryInfo from "./components/BreweryInfo";

export default function App() {
  const [breweries, setBreweries] = useState<Brewery[]>([]);

  let breweryList = breweries.map((brewery) => (
    <li>
      <Link to={"/breweries/" + brewery.id}>{brewery.name}</Link>
    </li>
  ));

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <BreweryForm setBreweriesCallback={setBreweries} />
            <ul>{breweryList}</ul>
          </Route>
          <Route path="/breweries/:id">
            <BreweryInfo breweries={breweries} />
            <Link to="/home">Back</Link>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
