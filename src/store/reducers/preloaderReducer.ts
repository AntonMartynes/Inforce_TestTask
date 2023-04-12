import { PreloaderAction, PreloaderActionTypes } from './../../types/preloader';
import { PreloaderState } from "../../types/preloader"

const initialState: PreloaderState = {
    isLoading: false
}

export const preloaderReducer = (state = initialState, action: PreloaderAction): PreloaderState => {
    switch (action.type) {
        case PreloaderActionTypes.HIDE_PRELOADER:
            return {...state, isLoading: false}
        case PreloaderActionTypes.SHOW_PRELOADER:
            return {...state, isLoading: true}
        default:
            return state
    }
}

export const hidePreloaderActionCreator = () => {
    return {type: PreloaderActionTypes.HIDE_PRELOADER}
}
export const showPreloaderActionCreator = () => {
    return {type: PreloaderActionTypes.SHOW_PRELOADER}
}
