
import CardAnimation from './CardAnimation'
import { Button } from './ui/button'
import { TextAnimate } from './ui/text-animate'

const Main = () => {
  return (
    <div className='flex  justify-center gap-42 bg-bgMain items-center '>
    <div>
  <TextAnimate className='text-white text-6xl max-w-[700px]'  animation='scaleUp'>Sua jornada financeira começa aqui. Simples, segura </TextAnimate>
  <TextAnimate className='text-green-500 text-6xl max-w-[700px] font-bold mt-8' animation='slideLeft'>e sem complicações.</TextAnimate>
  <div className='items-center flex gap-5 mt-10'>
        <Button  className='bg-zinc-950 w-48 text-xl bg-green-400 text-zinc-950 p-6 hover:text-green-400 '>Criar Conta</Button>
        <Button className='bg-zinc-950 w-48 text-xl bg-white hover:bg-slate-400 text-zinc-950 p-6 '>Ler mais</Button>

      </div>
    </div>
    <div>
    <CardAnimation></CardAnimation>
    </div>
    </div>
  )
}

export default Main
