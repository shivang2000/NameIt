import React from 'react';
import './App.css'
import Header from '../Header/Header'
import SearchBox from '../SearchBox/SearchBox'
import ResultsContainer from '../ResultsContainer/ResultsContainer'

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component {
    state = {
        headerText: 'Name It!',
        headerExpanded: true,
        suggestedNames:  [],
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText , 
            suggestedNames: inputText ? name(inputText) : []
        });
    }

    render() {
        return (
            <div>
                <Header headerTitle={this.state.headerText} headerExpanded={this.state.headerExpanded} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />    
            </div>
        );
    }
}

export default App;