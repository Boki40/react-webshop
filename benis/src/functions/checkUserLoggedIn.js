import { useSelector } from "react-redux"
import React from "react"

export const CheckUserLoggedIn = () =>{
    const userSelector=state=>state.user
    const user= useSelector(userSelector)
    return user.loggedIn
}