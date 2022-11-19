import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='flex items-center space-x-2 md:space-x-10'>
            <img 
              src="https://rb.gy/ulxxee"
              width={100}
              height={100}
              className="cursor-pointer object-contain"/>
              <ul>
                <ul className='hidden space-x-4 md:flex'>
                    <li className='headerLink'>Home</li>
                    <li className="headerLink" >TV Shows</li>
                    <li className="headerLink">Movie</li>
                    <li className="headerLink">New & Polular</li>
                    <li className="headerLink">My List</li>
                </ul>
              </ul>
        </div>
        <div>

        </div>
    </header>
  )
}

export default Header
