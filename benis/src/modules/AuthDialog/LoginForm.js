import React, { useState } from "react"
import { userLogin } from "../../actions/userActions"
import store from "../../store"


export default function LoginForm(props) {
    const [form, setForm] = useState({ email: "", password: "" })

    const onChangeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
        event.preventDefault()
    }

    const loginHandler = () => {
        userLogin(form.email, form.password)
        store.dispatch("auth/toggleAuth")
    }

    return (
        <div className="login-form-container">
            <h1>Bejelentkezés</h1>
            <form className="login-form" onSubmit={loginHandler}>


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
                <div style={{width:'100%'}}>
                    <p><a href="#">Elfelejtett Jelszó</a></p>
                    <button className="beni-button login">Bejelentkezés</button>
                </div>
            </form>
            <center><p>Nincs még fiókod? <button className="beni-button-link" onClick={() => { store.dispatch({ type: "auth/toggleRegisterForm" }) }} >Regisztrálok</button></p></center>

        </div>
    )
}