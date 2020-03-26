import { createRoutine } from 'redux-saga-routines'
import * as constants from '../utils/constants/counterConstants'


export const add = createRoutine(constants.ADD)
export const sub = createRoutine(constants.SUB)  