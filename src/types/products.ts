import { InterfaceProduct } from "./models/InterfaceProduct";

export interface ProductsState {
    products?: InterfaceProduct [],
    selectedProduct: InterfaceProduct
}
export enum ProductActionTypes {
    SET_PRODUCTS = 'SET_PRODUCTS',
    ADD_PRODUCT = 'ADD_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    EDIT_PRODUCT = 'EDIT_PRODUCT',
    SET_PRODUCT = 'SET_PRODUCT'
}

interface SetProductsActionInterface {
    type: ProductActionTypes.SET_PRODUCTS
    payload: InterfaceProduct []
}
interface AddProductActionInterface {
    type: ProductActionTypes.ADD_PRODUCT
    payload: InterfaceProduct
}
interface EditProductActionInterface {
    type: ProductActionTypes.EDIT_PRODUCT
    payload: InterfaceProduct
}
interface DeleteProductActionInterface {
    type: ProductActionTypes.DELETE_PRODUCT
    payload?: {id: number}
}

interface SetProductActionInterface {
    type: ProductActionTypes.SET_PRODUCT,
    payload: InterfaceProduct
}

export type ProductsAction = SetProductsActionInterface 
    | AddProductActionInterface 
    | EditProductActionInterface 
    | DeleteProductActionInterface 
    | SetProductActionInterface