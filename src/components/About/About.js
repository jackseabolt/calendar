import React from 'react';
import './About.css'
import { connect } from 'react-redux'; 
import { toggleAbout } from '../../actions/main'; 
import { Transition } from 'react-transition-group';

export class About extends React.Component {

    handleClose() {
        this.props.dispatch(toggleAbout()); 
    }
   
    render() {

        // Transition styles
        const duration = 300;
        const defaultStyle = {
            opacity: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            height: '100%',
            width: '100%',
            margin: '0px',
            zIndex: 20,
            top: '0px',
            bottom: '0px',
            left: '0px',
            right: '0px',
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            transition: `opacity ${duration}ms ease-in-out`
        }

        const transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1 }
        }

        return (
            <Transition in={true} timeout={duration} appear={true}>
                {(state) => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        <div className="about-main">
                            <div onClick={() => this.handleClose()} className="about-close">
                                <i className="fas fa-times about-close-icon"></i>
                            </div>
                                <h2 className="about-title"><i className="fas fa-info-circle"></i>&nbsp;&nbsp;About</h2>
                                <p className="about-p">CalendarApp is an application for organizing your daily activities. 
                                Users can create different events to display on their calendar. Events are organized by 
                                type and will be color-coded on the display. Users may toggle between week and day 
                                views by clicking the label for the day they wish to view.  
                                <br />
                                <br />
                                This application was made in 2018 by Jack Seabolt. It was constructed using React, Redux, Node,
                                Express and MongoDB.     
                                </p> 
                        </div>
                    </div>
                )}
            </Transition >
        )
    }
}

export default connect()(About); 