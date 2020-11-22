import React from "react"
import Collapsible from 'react-collapsible';


export default function GyikSection(props) {
    const gyikKerdesek = props.data.kerdesek.map(kerdes => {
        return (
            <Collapsible openedClassName="open" key={kerdes.id} trigger={kerdes.kerdes}>
                {kerdes.valasz}
            </Collapsible>
        )
    })

    return (
        <div>
            <h2 style={{ fontWeight: "normal" }}>{props.data.kategoria}</h2>
            <div className="collapsible-container">
                {gyikKerdesek}
            </div>
        </div>
    )
}