import React from 'react'; 
import { connect } from 'react-redux';  
import { 
    toggleModal, 
    setModalContent, 
    deleteEvent, 
} from '../../actions/main';  

export class FormDelete extends React.Component {
    constructor(props) {
       super(props); 
       this.state={
            titleError: null, 
            timeError: null, 
            typeError: null, 
            dayError: null
       }
    }

    handleDelete() {
        this.props.dispatch(deleteEvent(this.props.selectedDay, this.props.selectedTime)); 
        this.handleClose(); 
    }

    handleClose() {
        this.props.dispatch(toggleModal());
        this.props.dispatch(setModalContent(null)); 
    }
    
    render() {  
        return ( 
            <div>
                <br />
                <h3>Are you sure you want to delete this record?</h3>
                <button onClick={() => this.handleDelete()} className="modal-button-delete">Delete This Record</button>
            </div>
        );       
    }
}

const mapStateToProps = state => ({ 
    selectedTime: state.selectedTime, 
    selectedDay: state.selectedDay, 
}); 

export default connect(mapStateToProps)(FormDelete); 

