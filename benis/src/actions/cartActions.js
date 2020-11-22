import store from "../store"

export const addToCart = (product, qty) => {


    store.dispatch({ type: "cart/addToCart", payload: { product: product, cty: qty } })
    localStorage.setItem('cartItems', JSON.stringify(store.getState().cart))
}

export const removeFromCart = (id) => {
    store.dispatch({ type: "cart/removeFromCart", payload: id })
    localStorage.setItem('cartItems', JSON.stringify(store.getState().cart))

}

export const changeQty = (id, qty) => {
    store.dispatch({ type: "cart/changeQty", payload: { id: id, qty: qty } })
    localStorage.setItem('cartItems', JSON.stringify(store.getState().cart))

}