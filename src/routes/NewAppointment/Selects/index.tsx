import { ChangeEvent } from 'react';

interface SelectProps {
  handleAddAppointment: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

const Selects: React.FC<SelectProps> = ({handleAddAppointment}) => {

  return (
    <>
      <div className="containers">
        <label>Barbeiro</label>
        <select id='barber' onChange={handleAddAppointment}>
          <option disabled selected>Escolha um barbeiro...</option>
          <option value='Rex'>Rex</option>
          <option value='Ronaldo'>Ronaldo</option>
        </select>
      </div>

      <div className="containers">
        <label>Corte</label>
        <select id='cut' onChange={handleAddAppointment}>
          <option disabled selected>Escolha um corte...</option>
          <option value='Corte simples'>Corte simples</option>
          <option value='Corte Padrão'>Corte Padrão</option>
          <option value='Corte + barba'>Corte + barba</option>
          <option value='Corte + pigmento'>Corte + pigmento</option>
        </select>
      </div>

      <div className="containers">
        <label>Adicionais</label>
        <select id='add' onChange={handleAddAppointment}>
          <option disabled selected>Escolha um adicional...</option>
          <option value='Nenhum'>Nenhum</option>
          <option value='Barba'>Barba</option>
          <option value='Pezinho'>Pezinho</option>
          <option value='Sombrancelha'>Sombrancelha</option>
          <option value='Luzes'>Luzes</option>
          <option value='Pigmento sombrancelha'>Pigmento sombrancelha</option>
          <option value='Pigmento barba'>Pigmento barba</option>
          <option value='Risquinho'>Risquinho</option>
          <option value='Desenho'>Desenho</option>
        </select>
      </div>

      <div className="containers">
        <label>Horário</label>
        <select id='hour' onChange={handleAddAppointment}>
          <option disabled selected>Escolha um horário...</option>
          <option value='08:00'>08:00</option>
          <option value='08:30'>08:30</option>
          <option value='09:00'>09:00</option>
          <option value='09:30'>09:30</option>
          <option value='10:00'>10:00</option>
          <option value='10:30'>10:30</option>
          <option value='11:00'>11:00</option>
          <option value='11:30'>11:30</option>
          <option value='13:00'>13:00</option>
          <option value='13:30'>13:30</option>
          <option value='14:00'>14:00</option>
          <option value='14:30'>14:30</option>
          <option value='15:00'>15:00</option>
          <option value='15:30'>15:30</option>
          <option value='16:00'>16:00</option>
          <option value='16:30'>16:30</option>
          <option value='17:00'>17:00</option>
          <option value='17:30'>17:30</option>
          <option value='18:00'>18:00</option>
          <option value='18:30'>18:30</option>
        </select>
      </div>
    </>
  )
}

export default Selects