import React, { useEffect, useRef, useState } from 'react'
import CityCard from './CityCard'

// style
import './SearchCity.css'

const SearchCity = ({setLocation}) => {
    const [inputValue, setInputValue] = useState('')
    const [city, setCity] = useState([])

    const Key = import.meta.env.VITE_GEOAPIFY_KEY

    // update the input value when the user types
    const handleChange = (event) => {
        let value = event.target.value
        value = value.replace(/\s/g, '%');
        setInputValue(value)
    }

    // fetch the data from the api on clicking submit
    const handleSubmit = async () => {
        const data = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${inputValue}&apiKey=${Key}`)
        const res = await data.json()

        setCity(res.features)
    }

    // fetch the data after every 500ms only when usesr types in the search bar
    useEffect(() => {
        const timer = setTimeout(async () => {
            try {
                const data = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${inputValue}&apiKey=${Key}`);
                const res = await data.json();
                // console.log(res);
                setCity(res.features)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [inputValue, Key]);

    // useEffect(() => {
    //     console.log(inputValue);
    // }, [inputValue])

    return (
        <>
            <div className='w-full'>
                <div className='w-full'>
                    <div className='search-container'>
                        <input type='text' className='search-bar' onChange={handleChange} />
                        <button className='submit-button' onClick={handleSubmit}>Submit</button>
                    </div>

                    {/* List of matching cities searched by user */}
                    {!city || city.length > 0 && (
                        <div className='result-container scrollbar-hide'>
                            {city.map((city, index) => (
                                <CityCard 
                                    options={city.properties} 
                                    key={index} 
                                    setLocation={(position) => setLocation(position)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default SearchCity