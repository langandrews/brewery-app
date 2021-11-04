import { useParams } from "react-router";
import { Brewery } from "../types/Brewery";

type BreweryInfoProps = { breweries: Brewery[] };
type BreweryInfoParams = { id: string };

export default function BreweryInfo({ breweries }: BreweryInfoProps) {
  let { id } = useParams<BreweryInfoParams>();
  const breweryInfo = breweries.find((brewery) => (brewery.id = id));
  const breweryGoogleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    breweryInfo?.latitude +
    "," +
    breweryInfo?.longitude;

  return (
    <div>
      <p>
        <a href={breweryInfo?.website_url} target="_blank">
          {breweryInfo?.name}
        </a>
      </p>
      <p>{breweryInfo?.phone}</p>
      <p>
        <a href={breweryGoogleMapsUrl} target="_blank">
          {breweryInfo?.street} {breweryInfo?.city}, {breweryInfo?.state}{" "}
          {breweryInfo?.postal_code}
        </a>
      </p>
    </div>
  );
}
