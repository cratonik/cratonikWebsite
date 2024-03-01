import { useState, useEffect, useRef } from 'react';
import style from './bell.module.css';
import { Link } from 'react-router-dom';



const BellNotification = () => {
  const [notification, setNotification] = useState(true);
  const [notificationPanel, setNotificationPanel] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside of the notification panel and the bell icon
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationPanel(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={notificationRef} className={style.bell} onClick={() => { setNotification(false); setNotificationPanel(!notificationPanel) }}>
      <i className="far fa-bell">
        {notification ? <span className={style.beller}></span> : ""}
      </i>
      <div className={style.notifications} style={{ display: notificationPanel ? 'block' : 'none' }}>
        <Link to="/">
          <div className={style.noti}>
            <div className={style.notiType}>
              New Case Study
            </div>
            <div className={style.notificationDetails}>
              <div className={style.notificationLogo}>
              <img src="https://source.unsplash.com/featured/300x201" alt="Random"/>
              </div>
              <div className={style.notificationPargraph}>
                <div className={style.notificationTitle}>
                  Portfolio
                </div>
                <div className={style.notificationInfo}>
                  A new case study has been added to your portfolio. Click here to view it now!
                </div>
              </div>
              <div className={style.notificationGo}>
                <span className="fas fa-arrow-alt-circle-right"></span>
              </div>
            </div>
          </div>
        </Link>
        <hr />
        <Link to="/">
          <div className={style.noti}>
            <div className={style.notiType}>
              New Case Study
            </div>
            <div className={style.notificationDetails}>
              <div className={style.notificationLogo}>
              <img src="https://source.unsplash.com/featured/300x301" alt="Random"/>
              </div>
              <div className={style.notificationPargraph}>
                <div className={style.notificationTitle}>
                  Portfolio
                </div>
                <div className={style.notificationInfo}>
                  A new case study has been added to your portfolio. Click here to view it now!
                </div>
              </div>
              <div className={style.notificationGo}>
                <span className="fas fa-arrow-alt-circle-right"></span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BellNotification;
