import React from 'react';
import Nav from './Nav';
import ContentCard from './ContentCard';

function BottomContainer({ children }) {
    return (
        <div className="bottom-container">
            <Nav />
            <ContentCard>
                {children}
            </ContentCard>
        </div>
    );
}

export default BottomContainer;
