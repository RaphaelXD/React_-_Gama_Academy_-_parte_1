import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Repositories from './repositorios';
import Home from './home';

export default function Routes() {
    return (
        <BrowserRouter>
            <switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositorios' component={Repositories} />
            </switch>
        </BrowserRouter>
    )
}