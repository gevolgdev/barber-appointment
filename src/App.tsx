import { useState, useEffect} from 'react';

function App() {

  const [data, setData] = useState(0)

  const getData = async () => {
    const response = await fetch('https://api.sampleapis.com/coffee/iced');
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(data)

  return (
    <>
      <h1>Salve</h1>
    </>
  )
}

export default App
