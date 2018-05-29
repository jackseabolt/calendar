export const TOGGLE_MODAL = 'TOGGLE_MODAL'; 
export const toggleModal = () => ({
    type: TOGGLE_MODAL
}); 

export const SET_MODAL_CONTENT = 'SET_MODAL_CONTENT'; 
export const setModalContent = content => ({
    type: SET_MODAL_CONTENT, 
    content
}); 

export const SET_SELECTED_TIME = 'SET_SELECTED_TIME'; 
export const setSelectedTime = time => ({
    type: SET_SELECTED_TIME, 
    time
}); 

export const SET_SELECTED_DAY = 'SET_SELECTED_DAY'; 
export const setSelectedDay = day => ({
    type: SET_SELECTED_DAY, 
    day
}); 

export const SET_SELECTED_TITLE = 'SET_SELECTED_TITLE'; 
export const setSelectedTitle = title => ({
    type: SET_SELECTED_TITLE, 
    title
}); 

export const SET_SELECTED_TYPE = 'SET_SELECTED_TYPE'; 
export const setSelectedType = eventType => ({
    type: SET_SELECTED_TYPE, 
    eventType
}); 

export const STORE_IMAGE = 'STORE_IMAGE'; 
export const storeImage = () => ({
    type: STORE_IMAGE
}); 

export const FOCUS_DAY = 'FOCUS_DAY'; 
export const focusDay = day => ({
    type: FOCUS_DAY, 
    day
}); 

export const ADD_EVENT = 'ADD_EVENT'; 
export const addEvent = (title, time, day, eventType) => dispatch => {
    return fetch(`https://seabolt-calendar-api.herokuapp.com/event`, {
        method: 'POST', 
        body: JSON.stringify({
            title, 
            time, 
            day, 
            eventType
        }), 
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(() => {
        dispatch(getAllDays())
    })
    .catch(err => console.error(err)); 
}

export const DELETE_EVENT = 'DELETE_EVENT'; 
export const deleteEvent = (day, time) => dispatch => {
    return fetch(`https://seabolt-calendar-api.herokuapp.com/delete-event`, {
        method: 'POST', 
        body: JSON.stringify({
            day, time
        }), 
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(() => {
        dispatch(getAllDays())
    })
    .catch(err => console.error(err)); 
}

export const GET_ALL_DAYS = 'GET_ALL_DAYS'; 
export const getAllDays = () => dispatch => {
    return fetch(`https://seabolt-calendar-api.herokuapp.com/days`)
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText)
            }
            return res.json(); 
        })
        .then(data => {
            dispatch(setDays(data))
        })
        .catch(err => console.error(err));
}

export const SET_DAYS = 'SET_DAYS'; 
export const setDays = days => ({
    type: SET_DAYS, 
    days
});