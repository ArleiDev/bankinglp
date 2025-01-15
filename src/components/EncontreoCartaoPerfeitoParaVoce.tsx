
import{ useEffect } from 'react';
import ScrollReveal from 'scrollreveal'
import card1 from '@/assets/imgs/card1.png'
import card2 from '@/assets/imgs/card2.png'
import card3 from '@/assets/imgs/card3.png'

import TiltCard from '@/components/ui/TiltCard'
const EncontreoCartaoPerfeitoParaVoce = () => {

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom', // Origem da animação
          distance: '50px', // Distância do movimento
          duration: 1000,   // Duração da animação em milissegundos
          delay: 200,       // Atraso antes de iniciar
          reset: true,      // Repetir animação ao voltar ao scroll
        });
    
        sr.reveal('.reveal', {
          interval: 200, // Intervalo entre os elementos animados
        });
      }, []);


  return (
    <div className="bg-black flex items-center justify-center py-10 text-white relative">
      <div className="flex flex-col gap-40">
        <div>
          <h1 className='reveal text-4xl max-w-[1000px] text-center mt-20 mb-5 items-center '>
          Conquiste a liberdade financeira que você merece. Nossos cartões oferecem 
          benefícios excepcionais, recompensas exclusivas e muito mais.
          </h1>
        </div>
        <div className='flex gap-5 items-center justify-center'>
        <TiltCard bgImg={card1} ></TiltCard>
        <TiltCard bgImg={card2} ></TiltCard>
        <TiltCard bgImg={card3} ></TiltCard>
        </div>
      </div>
    </div>
  );
};

export default EncontreoCartaoPerfeitoParaVoce;
