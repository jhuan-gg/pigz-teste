
const FormularioTwo = () => {
    return (
        <div >
            <form id='login'>
              
              <h1  className='fonte ksfl'>Onde fica a sua loja?</h1>
            
            
              <p className='fontone skfsj lssd'>CEP</p>
              <input type="number" placeholder='00000-00' name="nome" className='imputnome texto aljnd' />
            
                <div className="ksacjl">
                    <div>
                    <p className='fontone skfsj kugkl'>Estado</p>
                    <input type="text" placeholder='UF' name='email' className='inputemail texto sçkf' />
                    </div>
                    <div>
                    <p className='fontone skfsj jhvjy'>Cidade</p>
                    <input type="text" placeholder='Selecione' name='email' className='inputemail texto cjskn' />
                    </div>            
              </div>
            
              <p className='fontone skfsj kugkl'>Endereço</p>
              <input type="text" id='phone' placeholder="Avenida Brasil" name='phone' className='inputnumero texto' />
            
              <div className="ksacjl">
                    <div>
                    <p className='fontone skfsj kugkl'>Número</p>
                    <input type="text" placeholder='123' name='email' className='inputemail texto sçkf' />
                    </div>
                    <div>
                    <p className='fontone skfsj jhvjy'>Complemento</p>
                    <input type="text" placeholder='Sala 1' name='email' className='inputemail texto cjskn' />
                    </div>            
              </div>
            
            </form>
        </div>
    )
}



export default FormularioTwo