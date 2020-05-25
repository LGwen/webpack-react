const todoList = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            state.push({
                id: action.id,
                text: action.text,
            })
            return state;
        case 'DELETE_ITEM':
            return state.filter(s => s.id != action.id)
        default:
            return state
    }
}
export default todoList;