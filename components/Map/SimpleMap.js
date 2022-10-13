import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet"

function SimpleMap({ long, lat }) {
  return (
    <div className="flex justify-center pt-16 px-[10px] rounded-2xl w-full">
      <MapContainer
        style={{ width: "100%", height: "40rem", borderRadius: "12px" }}
        center={[lat, long]}
        zoom={12}
        scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  )
}

export default SimpleMap
