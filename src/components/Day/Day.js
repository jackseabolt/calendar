import React from 'react'; 
import Slot from '../Slot'; 
import { connect } from 'react-redux'; 
import { setSelectedDay, focusDay } from '../../actions/main'; 
import './Day.css'; 

export class Day extends React.Component {
    
    handleClick() {
        this.props.dispatch(setSelectedDay(this.props.day.day)); 
    }

    handleFocus() {
        this.props.dispatch(focusDay(this.props.day.day));
    }
    
    handleUnfocus() {
        this.props.dispatch(focusDay(null));
    }
   
    render() {

        let slots = this.props.day.slots.map((slot, idx) => (
            <Slot key={idx} slot={slot} day={this.props.day.day} />
        )); 
        if(this.props.focusDay) {
            return (
                <section onClick={() => this.handleClick()} className="Day">
                    <section onClick={() => this.handleUnfocus()} className="Day-header">
                        <h5>{this.props.day.day}</h5>
                    </section>
                    {slots}
                </section> 
            )
        }
        else {
            return (
                <section onClick={() => this.handleClick()} className="Day">
                    <section onClick={() => this.handleFocus()} className="Day-header">
                        <h5>{this.props.day.day}</h5>
                    </section>
                    {slots}
                </section> 
            ); 
        }
    }
}

const mapStateToProps = state => ({
    focusDay: state.focusDay
})

export default connect(mapStateToProps)(Day); 