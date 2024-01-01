import { useState } from 'react';
import style from './bell.module.css'

const BellNotification = () => {

  const [notification, setNotification] = useState(true);

  return (
    <div className={style.bell} onClick={() => setNotification(false)}>
      <i className="far fa-bell">
      {notification ? <span className={style.beller}></span> : ""}
      </i>
        
        
    </div>
  )
}

export default BellNotification