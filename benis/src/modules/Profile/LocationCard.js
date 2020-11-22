import React from "react"
import store from "../../store"

export default function LocationCard(props) {
    const onClickHandler=()=>{
        store.dispatch({type:"user/deleteLocation", payload:props.data.id});
        localStorage.setItem("userInfo", JSON.stringify(store.getState().user))
    }
    
    return (
        <div className="location-card">
            <div className="location-data">
                <p><b>{props.data.utca} {props.data.hazsz} {props.data.emelet}</b></p>
                <p>{props.data.irszam} {props.data.telep}</p>
                <p>{props.data.orszag}, {props.data.megye}</p>
            </div>
            <button className="beni-button-link" onClick={onClickHandler}>Törlés</button>
        </div>
    )
}