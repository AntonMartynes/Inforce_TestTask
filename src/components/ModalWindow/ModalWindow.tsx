import React, { useState } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { hideWIndowActionCreator } from '../../store/reducers/modalWindowReducer'
import {addProductAsync, deleteProductAsync, editProductAsync} from '../../async-actions/productsAction'
import style from './ModalWindow.module.sass'
import { InterfaceProduct } from '../../types/models/InterfaceProduct'

interface Props {
    id: number
    input: boolean
    product?: InterfaceProduct
}

const ModalWindow: React.FC<Props> = ({id, input, product}) => {

    const dispatch = useTypedDispatch()
    const [name, setName] = useState(product?.name || '')
    const [imageUrl, setImageUrl] = useState(product?.imageUrl || '')
    const [count, setCount] = useState(product?.count || 0)
    const [height, setHeight] = useState(product?.size?.height || 0)
    const [width, setWidth] = useState(product?.size?.width || 0)
    const [weight, setWeight] = useState(product?.weight || '')

    const addProduct = () => {
        dispatch( addProductAsync(
            {
                name,
                imageUrl,
                count,
                size:{
                    height,
                    width,
                },
                weight
            }
        ))
        dispatch(hideWIndowActionCreator())
    }
    const deleteProduct = () => {
        dispatch(deleteProductAsync(id))
        dispatch(hideWIndowActionCreator())
    }
    const editProduct = () => {
        dispatch(editProductAsync(
            {
                id,
                name,
                imageUrl,
                count,
                size:{
                    height,
                    width,
                },
                weight
            }
        ))
        dispatch(hideWIndowActionCreator())

    }


    return (
        <div className={style.container}>
            <div className={style.window}>

                {input && <>
                    <span>Name</span>
                    <input className={style.input} type='text' placeholder='name' onChange={(e)=> setName(e.target.value)} value={name}></input>
                    <span>Image URL</span>
                    <input className={style.input} type='text' placeholder='imageUrl' onChange={(e)=> setImageUrl(e.target.value)} value={imageUrl}></input>
                    <span>Count</span>
                    <input className={style.input} type='number' placeholder='count' onChange={(e)=> setCount(+e.target.value)} value={count}></input>
                    <span>Width</span>
                    <input className={style.input} type='number' placeholder='width' onChange={(e)=> setWidth(+e.target.value)} value={width}></input>
                    <span>Height</span>
                    <input className={style.input} type='number' placeholder='height' onChange={(e)=> setHeight(+e.target.value)} value={height}></input>
                    <span>Weight</span>
                    <input className={style.input} type='text' placeholder='weight' onChange={(e)=> setWeight(e.target.value)} value={weight}></input>
                </>}
                <button className={style.button} onClick={() => dispatch(hideWIndowActionCreator())}>Cancel</button>
                {id === -1 
                ? <button className={style.button} onClick={() => addProduct()}>Add</button>
                : input 
                    ? <button className={style.button} onClick={() => editProduct()}>Edit</button>
                    : <button className={style.button} onClick={() => deleteProduct()}>Delete</button>}
            </div>

        </div>
    )
}

export default ModalWindow