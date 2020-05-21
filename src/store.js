import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import promise from "redux-promise"
import thunk from "redux-thunk"
import { persistReducer } from 'redux-persist'  
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { login,table,froms} from "@/reducer"
const rootPersistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['login','table','froms'],  
}
const myPersistReducer = persistReducer(
  rootPersistConfig,
  combineReducers({
    login,
    table,
    froms,
  }
))
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  myPersistReducer,
  composeEnhancers(applyMiddleware(promise,thunk))
)
export {store}