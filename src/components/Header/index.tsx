import * as S from './style';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  backToHome?: boolean;
};

const Header: React.FC<HeaderProps> = ({backToHome = false}) => {

  const navigate = useNavigate();
  const handleClick = (): void => navigate('/');

  return (
    <S.Container>
      {backToHome && 
        <S.BackButton onClick={handleClick}><BsArrowLeftShort/> Voltar</S.BackButton>
      }
      <h1>
        GEVOLG
        <span>BARBER</span>
      </h1>
    </S.Container>
  )
};

export default Header;