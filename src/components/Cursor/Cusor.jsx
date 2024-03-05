import React, { useState, useEffect, useRef } from 'react';
import style from './cursor.module.css';

const Cursor = () => {
    const [position, setPosition] = useState({ x: "50%", y: "50%" });
    const [clicked, setClicked] = useState(false);
    const clickTimeout = useRef(null); // Use useRef for mutable values

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => {
            setClicked(true); // Set clicked to true when mouse button is pressed down
            if (clickTimeout.current) {
                clearTimeout(clickTimeout.current); // Clear the existing timeout if another click occurs
            }
        };

        const handleMouseUp = () => {
            setClicked(true);
            if (clickTimeout.current) {
                clearTimeout(clickTimeout.current);
            }
            
            clickTimeout.current = setTimeout(() => {
                setClicked(false);
            }, 300); 
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        // Add the handleMouseDown event listener after handleMouseUp
        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    return (
        <div 
            className={`${style.cursor} ${clicked ? style.clicked : ''}`} 
            style={{ left: position.x, top: position.y }} 
        ></div>
    );
};

export default Cursor;
