import React from "react"
import "./AuthDialog/auth-dialog.css"
import { GrClose } from "react-icons/gr";
import store from "../store";
import { useSelector } from "react-redux";
import RegisterForm from "./AuthDialog/RegisterForm";
import LoginForm from "./AuthDialog/LoginForm";

export default function AuthDialog() {
    const toggleAuthHandler = ()=>{
        store.dispatch({type:"auth/toggleAuth"})
    }

    const authSelector = state =>state.authDialog
    const authInfo=useSelector(authSelector)

    const toggleRegisterForm=()=>{
        store.dispatch({type:"auth/toggleRegisterForm"})
        console.log("hurrá")
    }


    return (<div className="auth-bg">
        <div className="auth-window">
            <button className="auth-close-icon"  onClick={toggleAuthHandler}><GrClose /></button>
            {authInfo.register? <RegisterForm toggle={toggleRegisterForm} />:<LoginForm toggle={toggleRegisterForm}/>}
        </div>
    </div>)
}