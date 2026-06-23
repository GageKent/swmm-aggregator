import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";

export default function MainMap() {

  return (
    <MapContainer 
      id="main-map"
      center={[51.505, -0.09]} 
      zoom={13} scrollWheelZoom={false}
      style={{ height: "100vh"}}
    >
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
    )
}