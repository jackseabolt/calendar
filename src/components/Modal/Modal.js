import React from 'react'; 
import { connect } from 'react-redux';  
import { Transition } from 'react-transition-group'; 
import FormNew from '../FormNew';  
import FormDelete from '../FormDelete'; 
import FormRead from '../FormRead'; 
import FormEdit from '../FormEdit'; 
import { 
    toggleModal, 
    setModalContent, 
} from '../../actions/main';  
import './Modal.css'; 
import 'react-dropdown/style.css'

export class Modal extends React.Component {

    handleClose() {
        this.props.dispatch(toggleModal());
        this.props.dispatch(setModalContent(null)); 
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

        // select proper form for display
        let content; 
        if(this.props.modalContent === 'new') {
            content = <FormNew />
        }
        else if(this.props.modalContent === 'delete') {
            content = <FormDelete />
        } 
        else if(this.props.modalContent === 'read') {
            content = <FormRead />
        }
        else if(this.props.modalContent === 'edit') {
            content = <FormEdit />
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
        );       
    }
}

const mapStateToProps = state => ({
    modalContent: state.modalContent, 
}); 

export default connect(mapStateToProps)(Modal); 

