import React from 'react';
import { Route } from "react-router-dom";
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';

const AppRouting = () => {
    return (
        <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/characters" component={CharacterList} />
        </div>
    )
}

export default AppRouting