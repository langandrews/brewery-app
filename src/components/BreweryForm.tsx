import axios from "axios";
import { FormEvent, useState } from "react";
import { useInput } from "../hooks/input-hook";
import { Brewery } from "../types/Brewery";
import { stateOptions } from "../data/states";
import Dropdown, { Option } from "react-dropdown";


type BreweryFormProps = {
  setBreweriesCallback: (breweries: Brewery[]) => void;
};

export default function BreweryForm({
  setBreweriesCallback,
}: BreweryFormProps) {
  const [state, setState] = useState<Option>({"value": "", "label": ""})
  const { value: city, bind: bindCity, reset: resetCity } = useInput("");

  const handleBrewerySearch = (event: FormEvent) => {
    let stateQueryParameter = `by_state=${state?.value}`;
    let cityQueryParameter = `by_city=${city}`;
    axios
      .get<Brewery[]>(
        `https://api.openbrewerydb.org/breweries?${stateQueryParameter}&${cityQueryParameter}`
      )
      .then((response) => {
        setBreweriesCallback(response.data);
        console.log(response.data);
      });

    event.preventDefault();
  };

  return (
    <form onSubmit={handleBrewerySearch}>
      <div>
        <label>
          City:
          <div>
            <input type="text" {...bindCity} />
          </div>
        </label>
      </div>
      <div>
        <label>
          State:
          <Dropdown options={stateOptions} placeholder="Select an option" onChange={(option: Option) => {setState(option)}}/>
        </label>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
