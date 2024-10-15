import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import './PinLocation.scss'
import { Link } from 'react-router-dom'

export default function PinLocation({item}) {
  return (
    <div className='pin'>
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.img} alt="" />
                    <div className="textContainer">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span className='bed'>{item.bedRooms} bedroom</span>
                        <b>₱ {item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    </div>
  )
}
