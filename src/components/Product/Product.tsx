import React, { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductAsync } from '../../async-actions/productsAction'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { showWIndowActionCreator } from '../../store/reducers/modalWindowReducer'
import Comments from '../Comments/Comments'
import ModalWindow from '../ModalWindow/ModalWindow'
import Preloader from '../Preloader/Preloader'
import style from './Product.module.sass'

const Product:FC = () => {
  const dispatch = useTypedDispatch()
  const navigate = useNavigate()

  const {id} = useParams<{id: string}>()
  const idNum = id ? + id : 0
  const {hidden} = useTypedSelector(state => state.modalWindow)
  const {selectedProduct} = useTypedSelector(state => state.products)
    const {isLoading} = useTypedSelector(state => state.preloader)

  
  useEffect(()=>{
      dispatch(getProductAsync(idNum))
    
  },[dispatch, idNum])

  return (
    <div className={style.container}>
      {hidden 
        ? <></>
        :<ModalWindow id={idNum} input={true} product={selectedProduct}></ModalWindow>}
      <span className={style.name} >{selectedProduct?.name}</span>
      {isLoading 
        ? <Preloader/> 
        : <>
          {selectedProduct?.imageUrl && <><span>Image</span>
          <img className={style.image} src={selectedProduct?.imageUrl} alt={selectedProduct?.name}></img></>}

          {<><span>Count</span>
          <p className={style.field}>{selectedProduct?.count}</p></>}

          {<><span>Width</span>
          <p className={style.field}>{selectedProduct?.size?.width}</p></>}

          {<><span>Height</span>
          <p className={style.field}>{selectedProduct?.size?.height}</p></>}

          {selectedProduct?.weight && <><span>Weight</span>
          <p className={style.input}>{selectedProduct?.weight}</p></>}

          <button className={style.button}onClick={(e)=>dispatch(showWIndowActionCreator())} >Edit</button>
        </>
      }
      <button className={style.button}onClick={(e)=>navigate('/')} >See all</button>
      <Comments id={idNum}></Comments>

    </div>
  )
}

export default Product