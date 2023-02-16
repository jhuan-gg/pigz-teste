


const FormularioTree = () => {
    return (
        <div>
            <form id='login'>
            <h1  className='fonte'>Me conta um pouco sobre a sua loja</h1>            
            
              <p className='fontone skfsj kugkl'>Nome da loja</p>
              <input type="text" placeholder='Restaurante Todo Mundo Gosta' name="nome" className='imputnome texto' />
            
            
              <p className='fontone skfsj kugkl'>CNPJ da loja</p>
              <input type="number" placeholder='12.345.678/0001-99' name='email' className='inputemail texto' />
            
            
              <p className='fontone skfsj kugkl sssd'>Tipe de loja</p>
              <input type="tel" id='phone' placeholder="Selecione" name='phone' className='inputnumero texto lsfhsf' />
            
            
            
            </form>
        </div>
    )
}

export default FormularioTree