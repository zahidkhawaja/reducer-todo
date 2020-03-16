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
        id: 893849273482
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
        case "MARK_COMPLETED":
            return {
                ...state,
                toDoItems: [
                    ...state.toDoItems,
                    {
                        ...state.toDoItems.map(task => {
                            if(task.id == action.payload.id) {
                                task.completed = !action.payload.completed;
                            }
                        })
                    }
                ]
            }

        case "REMOVE_COMPLETED":
            return {
                ...state,
                toDoItems: [
                    ...state.toDoItems.filter(task => {
                        return task.completed == false;
                    })
                ]
                    

            }
            
        default: 
            return state;
    }
}