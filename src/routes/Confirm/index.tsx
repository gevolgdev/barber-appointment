import { Header } from "../../components";
import { RootState } from "../../redux/rootStore";
import { AppointmentProps } from "../../types/types";
import * as S from "./style";
import { useSelector } from 'react-redux';

const Confirm = () => {

  const userAppointment: AppointmentProps[] = useSelector((state: RootState) => state.appointmentSlice).slice(1);
  const appointmentToConfirm: AppointmentProps | null = userAppointment[userAppointment.length - 1];

  const infosAppointment: string = `Me chamo ${appointmentToConfirm.name} ||  Cortar com ${appointmentToConfirm.barber} || ás ${appointmentToConfirm.hour} || Meu corte será ${appointmentToConfirm.cut} || e ${appointmentToConfirm.add} adicional.`;
  const textToWpp: string = infosAppointment.replace(/ /g, '%20')
  const sendMessage: string = `https://wa.me/5519984397784?text=${textToWpp}`

  // const handleClickToConfirm = (): void => {

  // }

  return (
    <S.Wrapper>
      <Header/>
      <S.Title>Confirmar</S.Title>
      <S.Infos>
        <p>
          <strong>Seu nome:</strong> {appointmentToConfirm?.name}
        </p>
        <p>
          <strong>Barbeiro:</strong> {appointmentToConfirm?.barber}
        </p>
        <p>
          <strong>Corte:</strong> {appointmentToConfirm?.cut}
        </p>
        <p>
          <strong>Adicionais:</strong> {appointmentToConfirm?.add}
        </p>
        <p>
          <strong>Horário:</strong> {appointmentToConfirm?.hour}
        </p>
      </S.Infos>
      {/* <S.Button onClick={handleClickToConfirm}>Marcar</S.Button> */}
      <S.ButtonLink href={sendMessage} target="blank">Marcar</S.ButtonLink>
    </S.Wrapper>
  )
};

export default Confirm;