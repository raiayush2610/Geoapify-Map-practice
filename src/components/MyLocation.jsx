import React, { useEffect, useState } from 'react'
import { useMap, Marker, Popup } from 'react-leaflet'

const MyLocation = ({ position }) => {
    const [currentPosition, setCurrentPosition] = useState(null);

    useEffect(() => {
        if (position) {
            setCurrentPosition(position);
        }
    }, [position]);

    const map = useMap()
    if (currentPosition === null) return null;

    // map.flyTo(currentPosition, map.getZoom())
    map.flyTo(currentPosition, 13)

    return (
        <Marker position={currentPosition}>
            <Popup>You are here</Popup>
        </Marker>
    );
}

export default MyLocation