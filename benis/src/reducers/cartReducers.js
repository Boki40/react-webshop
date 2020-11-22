

const initialState = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []


export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'cart/addToCart': {
            const Id = [...state].reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1
            const itemExists = [...state].find(item => item.product.id === action.payload.product.id)
            console.log("itemexists", itemExists)
            if (itemExists !== undefined) {
                let arr = [...state]
                for (let index = 0; index < arr.length; index++) {
                    if (arr[index].product.id === action.payload.product.id) {
                        arr[index].qty = Number(action.payload.cty) + Number(arr[index].qty)
                        return arr
                    }
                }
            }

            const item = { id: Id, product: action.payload.product, qty: action.payload.cty }
            return [...state, item]
        }

        case 'cart/removeFromCart': {
            const arr = state.filter((x) => x.id !== action.payload)
            return arr;
        }

        case 'cart/changeQty': {
            let arr = [...state]

            for (let index = 0; index < arr.length; index++) {
                if (arr[index].id === action.payload.id) {
                    arr[index].qty = action.payload.qty
                    return arr
                }
            }
            return arr;
        }
        default:
            return state
    }
}

