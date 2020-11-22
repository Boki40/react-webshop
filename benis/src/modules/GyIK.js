import React, { useEffect, useState } from 'react';
import "./Gyik/gyik.css"
import GyikSection from './Gyik/GyikSection';


function GyIK() {
    const [gyik, setGyik] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/api/gyik")
            .then(res => res.json())
            .then(res => setGyik(res))

    }, [])

    const gyikContainers = gyik.map(gyik => {
        return (
            <GyikSection key={gyik.id} data={gyik} />
        )
    })

    return (
        <div className="page-body">
            <div className="breadcomb">
                <div className="breadcomb-top">
                    Főoldal
                    </div>
                <div className="breadcomb-bottom lighter">
                    Gyakran ismételt kérdések
                    </div>
            </div>
            <div className="divider"></div>
            <div className="gyik-container">
                {gyikContainers}
            </div>
        </div>
    )

}

export default GyIK