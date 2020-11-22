import React, { useState } from "react"
import store from "../../store"


export default function RegisterForm(props) {

    const [form, setForm] = useState({ email: "", password: "" })

    const onChangeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
        event.preventDefault()
    }

    const loginHandler = () => {
        store.dispatch("auth/toggleAuth")
    }

    return (
        <div className="login-form-container">
            <h1>Regisztráció</h1>
            <form className="login-form">


                <div className="wrapper">
                    <div className="input-data">
                        <input type="email"
                            name="email"
                            //  value={this.state.email}
                            onChange={onChangeHandler}
                            required></input>
                        <div className="underline">
                        </div>
                        <label>Email</label>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="input-data">
                        <input type="password"
                            name="password"
                            //  value={this.state.email}
                            onChange={onChangeHandler}
                            required></input>
                        <div className="underline">
                        </div>
                        <label>Jelszó</label>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="input-data">
                        <input type="password"
                            name="password_again"
                            //  value={this.state.email}
                            onChange={onChangeHandler}
                            required></input>
                        <div className="underline">
                        </div>
                        <label>Jelszó újra</label>
                    </div>
                </div>
                <div style={{ width: '100%' }}>
                    <p><label> <input type="checkbox"></input>Elfogadom az <a href="#">Adatvédelmi nyilatkozatot.</a></label></p>
                    <button className="beni-button register">Regisztráció</button>
                </div>
            </form>
            <center><p>Van már fiókod? <button className="beni-button-link" onClick={() => { store.dispatch({ type: "auth/toggleRegisterForm" }) }}>Bejelentkezés</button></p></center>
        </div>
    )
}