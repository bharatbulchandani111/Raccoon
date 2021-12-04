const reducer = (state=[], action) => {
    if(action.type==='add')
    {
        return [...state,action.payload]
    }
    else if(action.type==='remove')
    {
        return state
    }
    else
    {
        return state;
    }
}

export default reducer;