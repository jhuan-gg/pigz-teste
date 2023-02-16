
const FormularioOne = () => {
    


    return ( 
        <div className="">
            <form id='login'>
              
              <h1  className='fonte'>Quero vender no Pigz</h1>
              <p className='fontone ckjdsfc'>Dê o primeiro passo para aumentar suas vendas</p>
            
            
              <p className='fontone skfsj'>Nome</p>
              <input type="text" placeholder='digite seu nome' name="nome" className='imputnome texto' />
            
            
              <p className='fontone skfsj'>E-mail</p>
              <input type="text" placeholder='digite seu e-mail' name='email' className='inputemail texto' />
            
            
              <p className='fontone skfsj'>Telefone</p>
              <input type="tel" id='phone' placeholder="(XX) XXXXX-XXXX" name='phone' className='inputnumero texto' />
            
            
              <p className='fontep ckjdsfc'>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</p>
            
            </form>
        </div>
    )
}


export default FormularioOne