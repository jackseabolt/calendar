import React from 'react'; 
import { connect } from 'react-redux'; 
import { toggleAbout } from '../../actions/main'; 
import { Transition } from 'react-transition-group'; 
import './HomeHeader.css'; 

export class HomeHeader extends React.Component {


    handleAbout() {
        this.props.dispatch(toggleAbout()); 
    }
    
    render() {

        const transitionStyles = {
            entering: { opacity: 0},
            entered: { opacity: 1}
        }

        return (
            <Transition in={true} timeout={300} appear={true}>
                {(state) => (
                    <header className="home-header" style={{
                        ...transitionStyles[state]
                    }} >
                    <p className="home-header-about-button" onClick={() => this.handleAbout()}><i className="far fa-info-circle"></i>&nbsp;&nbsp;About</p> 
                </header>
                )}
            </Transition>
        )
    }
}

export default connect()(HomeHeader); 