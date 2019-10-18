import { createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools} from 'redux-devtools-extension';
import inputsReducer from './inputsReducer';

const rootReducer = combineReducers ({
    inputsReducer
})

const composeEnhancers = composeWithDevTools({

})
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(promiseMiddleware)
))

export default store;