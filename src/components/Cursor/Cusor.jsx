import { useEffect } from 'react';
import { gsap } from 'gsap'; 
import style from './cursor.module.css'; 

const Cursor = () => {

    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.className = style.cursor;

        const cursorF = document.createElement('div');
        cursorF.className = style.cursor_f;

        document.body.appendChild(cursor);
        document.body.appendChild(cursorF);

        if ('ontouchstart' in window) {
            cursor.style.display = 'none';
            cursorF.style.display = 'none';
        }

        const handleMouseMove = (e) => {

            if (!isFinite(e.clientX) || !isFinite(e.clientY)) {
                return; // Exit early if coordinates are non-finite
            }

            cursor.style.left = (e.clientX-18) + 'px';
            cursor.style.top = (e.clientY-17) + 'px';
            cursorF.style.left = (e.clientX-18) + 'px';
            cursorF.style.top = (e.clientY-17) + 'px';
            
            
            const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
            // Check if cursor is hovering over a link
            if (hoveredElement && hoveredElement.tagName.toLowerCase() === 'a') {
                cursor.classList.add(style.linkHover); // Apply link hover styling
                cursorF.classList.add(style.linkHover); // Apply link hover styling
            } else {
                cursor.classList.remove(style.linkHover); // Remove link hover styling
                cursorF.classList.remove(style.linkHover); // Remove link hover styling
            }
        };

        const handleMouseDown = () => {
                gsap.to(cursor, { scale: 2.5 });
                gsap.to(cursorF, { scale: 0.4, rotation: 120 });
        };
        
        const handleMouseUp = () => {
                gsap.to(cursor, { scale: 1 });
                gsap.to(cursorF, { scale: 1 , rotate: 0});
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchstart', handleMouseDown);
        window.addEventListener('touchmove', handleMouseMove);
        window.addEventListener('touchend', handleMouseUp);

        return () => {
            document.body.removeChild(cursor);
            document.body.removeChild(cursorF);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchstart', handleMouseDown);
            window.removeEventListener('touchmove', handleMouseMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, []);

    return null; // Render nothing, as cursor elements are added to the DOM separately
};

export default Cursor;
