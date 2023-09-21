import React from 'react'
import { useId, useState } from 'react'
import './App.css'

function App() {
  const [myHobbies, setMyHobbies] = useState(() => ['Хоккей', 'Высокоточная вёрстка под старые версии Microsoft Internet Explorer, начиная с версии 5.01'])
  const [friendHobbies] = useState(() => [['Баскетбол', false], ['Нарезка Photoshop/Fireworks макетов на скорость, в экстримельных условиях, на природе', false]])

  console.log(myHobbies)
  return (
    <>
      <h1>О себе</h1>
      <div className='hobbi'>
        <h2>Хобби</h2>
        <div className='line'></div>
      </div>
      
      <div className='list'>
      <input placeholder='Введите текст' type='text' onKeyDown={(e) => {
        if(e.key === 'Enter' && !myHobbies.includes(e.target.value)) {
          setMyHobbies((state) => [...state, e.target.value])
        }
      }}/>
      {myHobbies.length ? 
        myHobbies.map((el, index) => (
          <div className='list-item' key={index}>
            <button className='delete-btn' onClick={() => {
              const updatedHobbies = [...myHobbies];
              updatedHobbies.splice(index, 1);
              setMyHobbies(updatedHobbies);
            }}>
            </button>
            <p className='list-item--element'>{el}</p>
          </div>
        )) 
        : null}
      <button className='displayMore-btn'>Ещё 3 интереса</button>
      </div>
      <h1>Интересы друга</h1>
      <div className='hobbi'>
        <h2>Хобби</h2>
        <div className='line'></div>
      </div>
      <div className='list'>
        {friendHobbies.length ? 
        friendHobbies.map((el, index) => (
          <div className='list-item' key={index}>
            <button className='add-btn' onClick={() => {
              el[1] = true
              setMyHobbies((state) => [...state, el])
            }}>
            </button>
            <p className='list-item--element'>{el[0]}</p>
            {el[1] ? <p className='addMessage'>Добавлено в ваши увлечения</p> : null}
            <button className='complain-btn' onClick={() => prompt('Расскажите о проблеме ниже', '')}>Пожаловаться</button>
          </div>
        ))  : null}
        <button className='displayMore-btn'>Ещё 3 интереса</button>
      </div>
    </>
  )
}

export default App
