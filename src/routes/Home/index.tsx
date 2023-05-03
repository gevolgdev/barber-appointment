import { Header } from '../../components';
import { useNavigate } from 'react-router-dom';
import { RiScissors2Line } from 'react-icons/ri';
import * as S from './style';

const Home = () => {

  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <Header/>
      <S.Content>
        <div className='infos'>
          <i><RiScissors2Line/></i>
          <h1>Marque seu horário com seu barbeiro de preferência!</h1>
          <p>Agora você consegue marcar um horário para cortar o seu cabelo/barba com mais facilidade e praticidade.</p>
          <div className="buttons">
            <button className='mark-hours' onClick={() => navigate('/marcar')}>Marcar horário</button>
            <button className='my-hours'>Meus horários</button>
          </div>
        </div>
      </S.Content>

    </S.Wrapper>
  )
}

export default Home;