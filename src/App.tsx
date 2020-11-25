import React, {
    ReactElement,
    Suspense,
} from 'react';
import {
    BrowserRouter as Switch,
    Route,
} from 'react-router-dom';
import {
    CountPage,
    PostsPage,
} from './pages';
import ServiceLoader from './components/ServiceLoader';

function App(): ReactElement {
    return (
        <Suspense fallback={<ServiceLoader />}>
            <Switch>
                <Route path="/count" component={CountPage} />
                <Route path="/posts" component={PostsPage} />
            </Switch>
        </Suspense>
    );
}

export default App;
