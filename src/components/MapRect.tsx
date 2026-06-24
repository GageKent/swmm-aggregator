import { useEffect } from "react";
import { useLeafletContext } from '@react-leaflet/core'
import L from "leaflet";
import type { bounds } from "../types";

interface MapRectProps {
    bounds: bounds
}

export default function MapRect({bounds}: MapRectProps) {
  const context = useLeafletContext();
 
  useEffect(() => {
    console.log('test');
    const corner1 = L.latLng(bounds.south, bounds.west);
    const corner2 = L.latLng(bounds.north, bounds.east);
    const rectBounds = L.latLngBounds(corner1, corner2);
    const rect = new L.Rectangle(rectBounds);
    const container = context.layerContainer || context.map;
    container.addLayer(rect);

    return () => {
      container.removeLayer(rect);
    }

  });

  return null

}