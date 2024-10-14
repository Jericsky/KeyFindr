import React from 'react'
import './ListPage.scss'
import { listData } from '../../DummyData/DummyData'
import Filter from '../../components/Filter/Filter'
import ListCard from '../../components/ListCard/ListCard'

export default function ListPage() {

    const data = listData;

    return (
        <div className='listPage'>
            <div className="listContainer">
                <div className="wrapper">
                    <Filter/>
                    {data.map(item => (
                        <ListCard key={item.id} item={item}/>
                       
                    ))}
                    

                </div>
                
            </div>

            <div className="mapContainer">Map</div>
        </div>
    )
}
