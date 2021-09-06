import { GET_NEXT_DATA, REQUEST_NEXT_DATA, FAILED_NEXT_DATA, LOG_OUT, LOG_IN } from "../Actions/actionCreator";

const initialState = {
    nextData: [],
    loading: false,
    apiError: {},
    islogegdIn: false

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NEXT_DATA:
            return {
                ...state,
                nextData: action.payload,
                loader: false
            }
        case REQUEST_NEXT_DATA:
            return {
                ...state,
                loader: true
            }
        case FAILED_NEXT_DATA:
            return {
                ...state,
                loader: false,
                apiError: action.payload
            }
        case LOG_OUT:
            return {
                ...state,
                islogegdIn: false
            }
        case LOG_IN:
            console.log("inside reducer login")
            return {
                ...state,
                islogegdIn: true
            }
        default:
            return state;
    }
}