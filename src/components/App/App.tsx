import { useEffect } from 'react'
import { Header } from '../../layout/Header'
import { Main } from '../../layout/Main'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setObjects } from '../../store/objectSlice'

function App() {

  let urls = [
    "https://634985b85df95285140201ce.mockapi.io/gaz/documents1",
    "https://634985b85df95285140201ce.mockapi.io/gaz/documents2"
  ];

  const requests = urls.map((url) => axios.get(url));

  const dispatch = useDispatch()

  useEffect(() => {
    let objects: any[] = []
    axios.all<any>(requests).then((responses) => {
      responses.forEach(el => objects = objects.concat(el.data))
      dispatch(setObjects(objects));
    });
  },
    []);

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
