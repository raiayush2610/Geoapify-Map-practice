import React from 'react'

const CityCard = ({options, setLocation, setPlaces}) => {
    const searchInterest = async () => {
        setLocation([options.lat, options.lon])
        const data = await fetch(`https://api.geoapify.com/v2/places?categories=tourism&filter=place:${options.place_id}&limit=20&apiKey=${import.meta.env.VITE_GEOAPIFY_KEY}`)
        const res = await data.json()
        // console.log(res.features);
        setPlaces(res.features.map(place => ([place.properties.lat, place.properties.lon])))
    }

    return (
        <>
            <div className='bg-white flex items-center border-b-2 p-3 w-full justify-between hover:cursor-pointer' onClick={searchInterest}>
                <div>
                    <h1>{options.city}</h1>
                    <p>{options.state}</p>
                </div>
                <h1>{options.country_code}</h1>
            </div >
        </>
    )
}

export default CityCard