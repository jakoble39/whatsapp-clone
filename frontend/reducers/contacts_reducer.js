import {
    RECEIVE_CONTACTS,
    RECEIVE_CONTACT,
    REMOVE_CONTACT
} from '../actions/contact_actions'

const ContactsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CONTACTS:
            return action.contacts;
        default:
            return oldState;
    }
};

export default ContactsReducer;