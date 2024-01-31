import React, { useEffect, useState } from 'react'
import { Marker } from 'react-leaflet';

const MultiMarkers = ({ places }) => {
    const [markers, setMarkers] = useState([])

    useEffect(() => {
        setMarkers(places)
        // console.log(markers);
    }, [places])


    return (
        markers.map((place, index) => (
            <Marker key={index} position={place}>

            </Marker>
        ))
    )

}

export default MultiMarkers

// import React, { useEffect, useState } from 'react';
// import { Marker } from 'react-leaflet';

// const MultiMarkers = ({ places }) => {
//     const [markers, setMarkers] = useState([]);

//     useEffect(() => {
//         setMarkers(places);
//         console.log(markers);
//     }, [places]);

//     return (
//         // Return the result of mapping over places and rendering Marker components
//         markers.map((place, index) => (
//             <Marker key={index} position={place}>
//                 {/* You can add additional components or content inside the Marker component if needed */}
//             </Marker>
//         ))
//     );
// };

// export default MultiMarkers;
