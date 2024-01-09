import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import Nav from './Nav';
import ContentCard from './ContentCard';

function BottomContainer({ children }) {
    const location = useLocation();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timeout = setTimeout(() => {
            setAnimate(false);
        }, 500); 

        return () => clearTimeout(timeout);
    }, [location.pathname]); 

    return (
        <div className="bottom-container">
            <Nav />
            <ContentCard animate={animate}>
                {children}
            </ContentCard>
        </div>
    );
}

export default BottomContainer;