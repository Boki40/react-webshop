
const intialState = []

export default function productsReducer(state = intialState, action) {
    switch (action.type) {
        case 'products/productsLoaded':
            return action.payload
        default:
            return state
    }
}

export async function fetchProducts(dispatch, getState) {
    const response = await fetch("http://localhost:5000/api/products").then(response => response.json())
    dispatch({ type: 'products/productsLoaded', payload: response })
}