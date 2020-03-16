export const initialState = {
    toDoItems: [
        {
        item: "Walk the dog",
        completed: false,
        id: 74382374837
    },
    {
        item: "Do the laundry",
        completed: false,
        id: 74382374837
    }
],
    toggled: false,
    id: Date.now()
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK":
            return {
                ...state,
                toDoItems: [
                    ...state.toDoItems,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ]
            }
            
        default: 
            return state;
    }
}