import React from 'react';

function ContentCard({ children, animate }) {
    const animationClass = animate ? 'animate' : '';
    return (
        <main className="content-card card-shadow">
            <div className={animationClass}>
                {children}
            </div>
        </main>
    );
}


export default ContentCard;
