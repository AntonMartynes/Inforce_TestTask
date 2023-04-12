import React, { FC, useEffect, useState } from 'react'
import { getProductsAsync } from '../../async-actions/productsAction'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { InterfaceProduct } from '../../types/models/InterfaceProduct'
import {showWIndowActionCreator } from '../../store/reducers/modalWindowReducer'
import * as _ from 'lodash'
import ModalWindow from '../ModalWindow/ModalWindow'
import style from './ProductList.module.sass'
import { useNavigate } from 'react-router-dom'
import { sortByCount, sortByName } from '../../helpers/sort'
import Preloader from '../Preloader/Preloader'

const ProductList: FC = () => {
    const {products} = useTypedSelector(state => state.products)
    const {isLoading} = useTypedSelector(state => state.preloader)
    const {hidden} = useTypedSelector(state => state.modalWindow)
    const [sortBy, setSortBy] = useState('name')
    const [sorted, setSorted] = useState(products)
    const [deleteId, setDeleteId] = useState(-1)

    const dispatch = useTypedDispatch()
    let navigate = useNavigate();

    useEffect(() => {
        if (products?.length === 0) {
            dispatch(getProductsAsync())
        }
    }, [dispatch,products?.length])
    useEffect(() => {
        
        switch (sortBy) {
            case 'name': 
                const productsSortedByName = products && sortByName(_.cloneDeep(products))
                setSorted(productsSortedByName)
                break
            case 'count':
                const productsSortedByCount= products && sortByCount(_.cloneDeep(products)) 
                setSorted(productsSortedByCount)
                break
        }
      }, [products,sortBy])

    const deleteProduct = (id: number) => {
        setDeleteId(id)
        dispatch(showWIndowActionCreator())
        
    }
    const addProduct = () => {
        setDeleteId(-1)
        dispatch(showWIndowActionCreator())
    }

    return (
        <div className={style.container}>
            <div className={style.sortPanel}>Sort by:
                <select  className={style.select} onChange={(e) => {
                    setSortBy(e.target.value)
                }}>
                    <option value='name'>name</option>
                    <option value='count'>count</option>

                </select>
            </div>
            {hidden 
                        ? <></>
                        :<ModalWindow id={deleteId} input={deleteId === -1 ? true : false}></ModalWindow>}
            {isLoading 
                ? <Preloader/>
                : sorted?.map((product: InterfaceProduct) => {
                    return(
                    <div key={product.id} className={style.product}>
                        
                        <span className={style.name} onClick={(e) => navigate(`/product/${product.id}`)}> {product.name}</span>
                        <button className={style.button} onClick={() => deleteProduct(product.id || 1312)}>delete</button>
                    </div>
                    )
                })
            }
            <button className={style.button} onClick={() => addProduct()}>add product</button>
            
        </div>
    )
}

export default ProductList