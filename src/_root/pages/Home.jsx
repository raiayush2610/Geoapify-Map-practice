import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { MdMyLocation } from "react-icons/md";

// styles
import "leaflet/dist/leaflet.css";

// components
import MyLocation from '../../components/MyLocation';
import SearchCity from '../../components/SearchCity';

const Home = () => {
    const [location, setLocation] = useState([51.505, -0.09])

    // geoapify url for leaflet map
    // const geoapifyUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${import.meta.env.VITE_GEOAPIFY_KEY}`;

    // serach my location
    const handleSearch = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation([position.coords.latitude, position.coords.longitude])
        })
    }

    return (
        <>
            <div className='flex w-full h-full justify-evenly items-center gap-16 bg-slate-100'>
                <MapContainer center={location} zoom={5} style={{ width: "400px", height: "400px" }}>
                    <TileLayer
                        attribution='&copy; Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
                        // url={geoapifyUrl}
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <MyLocation
                        position={location}
                    />
                </MapContainer>

                <div
                    onClick={handleSearch}
                    className='flex items-center justify-between gap-2 hover:cursor-pointer border-2 p-2 rounded-lg'
                >
                    <MdMyLocation />
                    <h1>Search My Location</h1>
                </div>
                <div className='h-full'>
                    <SearchCity
                        className=''
                        setLocation={(position) => setLocation(position)}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
