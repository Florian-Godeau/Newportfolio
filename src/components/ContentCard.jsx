import React from 'react';

function ContentCard({ children }) {
    return (
        <div className="content-card card-shadow">
            {children}
        </div>
    );
}

export default ContentCard;
