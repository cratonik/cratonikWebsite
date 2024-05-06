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
  let data = {
    noti1: {
      "id": 1,
      "type": "New Case Study",
      "title": "New Case Study",
      "description": "A new case study has been added to your portfolio. Click here to view it now!",
      "image": "https://source.unsplash.com/featured/300x201",
      "link": "/portfolio"
    },
    noti2: {
      "id": 2,
      "type": "Project Management",
      "title": "Project Management",
      "description": "A new case study has been added to your portfolio. Click here to view it now!",
      "image": "https://source.unsplash.com/featured/300x201",
      "link": "/portfolio"
    }
  }

  const notifications = Object.values(data).map(notification => (
    <>
    <Link to={notification.link} key={notification.id}>
      <div className={style.noti}>
        <div className={style.notiType}>
          {notification.type}
        </div>
        <div className={style.notificationDetails}>
          <div className={style.notificationLogo}>
            <img src={notification.image} alt="Random"/>
          </div>
          <div className={style.notificationPargraph}>
            <div className={style.notificationTitle}>
              {notification.title}
            </div>
            <div className={style.notificationInfo}>
              {notification.description}
            </div>
          </div>
          <div className={style.notificationGo}>
            <span className="fas fa-arrow-alt-circle-right"></span>
          </div>
        </div>
      </div>
    </Link>
    <hr/>
    </>
  ));

  return (
    <div ref={notificationRef} className={style.bell} onClick={() => { setNotification(false); setNotificationPanel(!notificationPanel) }}>
      <i className="far fa-bell">
        {notification ? <span className={style.beller}></span> : ""}
      </i>
      <div className={style.notifications} style={{ display: notificationPanel ? 'block' : 'none' }}>
        {notifications}
        
      </div>
    </div>
  );
}

export default BellNotification;
