// components
import MainMap from "./components/MainMap";
// styles
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import Sidebar from "./components/Sidebar";


export default function App() {

  return (
    <div id='app-container'>
      <Sidebar />
      <MainMap />
    </div>
  )

}