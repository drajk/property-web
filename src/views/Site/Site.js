import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';

const Search = lazy(() => import('../Search/Search'));
const Favourites = lazy(() => import('../Favourites/Favourites'));

const Site = () => (
    <BrowserRouter basename="/property-app">
        <Suspense fallback={<Loader className="loader" />}>
            <Switch>
                <Route path="/search" component={Search} />
                <Route path="/favourites" component={Favourites} />
                <Route path="/" component={Search} />
            </Switch>
        </Suspense>
    </BrowserRouter>
);

export default Site;
