import { useParams } from "react-router";
import { Brewery } from "../types/Brewery";

type BreweryInfoProps = { breweries : Brewery[] }
type BreweryInfoParams = { id: string }

export default function BreweryInfo({breweries}: BreweryInfoProps) {
    let { id } = useParams<BreweryInfoParams>();
    console.log("id: ", id);
    const breweryInfo = breweries.find(brewery => brewery.id = id)

    return(
        <p>{breweryInfo?.name}</p>
    )
}