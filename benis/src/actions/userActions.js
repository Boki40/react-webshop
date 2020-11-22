import store from "../store"

export const userLogin = (email, password) => {
    console.log("hurrá")

    fetch('http://localhost:5000/api/signin', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
        .then(response => response.json())
        .then(data => {
            store.dispatch({ type: "user/login", payload: { data: data } })
            localStorage.setItem("userInfo", JSON.stringify(store.getState().user))
        })

}

