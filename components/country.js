import { TicketIcon, TrashIcon } from '@heroicons/react/outline';
import React from 'react'

function Country({imgSrc, country,population,capital,currency}) {
    return (
        <div>
            {/* Flage image */}
            <div className="w-40 bg-gray-700 ">
                <img src={imgSrc} alt={country}></img>
            </div>
            {/* Descrition */}
            <div className="w-40 bg-white">
              <h2>{country}</h2>
              <p>Population: {population}</p>
              <p>Capital:{capital}</p>
              <p>Currency: {currency}</p>
              <div>
                  <TrashIcon/>
                  <TicketIcon/>
              </div>
            </div>
        </div>
    )
}

export default Country;
