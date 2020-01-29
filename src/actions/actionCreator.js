import {CHANGE_ACTIVE} from "../constants";

export const changeActive = status => ({
    type: CHANGE_ACTIVE,
    status
});
