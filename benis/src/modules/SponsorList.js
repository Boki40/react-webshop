import React from "react"
import sponsorData from "./sponsorData"

function SponsorList() {
    let sponsorImages = sponsorData.map(sponsor => {
        let bgImg = 'url(' + sponsor.imgURL + ')'
        return <a key={sponsor.id} href={sponsor.url}><div className="sponsor-image" style={{ backgroundImage: bgImg }}></div></a>
    })

    return (
        <div className="sponsor-section">
            <h2>Partnerek</h2><div className="sponsor-container">
                {sponsorImages}
            </div>
        </div>
    )
}

export default SponsorList