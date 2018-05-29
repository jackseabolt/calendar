import React from 'react'; 
import Event from '../Event'; 
import './Slot.css'; 
import { 
    setSelectedTime, 
    toggleModal, 
    setModalContent, 
    setSelectedTitle, 
    setSelectedType 
} from '../../actions/main'; 
import { connect } from 'react-redux'; 

export class Slot extends React.Component {
    
    handleClick() {
        this.props.dispatch(setSelectedTime(this.props.slot.time));
        if(this.props.slot.event) {
            this.props.dispatch(setModalContent('read'))  
        } 
        else {
            this.props.dispatch(setSelectedType(null)); 
            this.props.dispatch(setSelectedTitle(null)); 
            this.props.dispatch(setModalContent('new')) 
        }
        this.props.dispatch(toggleModal());
    }
    
    render() {
        // controls slot weekend vs. week styles
        let slotStyle; 
        if(this.props.day === "Saturday" || this.props.day === "Sunday") {
            slotStyle = "Slot-weekend";
        } 
        else {
            slotStyle = "Slot";
        }

        // display Event if present
        let contents; 
        if(this.props.slot.event) {
            contents = <Event event={this.props.slot.event}/>
        } 
        else {
            contents = <p className="time">{this.props.slot.time}</p>;
        } 
        
        return (
            <section onClick={() => this.handleClick() } className={slotStyle}>
                {contents}   
            </section>
        ); 
    }
}

export default connect()(Slot); 
