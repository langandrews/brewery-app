import React, { FormEvent, SyntheticEvent, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInput } from "./hooks/input-hook";
import "./App.css";

export default function App() {
  const { value: state, bind: bindState, reset: resetState } = useInput("");
  const { value: city, bind: bindCity, reset: resetCity } = useInput("");
  const handleBrewerySearch = (event: FormEvent) => {
    event.preventDefault();
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
    </div>
  );
}
