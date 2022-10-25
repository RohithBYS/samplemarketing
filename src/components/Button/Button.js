import React from 'react'
import s from './button.module.css'

export default function Button(props) {

  const { name, widthSize, widthHeight, textSize } = props
  return (
    <div className={`${s.primaryButton}`}
      style={{width: widthSize, height: widthHeight, fontSize: textSize}}
      >
      {name}
    </div>
  )
}
