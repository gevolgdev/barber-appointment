import { ChangeEvent, MouseEvent, useState } from 'react';
import { Header } from '../../components';
import Selects from './Selects';
import * as S from './style';

interface AppointmentProps {
  name: string;
  barber: string;
  cut: string;
  add: string;
  hour: string;
}

const NewAppointment = () => {

  const INITIAL_STATE = {name: '', barber: '', cut: '', add: '', hour: ''}
  const [appointment, setAppointment] = useState<AppointmentProps>(INITIAL_STATE);
  console.log(appointment);

  const handleAddAppointment = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { id, value } = event.target;
    setAppointment(prev => ({...prev, [id]: value}));
  };

  const handleConfirm = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
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