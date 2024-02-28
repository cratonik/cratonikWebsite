import { useState } from 'react';
import style from './bell.module.css';

const BellNotification = () => {
  const [notification, setNotification] = useState(true);
  const [notificationPanel, setNotificationPanel] = useState(false)

  return (
    <div className={style.bell} onClick={() => { setNotification(false); setNotificationPanel(!notificationPanel) }}>
      <i className="far fa-bell">
        {notification ? <span className={style.beller}></span> : ""}
      </i>
      <div className={style.notifications} style={{ display: notificationPanel ? 'block' : 'none' }}>
        <div className={style.noti}>
          <div className={style.notiType}>
            New Case Study
          </div>
          <div className={style.notificationDetails}>
            <div className={style.notificationLogo}>
              <i className="far fa-bell"></i> 
            </div>
            <div className={style.notificationPargraph}>
              <div className={style.notificationTitle}>
                Winning by design
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BellNotification;
