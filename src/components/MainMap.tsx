import { MapContainer, TileLayer} from "react-leaflet";
import MapRect from "./MapRect";
import type { AppProps } from "../types";

export default function MainMap({ bounds }: AppProps) {

  return (
    <MapContainer 
      id="main-map"
      center={[38.8419, -96.0249]} 
      zoom={5} scrollWheelZoom={false}
    >
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {bounds ? ( <MapRect bounds={bounds}/> ) : null }
    </MapContainer>
    )
}