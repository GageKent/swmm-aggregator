export type bounds = {
    north: number,
    east: number,
    south: number,
    west: number,
}

export interface AppProps {
  bounds: bounds | null,
  setBounds: React.Dispatch<React.SetStateAction<bounds | null>>
}

