import type { AppProps } from "../types"



export default function BoundaryForm({ bounds, setBounds }: AppProps) {

  const handleSubmit = ((e: React.SubmitEvent) => {
    
    e.preventDefault();
    const lat1 = e.target.lat1.value;
    const lat2 = e.target.lat2.value;
    const lon1 = e.target.lon1.value;
    const lon2 = e.target.lon2.value;
    // TODO: currently assumes box is entirely within western hemisphere.
    // TOOD: form validation.
    const newBounds = {
      north: (lat1 > lat2) ? lat1 : lat2,
      south: (lat1 < lat2) ? lat1 : lat2,
      east: (lon1 > lon2) ? lon1 : lon2,
      west: (lon1 < lon2) ? lon1 : lon2, 
    };
    setBounds(newBounds);
    console.log(bounds);
  })
    
  return (
    <form id='corners-form' onSubmit={ (e: React.SubmitEvent ) => handleSubmit(e) }>
      <div>
        <label htmlFor="corner1-lat">Corner 1 Lat.</label>
        <input type="number" name="lat1" id="corner1-lat"/>
      </div>
      <div>
        <label htmlFor="corner1-lon">Corner 1 Lon.</label>
        <input type="number" name="lon1" id="corner2-lat"/>
      </div>
      <hr />
      <div>
        <label htmlFor="corner2-lat">Corner 2 Lat.</label>
        <input type="number" name="lat2" id="corner2-lat"/>
      </div>
      <div>
        <label htmlFor="corner1-lon">Corner 2 Lon.</label>
        <input type="number" name="lon2" id="corner2-lat"/>
      </div>
      <button id="coords-form-submit">Set Bounds</button>
    </form>
  )

}