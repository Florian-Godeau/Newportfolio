import React from 'react';

function ContentCard({ children, animate }) {
    const animationClass = animate ? 'animate' : '';
    return (
        <div className="content-card card-shadow">
            <div className={animationClass}>
                {children}
            </div>
        </div>
    );
}


export default ContentCard;
