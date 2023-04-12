import { InterfaceComment } from "./models/InterfaceComment" 
export interface CommentsState {
    comments?: InterfaceComment []
}

export enum CommentsActionTypes {
    SET_COMMENTS = 'SET_COMMENTS',
    ADD_COMMENT = 'ADD_COMMENT',
    DELETE_COMMENT = 'DELETE_COMMENT'
}

interface SetCommentsActionInterface {
    type: CommentsActionTypes.SET_COMMENTS
    payload: InterfaceComment []
}
interface AddCommentActionInterface {
    type: CommentsActionTypes.ADD_COMMENT
    payload: InterfaceComment 
}
interface DeleteCommentActionInterface {
    type:CommentsActionTypes.DELETE_COMMENT
    payload?: {id: number}
}

export type commentsAction = SetCommentsActionInterface | AddCommentActionInterface | DeleteCommentActionInterface