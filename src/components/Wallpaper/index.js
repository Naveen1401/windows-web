import React from 'react'
import './style.css'
import wallpaper1 from '../../assets/Wallpaper.jpg'

const Wallpaper = () => {
  return (
    <div className='wallpaper_div'>
        <img src={wallpaper1} alt="Wallpaper" />
    </div>
  )
}

export default Wallpaper