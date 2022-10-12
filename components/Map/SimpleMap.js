import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet"

function App() {
  return (
    <MapContainer
      style={{ width: "100%", height: "20rem" }}
      center={[35.759465, -5.833954]}
      zoom={12}
      scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  )
}

export default App
