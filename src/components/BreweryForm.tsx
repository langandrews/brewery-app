import axios from "axios";
import { FormEvent } from "react";
import { useInput } from "../hooks/input-hook";
import { Brewery } from "../types/Brewery";

type BreweryFormProps = {
  setBreweriesCallback: (breweries: Brewery[]) => void;
};

export default function BreweryForm({
  setBreweriesCallback,
}: BreweryFormProps) {
  const { value: state, bind: bindState, reset: resetState } = useInput("");
  const { value: city, bind: bindCity, reset: resetCity } = useInput("");

  const handleBrewerySearch = (event: FormEvent) => {
    let stateQueryParameter = "by_state=" + state;
    let cityQueryParameter = "by_city=" + city;
    axios
      .get<Brewery[]>(
        "https://api.openbrewerydb.org/breweries?" +
          stateQueryParameter +
          "&" +
          cityQueryParameter
      )
      .then((response) => {
        setBreweriesCallback(response.data);
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
          <div>
            <input type="text" {...bindState} />
          </div>
        </label>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
