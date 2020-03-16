import moment from "moment";

export const initialState = {
    toDoItems: [
        {
        item: "Walk the dog",
        completed: false,
        id: moment(1584397186647).format('MMMM Do YYYY, h:mm:ss')
    },
    {
        item: "Do the laundry",
        completed: false,
        id: moment(1584597186748).format('MMMM Do YYYY, h:mm:ss')
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
                    id: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss')
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