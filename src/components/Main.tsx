
import CardAnimation from './CardAnimation'
import { TextAnimate } from './ui/text-animate'
const Main = () => {
  return (
    <div className='flex justify-center gap-42 items-center'>
    <div>
  <TextAnimate className='text-white text-6xl max-w-[700px]'  animation='scaleUp'>Sua jornada financeira começa aqui. Simples, segura </TextAnimate>
  <TextAnimate className='text-green-500 text-6xl max-w-[700px] font-bold mt-8' animation='slideLeft'>e sem complicações.</TextAnimate>
    </div>
    <div>
    <CardAnimation></CardAnimation>
    </div>
    </div>
  )
}

export default Main
