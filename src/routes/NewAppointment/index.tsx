import { ChangeEvent, MouseEvent, useState } from 'react';
import { Header } from '../../components';
import Selects from './Selects';
import * as S from './style';
import { AppointmentProps } from '../../types/types';
import { useDispatch } from 'react-redux';
import { newAppointmentReducer } from '../../redux/slices/appointmentSlice';
import { useNavigate } from 'react-router-dom';

const NewAppointment = () => {

  const INITIAL_STATE = {name: '', barber: '', cut: '', add: '', hour: ''}
  const [appointment, setAppointment] = useState<AppointmentProps>(INITIAL_STATE);
  console.log(appointment);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddAppointment = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { id, value } = event.target;
    setAppointment(prev => ({...prev, [id]: value}));
  };

  const handleConfirm = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    dispatch(newAppointmentReducer(appointment))
    navigate('/confirmar');
  };

  return (
    <S.Wrapper>
      <Header/>

      <S.Forms>
        <S.Title>Marcar Horario:</S.Title>
        <div className="containers">
          <label>Seu nome</label>
          <input type='text' id='name' onChange={handleAddAppointment}/>
        </div>
        <Selects handleAddAppointment={handleAddAppointment}/>
        <button onClick={handleConfirm}>Confirmar</button>
      </S.Forms>

    </S.Wrapper>
  )
}

export default NewAppointment