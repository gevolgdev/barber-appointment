import { combineReducers } from 'redux';
import appointmentSlice from './slices/appointmentSlice';


export const rootStore = combineReducers({
  appointmentSlice: appointmentSlice,
});

export type RootState = ReturnType<typeof rootStore>;