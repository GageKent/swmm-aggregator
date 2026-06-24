import BoundaryForm from "./BoundaryForm"
import type { AppProps } from "../types"


export default function Sidebar({bounds, setBounds}: AppProps) {

  return (
    <div id="sidebar-container">
      <h2>SWMM-Ag</h2>
      <BoundaryForm bounds={ bounds } setBounds={setBounds}/>
    </div>
    )

}