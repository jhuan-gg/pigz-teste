import FormularioOne from "./FormularioOne"
import FormularioTwo from "./FormularioTwo"
import FormularioTree from "./FormularioTree"
import { useState } from "react"

const SetFormulario = () => {
    
    const D1 = () => (
        <div>
            <FormularioOne />
        </div>
      );
      
      const D2 = () => (
        <div>
            <FormularioTwo />
        </div>
      );
      
      const D3 = () => (
        <div>
            <FormularioTree />
        </div>
      );
    
      const [formularioAtual, setFormularioAtual] = useState(0);

    
    return (
        <div className="formulario">

            {formularioAtual === 0 && <D1 />}
            {formularioAtual === 1 && <D2 />}
            {formularioAtual === 2 && <D3 />}

            <button onClick={() => {setFormularioAtual(formularioAtual + 1)}} id="botaoContinuar" className='buttoncontinue'>continuar</button>

        </div>
    )
}

export default SetFormulario