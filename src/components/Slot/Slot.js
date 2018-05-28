import React from 'react'; 
import './Slot.css'; 
import { setSelectedTime, toggleModal, setModalContent, setSelectedTitle, setSelectedType } from '../../actions/main'; 
import { connect } from 'react-redux'; 
import Event from '../Event'; 

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
        let slotStyle; 
        if(this.props.day === "Saturday" || this.props.day === "Sunday") {
            slotStyle = "Slot-weekend"
        } 
        else {
            slotStyle = "Slot"
        }

        let contents = this.props.slot.event ? <Event event={this.props.slot.event}/> : <p className="time">{this.props.slot.time}</p>; 
        return (
            <section onClick={() => this.handleClick() } className={slotStyle}>
                {contents}   
            </section>
        )
    }
}

export default connect()(Slot); 
