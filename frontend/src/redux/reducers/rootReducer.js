import { combineReducers } from 'redux';
import { adminReducer } from "./adminReducer";
import { dentistryReducer } from './dentistryReducer';

export const rootReducer = combineReducers({
  adminReducer, dentistryReducer
})
