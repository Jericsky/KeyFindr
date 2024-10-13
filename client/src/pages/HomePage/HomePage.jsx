import React from 'react'
import './HomePage.scss'
import SearchBar from '../../components/SearchBar/SearchBar'

export default function HomePage() {
  return (
    <div className='homepage'>
        <div className='textContainer'>
            <div className='wrapper'>
                <h1 className='title'>
                    Find Your Dream Home Buy or Rent with Ease
                </h1>
                <p>
                    Whether you're looking to buy your dream home or find the perfect rental, our platform offers a seamless experience tailored to your needs.
                </p>

                <SearchBar/>
            
                <div className='boxes'>
                    <div className="box">
                        <h3>Over 16 Years</h3>
                        <p>Expert Service</p>
                    </div>

                    <div className="box">
                        <h3>150+ Awards</h3>
                        <p>Industry Recognition</p>
                    </div>

                    <div className="box">
                        <h3>2000+ Properties</h3>
                        <p>Ready Listings</p>
                    </div>
                </div>

            </div>

            

        </div>
        <div className='imgContainer'>
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}
