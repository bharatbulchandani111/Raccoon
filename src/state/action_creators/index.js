export const addWatchList = (list) => {
        return (dispatch)=>{
            dispatch({
                type : 'add',
                payload : list
            })
        }
}

export const removeWatchList = (list) => {
    return (dispatch)=>{
        dispatch({
            type : 'remove',
            payload : list
        })
    }
}