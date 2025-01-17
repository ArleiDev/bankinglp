
import card1 from '/imgs/card1.png'
import card2 from '/imgs/card2.png'
import card3 from '/imgs/card3.png'

import TiltCard from '@/components/ui/TiltCard'
const EncontreoCartaoPerfeitoParaVoce = () => {



  return (
    <div className="bg-black flex flex-col items-center justify-center py-10 text-white relative">
      <div className="flex flex-col gap-40">
        <div>
          <h1 className=' text-4xl sm:max-w-[1000px] p-10 max-w-[700px] text-center mt-20 mb-5 items-center '>
          Conquiste a liberdade financeira que você merece. Nossos cartões oferecem 
          benefícios excepcionais, recompensas exclusivas e muito mais.
          </h1>
        </div>
        <div className='flex gap-5 flex-wrap items-center justify-center'>
        <TiltCard bgImg={card1} ></TiltCard>
        <TiltCard bgImg={card2} ></TiltCard>
        <TiltCard bgImg={card3} ></TiltCard>
        </div>
      </div>
     
    </div>
  );
};

export default EncontreoCartaoPerfeitoParaVoce;
