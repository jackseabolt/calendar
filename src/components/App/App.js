import React, { Component } from 'react';
import Home from '../Home';  
import Calendar from '../Calendar'; 
import {Route} from 'react-router-dom';

export default class App extends Component {

    render() {

        return (
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/calendar' component={Calendar} /> 
            </div>
        );
    }
}




