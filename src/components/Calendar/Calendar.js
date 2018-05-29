import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Day from '../Day'; 
import Modal from '../Modal';
import Header from '../Header'; 
import { 
  getAllDays
} from '../../actions/main';  
import './Calendar.css';


class Calendar extends Component {
  
  componentDidMount() {
    this.props.dispatch(getAllDays()); 
  }

  render() {

    // controls week vs. day display
    let days; 
    if(this.props.focusDay){
      const dayData = this.props.days.find(day => day.day === this.props.focusDay); 
  
      days = <main className="main-focus">
              <Day day={dayData} />
             </main>
    }
    else {
      let daySet = this.props.days.map((day, idx) => (
        <Day key={idx} day={day} />
      )); 

      days = <main className="main">
              {daySet}
            </main>
    }

    // displays modal if it is activated
    let modal; 
    if(this.props.modalActivated) {
      modal = <Modal />
    }

    return (
      <div className="App">
        <Header />
        {modal}
        {days}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  days: state.days, 
  modalActivated: state.modalActivated, 
  focusDay: state.focusDay
}); 

export default connect(mapStateToProps)(Calendar);
