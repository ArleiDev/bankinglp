
import{ useEffect } from 'react';
import ScrollReveal from 'scrollreveal'
import { ShieldPlus } from 'lucide-react';

const SegurancaeConfianca = () => {

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
    <div className="bg-black flex flex-wrap items-center justify-center py-32 pt-32 text-white relative">
      <div className="flex justify-center sm:justify-start  text-center sm:text-left flex-wrap gap-40">
        <div>
          <h1 className='reveal flex text-4xl  max-w-96 '>
            Nossa segurança segue os mais altos padrões internacionais,
            garantindo tranquilidade total.
          </h1>
        </div>
        <div className='reveal'>
            <ShieldPlus color='#4ade80' size={200} ></ShieldPlus>
        </div>
      </div>
    </div>
  );
};

export default SegurancaeConfianca;
