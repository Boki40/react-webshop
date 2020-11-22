export default function authReducer(state = { show: false, register: false }, action) {
    switch (action.type) {
        case 'auth/toggleAuth':
            return { ...state, show: !state.show }
        case 'auth/toggleRegisterForm':
            return { ...state, register: !state.register }
        default: return state
    }
}