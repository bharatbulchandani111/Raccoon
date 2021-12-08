const reducer = (state=[], action) => {
    if(action.type==='add')
    {
        return [...state,action.payload]
    }
    else if(action.type==='remove')
    {
        var index = state.findIndex(function(o){
            return o.id === action.payload.id;
       })
       if (index !== -1) 
       state.splice(index, 1);
        return state;
    }
    else
    {
        return state;
    }
}

export default reducer;