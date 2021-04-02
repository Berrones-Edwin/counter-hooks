export const functionReducer = (state = [], action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter((todo) => todo.id !== action.payload);

        default:
            return state;
    }
};
