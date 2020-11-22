import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div><div className="footer-border"></div>
                <div className="footer">

                    <img className="credit-card-img" src="/img/cards.png"></img>
                    <ul className="bottom-menu">
                        <li><a href="/">ADATKEZELÉS</a></li>
                        <li><a href="/">ÁSZF</a></li>
                        <li><a href="/">IMPRESSZUM</a></li>
                    </ul>
                    <div className="rights">Minden jog fenntartva © 2020 Benis</div>
                </div>
            </div>
        )
    }
}

export default Footer