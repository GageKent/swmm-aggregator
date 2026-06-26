import type { bounds } from "../types"

// 4 digits are shown in the docs, this gives a accuracy of ~20-40 feet 
// depending on your location
const DIGITS = 4;
function toDigits(x) {
  return x.toFixed(DIGITS)
}

export default function boundsToPolygon(bounds: bounds) {
  /**
   * Converts boundaries from the 'bounds' type to TNM Access
   * compliant polygons. Due to lack of clarity in TNM Access 'bbox' parameter,
   * this is the preffered way specify location within their API within this project. 
   */
   
  const n = toDigits(bounds.north);
  const e = toDigits(bounds.east);
  const s = toDigits(bounds.south);
  const w = toDigits(bounds.west);
  const cornerNE = `${e} ${n}`
  const cornerNW = `${w} ${n}`
  const cornerSW = `${w} ${s}`
  const cornerSE = `${e} ${s}`
  return `${cornerNE}, ${cornerNW}, ${cornerSW}, ${cornerSE}`

}