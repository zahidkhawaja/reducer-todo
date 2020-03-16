export const initialState = [
{
    item: "Walk the dog",
    completed: false,
    id: 74382374837
},
{
    item: "Buy milk",
    completed: false,
    id: 8439048329
},
{
    item: "Read the paper",
    completed: false,
    id: 8439048329
}
];

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK":
            return [
                ...state, 
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ]
            
        default: 
            return state;
    }
}