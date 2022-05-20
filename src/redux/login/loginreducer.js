import { loginclick } from "./action"
const init = { loginclick: false }
const loginreducer = (state = init, { type, payload }) => {

    switch (type) {
        case loginclick:
            return { ...state, loginclick: payload }

        default:
            return { ...state }

    }

}
export default loginreducer


