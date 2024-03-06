import React from 'react'
import style from './headingtitle.module.css'

const HeadingTitle = (props) => {
  return (
    <div className={style.heading}>{props.title}</div>
  )
}

export default HeadingTitle