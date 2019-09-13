import React from 'react';
import { Route } from "react-router-dom";
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';

const AppRouting = () => {
    return (
        <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/characters" component={CharacterList} />
            <Route path="/locations" component={LocationsList} />
        </div>
    )
}

export default AppRouting