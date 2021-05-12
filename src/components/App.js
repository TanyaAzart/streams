import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import Header from'./Header';
import history from '../history';

//571459454692-1e6lubuu1880sj6n2u6k3380rtc9p6oj.apps.googleusercontent.com


const App = ()=> {
    return<div className="ui container">
        <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={StreamList}/>
                <Route path="/streams/new" component={StreamCreate} />
                <Route path ="/streams/delete/:id" component={StreamDelete}/>
                <Route path="/streams/edit/:id" component={StreamEdit}/>
                <Route path ="/streams/:id" component={StreamShow}/>
            </Switch>
            
        </div>
        </Router>
        </div>
}

export default App;