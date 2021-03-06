import react from 'react';
import NameCard from '../NameCard/NameCard'
import './ResultsContainer.css'

const ResultsContainer = ({ suggestedNames }) => {
    
    const suggestednamejsx = suggestedNames.map(suggestedName => { 
        return <NameCard SuggestedName={suggestedName} />
    })

    return (
        <div className="results-container">
            { suggestednamejsx }
        </div>
    );
}

export default ResultsContainer;