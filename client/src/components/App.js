import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>
const NotFound = () => <h2>Not Found</h2>


const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Switch>
                    <Route exact={true} path="/" component={Landing} />
                    <Route exact={true} path="/surveys/new" component={SurveyNew} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;