import React from 'react'; 
import { connect } from 'react-redux'; 
import FormNew from '../FormNew';  
import FormDelete from '../FormDelete'; 
import { 
    setModalContent,  
    storeImage
} from '../../actions/main';  

export class FormRead extends React.Component {

    handleToggleDelete() {
        this.props.dispatch(setModalContent('delete')); 
    }

    handleToggleEdit() {
        this.props.dispatch(storeImage()); 
        this.props.dispatch(setModalContent('edit')); 
    }
 
    render() {  

        return ( 
            <div>
                <h2>Record Details</h2>
                <p><strong>Title: </strong>{this.props.selectedTitle}</p>
                <p><strong>Type: </strong>{this.props.selectedType}</p>
                <p><strong>Day: </strong>{this.props.selectedDay}</p>
                <p><strong>Time: </strong>{this.props.selectedTime}</p>
                <button onClick={() => this.handleToggleEdit()} className="modal-button-submit">Edit Event</button>
                <button onClick={() => this.handleToggleDelete()} className="modal-button-delete">Delete Event</button>
            </div>
        )      
    }
}

const mapStateToProps = state => ({
    selectedTime: state.selectedTime, 
    selectedDay: state.selectedDay, 
    selectedTitle: state.selectedTitle, 
    selectedType: state.selectedType, 
}); 

export default connect(mapStateToProps)(FormRead); 

