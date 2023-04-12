import { showPreloaderActionCreator, hidePreloaderActionCreator } from './../store/reducers/preloaderReducer';
import { commentsAction, CommentsActionTypes } from '../types/comments';
import { Dispatch } from 'redux'
import CommentsService from '../services/commentsService'
import { PreloaderAction } from '../types/preloader';

export const setCommentsAsync = (id:number) => {
    return async (dispatch: Dispatch<commentsAction | PreloaderAction>) => {
        try {
            dispatch(showPreloaderActionCreator())
            const res = await CommentsService.getComments(id)
            dispatch({type: CommentsActionTypes.SET_COMMENTS, payload: res.data})
            dispatch(hidePreloaderActionCreator())
        } catch(e) {
            console.log(e)
        }
    }
}
export const addCommentAsync = (id:number, text: string) => {
    return async ( dispatch: Dispatch<commentsAction>) => {
        try {
            const comment = {
                productId: id,
                date: new Date().toLocaleDateString(),
                description: text
            }
            const res = await CommentsService.addComment(comment)
            dispatch({type: CommentsActionTypes.ADD_COMMENT, payload:res.data})
            
        } catch (e) {
            console.log(e);
            
        }
    }
}
export const deleteCommentAsync = (id:number) => {
    return async ( dispatch: Dispatch<commentsAction>) => {
        try {
            await CommentsService.deleteComment(id)
            dispatch({type: CommentsActionTypes.DELETE_COMMENT, payload:{id}})
        } catch (e) {
            console.log(e);
            
        }
    }
}
