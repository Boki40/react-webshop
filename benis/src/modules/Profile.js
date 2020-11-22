import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { CheckUserLoggedIn } from "../functions/checkUserLoggedIn"
import store from "../store"
import LocationCard from "./Profile/LocationCard"
import "./Profile/profile.css"
import {CSSTransitionGroup} from "react-transition-group"

function Profile() {

    const userSelector = state => state.user
    const user = useSelector(userSelector)

    const [locationForm, setLocationForm] = useState({
        irszam: "",
        orszag: "",
        megye: "",
        utca: "",
        hazsz: "",
        telep: "",
        emelet: ""
    })
    const [formVisible, setFormVisible] = useState(false)

    if (!CheckUserLoggedIn()) {
        return <Redirect to={"/"}></Redirect>
    }

    const onChangeHandler = (event) => {
        setLocationForm({ ...locationForm, [event.target.name]: event.target.value })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        store.dispatch({ type: 'user/addLocation', payload: locationForm })
        cancelForm()
        console.log(store.getState())
        localStorage.setItem("userInfo", JSON.stringify(store.getState().user))

    }

    const cancelForm = () => {
        setFormVisible(false)
        setLocationForm({
            irszam: "",
            orszag: "",
            megye: "",
            utca: "",
            hazsz: "",
            telep: "",
            emelet: ""
        })
    }

    const locationContainers = user.locations.map(location => { return <LocationCard key={location.id} data={location} /> })

    return (<div className="user-profile">
        <div className="breadcomb">
            <div className="breadcomb-top">Kezdőlap</div>
            <div className="breadcomb-bottom">Profil</div>
        </div>
        <div className="profile-section">
            <h1>Alapadatok</h1>
            <p><b>Név:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <button className="beni-button-link">Profil szerkesztése</button>
        </div>
        <div className="profile-section">
            <h1>Szállítási címek</h1>
            <p>Szállítási címek megadásával vásárláskor gyorsabban kiválaszthatod, hogy hova szállítsuk a rendelésed.</p>
            <div className="location-card-container">
                <CSSTransitionGroup
                    transitionName="product"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {locationContainers}</CSSTransitionGroup>
            </div>
            {!formVisible && <button className="beni-button-link" onClick={() => { setFormVisible(true) }}>Szállítási cím hozzáadása</button>}
            {formVisible && <form className="location-form" onSubmit={submitHandler}>
                <h2>Új szállítási cím hozzáadása</h2>
                <div className="form-data">
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text"
                                name="orszag"
                                value={locationForm.orszag}
                                onChange={onChangeHandler}
                                required></input>
                            <div className="underline">
                            </div>
                            <label>Ország</label>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text"
                                name="megye"
                                value={locationForm.megye}
                                onChange={onChangeHandler}
                                required></input>
                            <div className="underline">
                            </div>
                            <label>Megye</label>
                        </div>
                    </div>

                    <div className="wrapper">
                        <div className="input-data">
                            <input type="number"
                                name="irszam"
                                value={locationForm.irszam}
                                onChange={onChangeHandler}
                                required></input>
                            <div className="underline">
                            </div>
                            <label>Irányítószám</label>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text"
                                name="telep"
                                value={locationForm.telep}
                                onChange={onChangeHandler}
                                required></input>
                            <div className="underline">
                            </div>
                            <label>Település</label>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text"
                                name="utca"
                                value={locationForm.utca}
                                onChange={onChangeHandler}
                                required></input>
                            <div className="underline">
                            </div>
                            <label>Utca/közterület</label>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text"
                                name="hazsz"
                                value={locationForm.hazsz}
                                onChange={onChangeHandler}
                                required></input>
                            <div className="underline">
                            </div>
                            <label>Házszám</label>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text"
                                name="emelet"
                                value={locationForm.emelet}
                                onChange={onChangeHandler}
                            ></input>
                            <div className="underline">
                            </div>
                            <label>Emelet/Lakás száma</label>
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <button className="beni-button grey left" onClick={cancelForm}>Mégsem</button>
                    <button className="beni-button add-location right">Cím hozzáadása</button>
                </div>

            </form>}
        </div>

    </div>)


}

export default Profile