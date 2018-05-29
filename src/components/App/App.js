import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Day from '../Day'; 
import Modal from '../Modal';
import { 
  getAllDays,
  toggleModal, 
  setModalContent, 
  setSelectedTime, 
  setSelectedDay, 
  setSelectedTitle 
} from '../../actions/main';  
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getAllDays()); 
  }

  handleModal() {
    this.props.dispatch(setSelectedTitle(null)); 
    this.props.dispatch(toggleModal());
    this.props.dispatch(setSelectedTime(null));
    this.props.dispatch(setSelectedDay(null));
    this.props.dispatch(setModalContent('new'));  
  }

  render() {
    const days = this.props.days.map((day, idx) => (
      <Day key={idx} day={day} />
    )); 

    const dayData = this.props.days.find(day => day.day === this.props.focusDay) 

    let modal; 
    if(this.props.modalActivated) {
      modal = <Modal />
    }

    if(this.props.focusDay) {
      return (
        <div className="App">
          <header>
              <h2 className="logo" >CalendarApp</h2>
              <button className="new-event-button" onClick={() => this.handleModal()}>Add Event</button>
          </header>
          {modal}
          <main >
           <Day day={dayData} />
          </main>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <header>
              <h2 className="logo" >CalendarApp</h2>
              <button className="new-event-button" onClick={() => this.handleModal()}>Add Event</button>
          </header>
          {modal}
          <main >
            {days}
          </main>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  days: state.days, 
  modalActivated: state.modalActivated, 
  focusDay: state.focusDay
}); 

export default connect(mapStateToProps)(App);
