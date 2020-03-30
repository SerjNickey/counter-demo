import { createRoutine } from 'redux-saga-routines';
import * as constants from '../utils/constants/counterConstants';
import { createAction } from 'redux-actions';


export const add = createAction(constants.ADD, payload => payload);
export const sub = createAction(constants.SUB, payload => payload);


export const addAsync = createRoutine(constants.ADD_ASYNC);
export const subAsync = createRoutine(constants.SUB_ASYNC);