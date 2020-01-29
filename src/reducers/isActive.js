import {CHANGE_ACTIVE} from "../constants";

const isActive = (state = false, {type, status}) => {
    switch (type) {
        case CHANGE_ACTIVE:
            return status;
        default:
            return state;
    }
};

export default isActive;
