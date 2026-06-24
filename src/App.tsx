// React
import { useState } from "react";
// components
import MainMap from "./components/MainMap";
// styles
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import Sidebar from "./components/Sidebar";
import type { bounds } from "./types";


export default function App() {

  const [bounds, setBounds] = useState<bounds | null>(null);

  return (
    <div id='app-container'>
      <Sidebar 
        bounds={bounds}
        setBounds={setBounds}
      />
      <MainMap
        bounds={bounds}
        setBounds={setBounds}
      />
    </div>
  )

}