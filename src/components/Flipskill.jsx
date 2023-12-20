import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function FlipCard({ imageFront, imageBack }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="card-front" data-aos="flip-right" onClick={handleClick}>
                <img src={imageFront} alt="Logo Front" className="card-image" />
            </div>

            <div className="card-back" onClick={handleClick}>
                <img src={imageBack} alt="Logo Back" className="card-image" />
            </div>
        </ReactCardFlip>
    );
}

export default FlipCard;