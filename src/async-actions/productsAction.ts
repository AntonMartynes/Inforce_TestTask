import { PreloaderAction } from './../types/preloader';
import { showPreloaderActionCreator, hidePreloaderActionCreator } from './../store/reducers/preloaderReducer';
import { InterfaceProduct } from '../types/models/InterfaceProduct';
import { ProductsAction } from './../types/products';
import { ProductActionTypes } from "../types/products"
import { Dispatch } from 'redux'
import ProductsService from '../services/productsService';
import CommentsService from '../services/commentsService';

export const getProductsAsync = () => {
    return async (dispatch: Dispatch<ProductsAction | PreloaderAction>) => {
        try {
            dispatch(showPreloaderActionCreator())
            const res = await ProductsService.getProducts()
            dispatch({type: ProductActionTypes.SET_PRODUCTS, payload: res.data})
            dispatch(hidePreloaderActionCreator())
        } catch(e) {
            console.log(e)
        }
    }
}
export const getProductAsync = (id: number) => {
    return async (dispatch: Dispatch<ProductsAction | PreloaderAction>) => {
        try {
            dispatch(showPreloaderActionCreator())
            const res = await ProductsService.getProduct(id)
            dispatch({type: ProductActionTypes.SET_PRODUCT,payload: res.data})
            dispatch(hidePreloaderActionCreator())
        } catch(e) {
            console.log(e)
        }
    }
}
export const addProductAsync = (product:InterfaceProduct) => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            
            const res = await ProductsService.addProduct(product)
            dispatch({type: ProductActionTypes.ADD_PRODUCT, payload: res.data})
            console.log('added', res.data)
        } catch(e) {
            console.log(e);
            
        }
    }
}
export const deleteProductAsync = (id:number) => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            await ProductsService.deleteProduct(id)
            dispatch({type: ProductActionTypes.DELETE_PRODUCT, payload:{id}})
            const commentsRes = await CommentsService.getComments(id)
            commentsRes.data.forEach(comment => {
                comment.id && CommentsService.deleteComment(comment.id)
            })
            
                
        } catch(e) {
            console.log(e);
            
        }
    }
}
export const editProductAsync = (product:InterfaceProduct) => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            const res = await ProductsService.editProduct(product)
            dispatch({type: ProductActionTypes.EDIT_PRODUCT, payload:product})
            console.log('edited', res.data)
        } catch(e) {
            console.log(e);
            
        }
    }
}