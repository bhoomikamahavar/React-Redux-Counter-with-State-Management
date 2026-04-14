const initialState = 100;
const incDecReducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return state + 1;
    } else if (action.type === "DECREMENT") {
        return state - 1;
    } else if (action.type === "RESET") {
        return initialState;
    }
    return state;
}
export default incDecReducer;