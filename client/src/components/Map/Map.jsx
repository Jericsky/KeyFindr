import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import PinLocation from '../PinLocation/PinLocation'
import './Map.scss'
import 'leaflet/dist/leaflet.css'

export default function Map({items}) {
    // const position = [25.790654, -80.130045]

    return (
        <MapContainer center={[34.052235, -118.243683]} zoom={10} scrollWheelZoom={false} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {items.map(item => (
                <PinLocation item={item} key={item.id}/>
            ))}
        </MapContainer>
        
           
       
    )
}
