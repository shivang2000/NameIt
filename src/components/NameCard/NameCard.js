import React from 'react';
import './NameCard.css'

const namecheapurl = 'https://www.namecheap.com/domains/registration/results/?domain=%27%3B'

const NameCard = ({SuggestedName}) => {
    return (
        <a target="_blank" className="card-link" href={`${namecheapurl}${SuggestedName}`}>
            <div className="result-name-card">
                <p className="result-name">{SuggestedName}</p>
            </div>
        </a>
    );
}

export default NameCard;