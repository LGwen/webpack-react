import { MemoryRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { AnimatedSwitch } from 'react-router-transition';
import Loadable from 'react-loadable';
const MyLoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};
const Container = Loadable({
    loader: () => import('../components/container'),
    loading: MyLoadingComponent
});
const Other = Loadable({
    loader: () => import('../components/Other'),
    loading: MyLoadingComponent
});
const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/">TodoList</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/other">Other</Link>
                    </li>
                </ul>
                <hr />
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper">
                    <Route exact path="/" component={Container} />
                    <Route path="/other" component={Other} />
                </AnimatedSwitch>
            </div>
        </Router>
    </Provider>
)
export default Root;