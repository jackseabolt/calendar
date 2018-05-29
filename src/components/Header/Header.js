import React from 'react'; 
import { connect } from 'react-redux'; 
import { 
    getAllDays,
    toggleModal, 
    setModalContent, 
    setSelectedTime, 
    setSelectedDay, 
    setSelectedTitle, 
    focusDay 
  } from '../../actions/main';  
  import './Header.css'; 


export class Header extends React.Component {
    handleUnfocus() {
        this.props.dispatch(focusDay(null)); 
    }

    handleModal() {
        this.props.dispatch(setSelectedTitle(null)); 
        this.props.dispatch(toggleModal());
        this.props.dispatch(setSelectedTime(null));
        this.props.dispatch(setSelectedDay(null));
        this.props.dispatch(setModalContent('new'));  
    }

    render() {
        return (
            <header>
                <h2 className="logo" onClick={() => this.handleUnfocus()}>CalendarApp</h2>
                <button className="new-event-button" onClick={() => this.handleModal()}>Add Event</button>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    days: state.days, 
    modalActivated: state.modalActivated, 
    focusDay: state.focusDay
  }); 
  
  export default connect(mapStateToProps)(Header);
  


