import { combineReducers } from "redux";
import watchReducer from './watchlistred';

const reducers = combineReducers({
    list : watchReducer
})

export default reducers;