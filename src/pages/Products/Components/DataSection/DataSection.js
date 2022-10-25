import React from 'react'
import s from './datasection.module.css'

export default function DataSection(props) {

  const{ mainText, subText} = props
  return (
    <div className={s.dataMainCont}>
      <div className={s.mainText}>{mainText}</div>
      <div className={s.subText}>{subText}</div>
    </div>
  )
}
