import React from 'react'; 
import Slot from '../Slot'; 
import { connect } from 'react-redux'; 
import { setSelectedDay } from '../../actions/main'; 
import './Day.css'; 

export class Day extends React.Component {
    
    handleClick() {
        this.props.dispatch(setSelectedDay(this.props.day.day))
    }
    render() {
        let slots = this.props.day.slots.map((slot, idx) => (
            <Slot key={idx} slot={slot} />
        )); 
        return (
            <section onClick={() => this.handleClick()} className="Day">
                <section className="Day-header">
                    <h5>{this.props.day.day}</h5>
                </section>
                {slots}
            </section> 
        ); 
    }
}

export default connect()(Day); 