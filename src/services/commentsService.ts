import { InterfaceComment } from '../types/models/InterfaceComment';
import $api from "../http";
import { AxiosResponse } from 'axios'

export default class CommentsService {
    static async getComments(id:number) :Promise<AxiosResponse<InterfaceComment[]>> {
        const res = await $api.get('/Comments?productId=' + id)
        return res
    }
    
    static async addComment(comment: InterfaceComment) :Promise<AxiosResponse<InterfaceComment>> {
        const res = await $api.post('/Comments', comment)
        return res
    }
    static async deleteComment(id:number) :Promise<AxiosResponse<InterfaceComment>> {
        const res = await $api.delete('/Comments/' + id)
        return res
    }
}