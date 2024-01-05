import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importer useLocation
import Nav from './Nav';
import ContentCard from './ContentCard';

function BottomContainer({ children }) {
    const location = useLocation();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timeout = setTimeout(() => {
            setAnimate(false);
        }, 500); // Durée de l'animation

        return () => clearTimeout(timeout);
    }, [location.pathname]); // Déclencheur : changement de route

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