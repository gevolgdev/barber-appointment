import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppointmentProps } from '../../types/types';


const initialState: AppointmentProps[] = [{
  name: '',
  barber: '',
  cut: '',
  add: '',
  hour: '',
}];

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    newAppointment: (state, {payload}: PayloadAction<AppointmentProps>): AppointmentProps[] => {
      return [
        ...state,
        {
          name: payload.name,
          barber: payload.barber,
          cut: payload.cut,
          add: payload.add,
          hour: payload.hour
        }
      ];
    }
  }
});

export default appointmentSlice.reducer;
export const { newAppointment } = appointmentSlice.actions;

