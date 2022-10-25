import React from 'react'
import s from './productsimage.module.css'

export default function ProductsImage(props) {
  const { dataImage,  topBaloonColor, bottomBaloonColor, topAdjust, bottomAdjust } = props
  return (
    <div className={s.imageCont}>
      <div className={s.innerCont}>
        <div className={s.mainImage}>
          <img className={s.imageStyling} src={dataImage} alt=''/>
        </div>
        <div className={s.topBaloon+' '+topAdjust} style={{backgroundColor: topBaloonColor}}></div>
        <div className={s.bottomBaloon+' '+bottomAdjust}  style={{backgroundColor: bottomBaloonColor}}></div>
        {/* <div>{topBaloonColor}</div> */}
      </div>
    </div>
  )
}
