import { 
    TOGGLE_MODAL,
    TOGGLE_ABOUT,
    SET_MODAL_CONTENT, 
    SET_DAYS, 
    SET_SELECTED_TIME, 
    SET_SELECTED_DAY, 
    SET_SELECTED_TITLE, 
    SET_SELECTED_TYPE, 
    STORE_IMAGE,
    FOCUS_DAY
} from '../actions/main'; 


export const initialState = {
    modalActivated: false, 
    modalContent: null,
    selectedTime: null, 
    selectedDay: null,
    selectedTitle: null, 
    selectedType: null,
    originalImage: null, 
    focusDay: null, 
    aboutActivated: false, 
    days: [
        {
            day: 'Sunday', 
            slots: [
                {time: '12:00am', event: null}, {time: '1:00am', event: null}, {time: '2:00am', event: null}, {time: '3:00am', event: null}, 
                {time: '4:00am', event: null}, {time: '5:00am', event: null}, {time: '6:00am', event: null}, {time: '7:00am', event: null}, 
                {time: '8:00am', event: null}, {time: '9:00am', event: null}, {time: '10:00am', event: null}, {time: '11:00am', event: null}, 
                {time: '12:00pm', event: null}, {time: '1:00pm', event: null}, {time: '2:00pm', event: null}, {time: '3:00pm', event: null}, 
                {time: '4:00pm', event: null}, {time: '5:00pm', event: null}, {time: '6:00pm', event: null}, {time: '7:00pm', event: null}, 
                {time: '8:00pm', event: null}, {time: '9:00pm', event: null}, {time: '10:00pm', event: null}, {time: '11:00pm', event: null}, 
            ]
        },
        {
            day: 'Monday', 
            slots: [
                {time: '12:00am', event: null}, {time: '1:00am', event: null}, {time: '2:00am', event: null}, {time: '3:00am', event: null}, 
                {time: '4:00am', event: null}, {time: '5:00am', event: null}, {time: '6:00am', event: null}, {time: '7:00am', event: null}, 
                {time: '8:00am', event: null}, {time: '9:00am', event: null}, {time: '10:00am', event: null}, {time: '11:00am', event: null}, 
                {time: '12:00pm', event: null}, {time: '1:00pm', event: null}, {time: '2:00pm', event: null}, {time: '3:00pm', event: null}, 
                {time: '4:00pm', event: null}, {time: '5:00pm', event: null}, {time: '6:00pm', event: null}, {time: '7:00pm', event: null}, 
                {time: '8:00pm', event: null}, {time: '9:00pm', event: null}, {time: '10:00pm', event: null}, {time: '11:00pm', event: null}, 
            ]
        },
        {
            day: 'Tuesday', 
            slots: [
                {time: '12:00am', event: null}, {time: '1:00am', event: null}, {time: '2:00am', event: null}, {time: '3:00am', event: null}, 
                {time: '4:00am', event: null}, {time: '5:00am', event: null}, {time: '6:00am', event: null}, {time: '7:00am', event: null}, 
                {time: '8:00am', event: null}, {time: '9:00am', event: null}, {time: '10:00am', event: null}, {time: '11:00am', event: null}, 
                {time: '12:00pm', event: null}, {time: '1:00pm', event: null}, {time: '2:00pm', event: null}, {time: '3:00pm', event: null}, 
                {time: '4:00pm', event: null}, {time: '5:00pm', event: null}, {time: '6:00pm', event: null}, {time: '7:00pm', event: null}, 
                {time: '8:00pm', event: null}, {time: '9:00pm', event: null}, {time: '10:00pm', event: null}, {time: '11:00pm', event: null}, 
            ]
        },
        {
            day: 'Wednesday', 
            slots: [
                {time: '12:00am', event: null}, {time: '1:00am', event: null}, {time: '2:00am', event: null}, {time: '3:00am', event: null}, 
                {time: '4:00am', event: null}, {time: '5:00am', event: null}, {time: '6:00am', event: null}, {time: '7:00am', event: null}, 
                {time: '8:00am', event: null}, {time: '9:00am', event: null}, {time: '10:00am', event: null}, {time: '11:00am', event: null}, 
                {time: '12:00pm', event: null}, {time: '1:00pm', event: null}, {time: '2:00pm', event: null}, {time: '3:00pm', event: null}, 
                {time: '4:00pm', event: null}, {time: '5:00pm', event: null}, {time: '6:00pm', event: null}, {time: '7:00pm', event: null}, 
                {time: '8:00pm', event: null}, {time: '9:00pm', event: null}, {time: '10:00pm', event: null}, {time: '11:00pm', event: null}, 
            ]
        },
        {
            day: 'Thursday', 
            slots: [
                {time: '12:00am', event: null}, {time: '1:00am', event: null}, {time: '2:00am', event: null}, {time: '3:00am', event: null}, 
                {time: '4:00am', event: null}, {time: '5:00am', event: null}, {time: '6:00am', event: null}, {time: '7:00am', event: null}, 
                {time: '8:00am', event: null}, {time: '9:00am', event: null}, {time: '10:00am', event: null}, {time: '11:00am', event: null}, 
                {time: '12:00pm', event: null}, {time: '1:00pm', event: null}, {time: '2:00pm', event: null}, {time: '3:00pm', event: null}, 
                {time: '4:00pm', event: null}, {time: '5:00pm', event: null}, {time: '6:00pm', event: null}, {time: '7:00pm', event: null}, 
                {time: '8:00pm', event: null}, {time: '9:00pm', event: null}, {time: '10:00pm', event: null}, {time: '11:00pm', event: null}, 
            ]
        },
        {
            day: 'Friday', 
            slots: [
                {time: '12:00am', event: null}, {time: '1:00am', event: null}, {time: '2:00am', event: null}, {time: '3:00am', event: null}, 
                {time: '4:00am', event: null}, {time: '5:00am', event: null}, {time: '6:00am', event: null}, {time: '7:00am', event: null}, 
                {time: '8:00am', event: null}, {time: '9:00am', event: null}, {time: '10:00am', event: null}, {time: '11:00am', event: null}, 
                {time: '12:00pm', event: null}, {time: '1:00pm', event: null}, {time: '2:00pm', event: null}, {time: '3:00pm', event: null}, 
                {time: '4:00pm', event: null}, {time: '5:00pm', event: null}, {time: '6:00pm', event: null}, {time: '7:00pm', event: null}, 
                {time: '8:00pm', event: null}, {time: '9:00pm', event: null}, {time: '10:00pm', event: null}, {time: '11:00pm', event: null}, 
            ]
        },
        {
            day: 'Saturday', 
            slots: [
                {time: '12:00am', event: null}, {time: '1:00am', event: null}, {time: '2:00am', event: null}, {time: '3:00am', event: null}, 
                {time: '4:00am', event: null}, {time: '5:00am', event: null}, {time: '6:00am', event: null}, {time: '7:00am', event: null}, 
                {time: '8:00am', event: null}, {time: '9:00am', event: null}, {time: '10:00am', event: null}, {time: '11:00am', event: null}, 
                {time: '12:00pm', event: null}, {time: '1:00pm', event: null}, {time: '2:00pm', event: null}, {time: '3:00pm', event: null}, 
                {time: '4:00pm', event: null}, {time: '5:00pm', event: null}, {time: '6:00pm', event: null}, {time: '7:00pm', event: null}, 
                {time: '8:00pm', event: null}, {time: '9:00pm', event: null}, {time: '10:00pm', event: null}, {time: '11:00pm', event: null}, 
            ]
        }
    ]
}


export const reducer = (state=initialState, action) => {
    if(action.type === TOGGLE_MODAL) {
        return Object.assign({}, state, {
            modalActivated: !state.modalActivated
        });  
    }
    else if (action.type === SET_MODAL_CONTENT) {
        return Object.assign({}, state, {
            modalContent: action.content
        }); 
    }

    else if (action.type === SET_DAYS) {
        return Object.assign({}, state, {
            days: action.days
        });
    }
    else if (action.type === SET_SELECTED_TIME) {
        return Object.assign({}, state, {
            selectedTime: action.time
        }); 
    }
    else if (action.type === SET_SELECTED_DAY) {
        return Object.assign({}, state, {
            selectedDay: action.day
        }); 
    }
    else if (action.type === SET_SELECTED_TITLE) {
        return Object.assign({}, state, {
            selectedTitle: action.title
        }); 
    }
    else if (action.type === SET_SELECTED_TYPE) {
        return Object.assign({}, state, {
            selectedType: action.eventType
        }); 
    }
    else if (action.type === STORE_IMAGE) {
        return Object.assign({}, state, {
            originalImage: {
                time: state.selectedTime, 
                day: state.selectedDay, 
                title: state.selectedTitle, 
                eventType: state.selectedType
            }
        });
    }
    else if (action.type === FOCUS_DAY) {
        return Object.assign({}, state, {
            focusDay: action.day
        }); 
    }
    else if(action.type === TOGGLE_ABOUT) {
        return Object.assign({}, state, {
            aboutActivated: !state.aboutActivated
        }); 
    }
    return state; 
}