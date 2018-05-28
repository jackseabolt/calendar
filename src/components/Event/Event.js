import React from 'react'; 
import { Transition } from 'react-transition-group';
import { setSelectedType, setSelectedTitle } from '../../actions/main'; 
import { connect } from 'react-redux'; 
import './Event.css'; 

class Event extends React.Component {
    
    handleClick() {
        console.log(`HERE IS HANDLECLICK: ${this.props.event.type}`)
        this.props.dispatch(setSelectedType(this.props.event.eventType)); 
        this.props.dispatch(setSelectedTitle(this.props.event.title)); 
    }

    render() {
        const duration = 300; 
   
        const transitionStyles = {
            entering: { opacity: 0 }, 
            entered: { opacity: 1 }
        }
    
        return (
            <Transition in={true} timeout={duration} appear={true}>
                {(state) => (
                    <div className="container" style={{
                        ...transitionStyles[state]
                    }}>
                    <article onClick={() => this.handleClick()} className={"Event-component " + this.props.event.eventType}>
                        <p>{this.props.event.title}</p>
                    </article>
                </div>
                    
            )}
            </Transition >        
        ); 
    }
}

export default connect()(Event); 