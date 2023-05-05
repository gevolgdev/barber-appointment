import { Header } from "../../components";
import { useSelector } from 'react-redux';
import * as S from "./style";
import { RootState } from "../../redux/rootStore";
import { RiScissors2Line } from 'react-icons/ri';
import { HiPlusSm } from 'react-icons/hi';

const MyAppointments = () => {

  const myAppointments = useSelector((state: RootState) => state.appointmentSlice).slice(1);
  console.log(myAppointments)

  return (
    <S.Wrapper>
      <Header backToHome/>
      <S.Content>
        <span>Bem-vindo(a) {myAppointments[0]?.name}</span>
        <S.Title>Meus horários</S.Title>
        { myAppointments.length === 0 ? 
          <S.Nothing>Sem horários</S.Nothing>
          :
          <>{
            myAppointments.map((item) => (
              <div className="card-appointment">
                <div className="infos">
                  <span className="barber-title">Barbeiro: {item.barber}</span>
                  <h1 className="cut-title"><RiScissors2Line/> {item.cut}</h1>
                  <h1 className="add-title"><HiPlusSm/> {item.add}</h1>
                </div>
                <div className="date">
                  <span className="day-title">{item.day}</span>
                  <span className="hour-title">{item.hour}</span>
                </div>
              </div>
            ))
          }</>
        }
      </S.Content>
    </S.Wrapper>
  )
}

export default MyAppointments