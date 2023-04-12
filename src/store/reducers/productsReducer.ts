import { ProductActionTypes } from './../../types/products';
import { ProductsAction, ProductsState } from "../../types/products"
import * as _ from 'lodash'
import { InterfaceProduct } from '../../types/models/InterfaceProduct';

const initialState: ProductsState = {
    products:[],
    selectedProduct:{}
}

export const productsReducer = (state = initialState, action: ProductsAction): ProductsState => {
    switch (action.type) {
        case ProductActionTypes.SET_PRODUCTS: 
            return {...state, products:[...action.payload]}
        case ProductActionTypes.SET_PRODUCT:
            return{...state, selectedProduct:action.payload}
        case ProductActionTypes.ADD_PRODUCT:
            const cloneAdd: InterfaceProduct[] | undefined = _.cloneDeep(state.products)
            cloneAdd?.push(action.payload)
            return {...state, products: cloneAdd}
        case ProductActionTypes.DELETE_PRODUCT:
            const clone: InterfaceProduct[] | undefined = _.cloneDeep(state.products)
            
            const cloneDel = clone?.filter(product => {
                return product.id !== action.payload?.id
            })
            return {...state, products:cloneDel}
        case ProductActionTypes.EDIT_PRODUCT:
            const cloneEdit = state.products?.map(product => {
                return (product.id === action.payload.id) ? action.payload : product
            })
            console.log('r',cloneEdit);
            
            return {...state, products:cloneEdit}
        default:
            return state
    }
}

