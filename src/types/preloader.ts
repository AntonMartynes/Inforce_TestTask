export interface PreloaderState {
    isLoading?: boolean
}

export enum PreloaderActionTypes {
    HIDE_PRELOADER = 'HIDE_PRELOADER',
    SHOW_PRELOADER = 'SHOW_PRELOADER'
}

interface HidePreloaderActionInterface {
    type: PreloaderActionTypes.HIDE_PRELOADER
}

interface ShowPreloaderActionInterface {
    type: PreloaderActionTypes.SHOW_PRELOADER
}

export type PreloaderAction = ShowPreloaderActionInterface 
    | HidePreloaderActionInterface