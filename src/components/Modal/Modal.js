import React from 'react'; 
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';  
import { Transition } from 'react-transition-group'; 
import FormNew from '../FormNew';  
import FormDelete from '../FormDelete'; 
import { 
    toggleModal, 
    setModalContent, 
    addEvent, 
    setSelectedTime, 
    setSelectedDay, 
    setSelectedTitle, 
    storeImage, 
    setSelectedType
} from '../../actions/main';  
import './Modal.css'; 
import 'react-dropdown/style.css'

export class Modal extends React.Component {
    constructor(props) {
       super(props); 
       this.state={
            titleError: null, 
            timeError: null, 
            typeError: null, 
            dayError: null
       }
    }

    handleToggleDelete() {
        this.props.dispatch(setModalContent('delete')); 
    }

    handleToggleEdit() {
        this.props.dispatch(storeImage()); 
        this.props.dispatch(setModalContent('edit')); 
    }

    handleClose() {
        this.props.dispatch(toggleModal());
        this.props.dispatch(setModalContent(null)); 
    }

    handleErrors() {
        if(!this.props.selectedTitle) {
            this.setState({ titleError: "Please provide a title for your event" }); 
        } 
        else {
            this.setState({ titleError: null }); 
        }
        if (!this.props.selectedDay) {
            this.setState({ dayError: "Please select a day for your event" }); 
        } 
        else {
            this.setState({ dayError: null }); 
        }
        if (!this.props.selectedTime) {
            this.setState({ timeError: "Please select a time for your event" }); 
        } 
        else {
            this.setState({ timeError: null }); 
        }
        if (!this.state.eventType) {
            this.setState({ typeError: "Please provide a type for your event" }); 
        }
        else {
            this.setState({ typeError: null }); 
        } 
    }

    handleEdit(e) {
        e.preventDefault(); 
        // check if all fields are present
        if(this.props.selectedTitle && this.props.selectedTime && this.props.selectedDay && this.props.selectedType) {
            // check if new version differs from original
            if(this.props.selectedTitle !== this.props.originalImage.title || 
                this.props.selectedTime !== this.props.originalImage.time || 
                this.props.selectedDay !== this.props.originalImage.day || 
                this.props.selectedType !== this.props.originalImage.eventType 
            ) {
                // delete original
                this.props.dispatch(deleteEvent(this.props.originalImage.day, this.props.originalImage.time))
                // add new
                this.props.dispatch(addEvent(this.props.selectedTitle, this.props.selectedTime, this.props.selectedDay, this.props.selectedType)); 
                this.props.dispatch(toggleModal());
                this.props.dispatch(setModalContent(null)); 
            } 
            else {
                // close and don't change anything
                this.props.dispatch(toggleModal());
                this.props.dispatch(setModalContent(null)); 
            }
        }
        else {
           this.handleErrors(); 
        }
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

        const times = ["12:00am", "1:00am", "2:00am","3:00am","4:00am","5:00am","6:00am","7:00am","8:00am","9:00am","10:00am","11:00am",
        "12:00pm", "1:00pm", "2:00pm","3:00pm","4:00pm","5:00pm","6:00pm","7:00pm","8:00pm","9:00pm","10:00pm","11:00pm"]

        let content; 
        if(this.props.modalContent === 'new') {
            content = <FormNew />
        }
        else if(this.props.modalContent === 'delete') {
            content = <FormDelete />
        } 
        else if(this.props.modalContent === 'read') {
            content = <div>
                <h2>Record Details</h2>
                <p><strong>Title: </strong>{this.props.selectedTitle}</p>
                <p><strong>Type: </strong>{this.props.selectedType}</p>
                <p><strong>Day: </strong>{this.props.selectedDay}</p>
                <p><strong>Time: </strong>{this.props.selectedTime}</p>
                <button onClick={() => this.handleToggleEdit()} className="modal-button-submit">Edit Event</button>
                <button onClick={() => this.handleToggleDelete()} className="modal-button-delete">Delete Event</button>
            </div>
        }
        else if(this.props.modalContent === 'edit') {
            content = <form onSubmit={e => this.handleEdit(e)}>
                <h2>Update Record</h2>
                <input 
                    className="modal-input" 
                    type="text" 
                    placeholder="Event title" 
                    value={this.props.selectedTitle ? this.props.selectedTitle : ''}
                    ref="input"
                    onChange={e => this.props.dispatch(setSelectedTitle(this.refs.input.value))}
                />
                <p className="form-error">{this.state.titleError}</p>
                <Dropdown 
                    className="dropdown" 
                    options={["Meeting", "Trip", "Call", "Appointment", "Event"]} 
                    onChange={e => this.props.dispatch(setSelectedType(e.value))} 
                    value={this.props.selectedType}
                    placeholder="Type of Event" id="type"
                />
                <p className="form-error">{this.state.typeError}</p>
                <Dropdown 
                    className="dropdown" 
                    options={times} 
                    onChange={e => this.props.dispatch(setSelectedTime(e.value))} 
                    value={this.props.selectedTime}
                    placeholder="Time of Event" id="type"
                />
                <p className="form-error">{this.state.timeError}</p>
                <Dropdown 
                    className="dropdown" 
                    options={["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} 
                    onChange={e => this.props.dispatch(setSelectedDay(e.value))} 
                    value={this.props.selectedDay}
                    placeholder="Day of Event" id="type"
                />
                <p className="form-error">{this.state.dayError}</p>
                <button className="modal-button-submit">Add Event</button>
            </form>
        }

        return ( 
            <Transition in={true} timeout={duration} appear={true}>
                {(state) => (
                        <div style={{ 
                            ...defaultStyle,
                            ...transitionStyles[state]
                }}>
                    <div className="modal-main">
                        <div className="modal-close" onClick={() => this.handleClose()}>
                            <i className="fas fa-times modal-close-icon"></i>
                        </div>
                        {content}
                    </div>
                </div>
            )}
            </Transition >
        )      
    }
}

const mapStateToProps = state => ({
    modalContent: state.modalContent, 
    selectedTime: state.selectedTime, 
    selectedDay: state.selectedDay, 
    selectedTitle: state.selectedTitle, 
    selectedType: state.selectedType, 
    originalImage: state.originalImage
}); 

export default connect(mapStateToProps)(Modal); 

