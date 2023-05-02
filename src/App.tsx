// import { useState} from 'react';

interface UserProps {
  name: string;

}

function App() {

  const user: UserProps = {
    name: 'Ricardo',
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `Corte marcado de ${user.name}`,
        text: ` Dia: 02/05 || Horario: 14h30 || Corte: Navalhado || Valor: R$30,00`,
        url: 'https://github.com/gevolgdev',
      })
    } catch (err) {
      console.log('O compartilhamento falhou!' + err);
    }
  }

  return (
    <>
      <button onClick={handleShare}>Compartilhar</button>
    </>
  )
}

export default App
