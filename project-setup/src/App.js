import { useEffect, useState } from "react"
import { CONSTANTS } from './constants'

function App() {
  const [title, setTitle] = useState(CONSTANTS.TITLE)
  const [name, setName] = useState(CONSTANTS.NAME)
  const [image, setImage] = useState('')
  const [randomNumber, setRandomNumber] = useState(1)

  function getUser() {
    fetch("https://randomuser.me/api/").then(response => response.json()).then(data => {
      if (data.results.length > 0) {
        setTitle("Hello!")
        setName(data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last)
        setImage(data.results[0].picture.thumbnail)
      }
    }).catch(error => {
      console.log("error ", error)
    })
  }

  const onClickRandom = () => {
    setRandomNumber(randomNumber + 1)
  }

  useEffect(() => {
    if (randomNumber % 2 != 0) {
      getUser()
    }
  }, [randomNumber])

  return (
    <div>
      <h1>{title}</h1>
      {image !== "" && <img src={image} />}
      <h1>{name}</h1>
      <button onClick={onClickRandom}>
        {CONSTANTS.SUBMIT_BUTTON}
      </button>
    </div>
  );
}

export default App;
