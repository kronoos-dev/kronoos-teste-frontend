import './App.css'
import { Accordion } from './stories/Accordion'
import { Cookies } from './stories/Cookies'
import { Modal } from './stories/Modal'
import { Tabs } from './stories/Tabs'

function App() {

  return (
    <>
      <Accordion darkMode question1='Pergunta 1' question2='Pergunta 2' question3='Pergunta 3' answer1='Resposta 1' answer2='Resposta 2' answer3='Resposta 3' />
      <div className='h-10' />
      <Cookies darkMode placement='fixed' label='Você aceita os cookies para que possamos melhorar o nosso site?' />
      <div className='h-10' />
      <Modal darkMode videoUrl='https://www.youtube.com/watch?v=Na0w3Mz46GA' message='Youtube Video' />
      <div className='h-10' />
      <Tabs tab1='Tab 1' tab2='Tab 2' tab1Content='Conteúdo da aba 1' tab2Content='Conteúdo da aba 2' />
    </>
  )
}

export default App
