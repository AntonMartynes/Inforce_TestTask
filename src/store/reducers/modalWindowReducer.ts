import { ModalWindowAction, ModalWindowActionTypes, ModalWindowState } from './../../types/modalWindow';
const initialState: ModalWindowState = {
    hidden: true
}

export const modalWindowReducer = (state = initialState, action: ModalWindowAction): ModalWindowState => {
    switch (action.type) {
        case ModalWindowActionTypes.HIDE_WINDOW:
            return {...state, hidden: true}
        case ModalWindowActionTypes.SHOW_WINDOW:
            return {...state, hidden: false}
        default:
            return state
    }
}

export const hideWIndowActionCreator = () => {
    return {type: ModalWindowActionTypes.HIDE_WINDOW}
}
export const showWIndowActionCreator = () => {
    return {type: ModalWindowActionTypes.SHOW_WINDOW}
}
