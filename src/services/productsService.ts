import { InterfaceProduct } from '../types/models/InterfaceProduct';
import $api from "../http";
import { AxiosResponse } from 'axios'

export default  class ProductsService {
    static async getProducts() :Promise<AxiosResponse<InterfaceProduct[]>> {
        const res = await $api.get('/Products')
        return res
    }
    static async getProduct(id:number) :Promise<AxiosResponse<InterfaceProduct>> {
        const res = await $api.get('/Products/' + id)
        return res
    }
    static async deleteProduct(id:number) :Promise<AxiosResponse<InterfaceProduct>> {
        const res = await $api.delete('/Products/' + id)
        return res
    }
    static async editProduct(product: InterfaceProduct) :Promise<AxiosResponse<InterfaceProduct>> {
        const {id} = product
        const res = await $api.put('/Products/' + id, product)
        return res
    }
    static async addProduct(product: InterfaceProduct) :Promise<AxiosResponse<InterfaceProduct>> {
        const res = await $api.post('/Products', product)
        return res
    }
}