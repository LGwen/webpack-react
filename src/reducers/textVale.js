const textvalue = (state = {text:0}, action) => {
    switch (action.type) {
        case 'SET_ADDVALUE':
            return {
                id: action.id,
                text: action.text+state.text,
            };
        case 'CHANGE_VALUE':
            return {
                id: action.id,
                text: action.text,
            };
        default:
            return state
    }
}
export default textvalue;