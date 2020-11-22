const intialState = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : { loggedIn: false, locations: [] }

export default function userReducer(state = intialState, action) {
    switch (action.type) {
        case "user/login": {
            return { ...action.payload.data, loggedIn: action.payload.data.loggedin ? true : false }
        }
        case "user/logout": {
            return { loggedIn: false }
        }
        case "user/addLocation": {
            const locations = { ...state }.locations
            const Id = locations.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1
            const item = { ...action.payload, id: Id }
            return {
                ...state,
                locations:
                    [
                        ...state.locations,
                        item
                    ]
            }
        }
        case "user/deleteLocation": {
            const arr = { ...state }.locations.filter((x) => x.id !== action.payload);
            return {
                ...state,
                locations: arr
            }
        }
        default:
            return state
    }
}

