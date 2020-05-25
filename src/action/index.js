let nextTodoId = 0
export const setAddValue = text => ({
    type: 'SET_ADDVALUE',
    id: nextTodoId++,
    text
})
export const changeAddValue = text => ({
    type: 'CHANGE_VALUE',
    id: nextTodoId++,
    text
})
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})
export const deteteItem = id => ({
    type: 'DELETE_ITEM',
    id: id
})