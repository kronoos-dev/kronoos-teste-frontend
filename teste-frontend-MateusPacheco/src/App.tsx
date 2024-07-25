import './App.css'
import { Accordion } from './stories/Accordion'
import { Cookies } from './stories/Cookies'
import { Modal } from './stories/Modal'

function App() {

  return (
    <>
      <Accordion darkMode question1='Pergunta 1' question2='Pergunta 2' question3='Pergunta 3' answer1='Resposta 1' answer2='Resposta 2' answer3='Resposta 3' />
      <div className='h-10' />
      <Cookies placement='fixed' darkMode label='Você aceita os cookies para que possamos melhorar o nosso site?' />
      <div className='h-10' />
      <Modal message={'Aviso! Modal aberto!'} />
    </>
  )
}

export default App
