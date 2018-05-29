import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import Calendar from '../Calendar'; 
import { Link } from 'react-router-dom'; 
import './Home.css';

export class Home extends React.Component {
    constructor(props) {
        super(props); 
        this.state={
            started: false
        }
    }
    
    render() {

        const transitionStyles = {
            entering: { opacity: 0},
            entered: { opacity: 1}
        }

        return (
            <div className="home">
                <Transition in={true} timeout={300} appear={true}>
                {(state) => (
                    <div className="home-container" style={{
                        ...transitionStyles[state]
                    }} >
                            <h1 className="home-logo">CalendarApp</h1>

                        <Link to="/calendar">
                            <button className="home-button" onClick={() => this.setState({ started: true })}>
                                Get Started
                            </button>
                        </Link>
                    </div>
                )}
                </Transition>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.authToken !== null,
    loggingIn: state.loggingIn, 
    aboutOn: state.aboutOn
});

export default connect(mapStateToProps)(Home); 