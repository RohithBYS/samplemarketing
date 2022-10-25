import React from 'react'
import s from './moduleimage.module.css'
export default function ModuleImage(props) {
  const { moduleImage, moduleSize } = props
  return (
    <div className={s.roundBox+' '+moduleSize}>
      <img className={s.imageSizing} src={moduleImage} alt='icon'/>
    </div>
  )
}
