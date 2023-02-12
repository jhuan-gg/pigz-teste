import './App.css';

function App() {
  return (
    <div className="App">
        <header className='cabeça'>
          <div>
            <img src="pigz.svg" className='logo' alt="logotype" />
          </div>
          <div>
            <button className='buttoncbc'>Já sou parceiro</button>
          </div>
        </header>
        <div className='fieldsetcolor'>
        <section className='seçao1'>
            <div>
              <article>
                <h2 className='fonteseçao'>
                  Pigz: tudo que você precisa pra vender ainda mais!
                </h2>
              </article>
            </div>
            <div>
              <img src="burguer.PNG" className='burguer' alt="hambuguer" />
            </div>  
          </section>
          <section>
            <article>
              <h4 className='fontepp'>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</h4>
            </article>
          </section>
          <form className='formulario'>
            <article>
              <h1  className='fonte'>Quero vender no Pigz</h1>

              <p className='fontone'>Dê o primeiro passo para aumentar suas vendas</p>
            </article>
            <div>
              <p className='fontone'>Nome</p>
              <input type="text" placeholder='digite seu nome' name="nome" className='imputnome' />
            </div>
            <div>
              <p className='fontone'>E-mail</p>
              <input type="text" placeholder='digite seu e-mail' name='email' className='inputemail' />
            </div>
            <div>
              <p className='fontone'>Telefone</p>
              <input type="number" placeholder="digite seu telefone" name='numero' className='inputnumero' />
            </div>
            <footer>
              <p className='fontep'>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</p>
            </footer>
            <button className='buttoncontinue'>continuar</button>
          </form>
        </div>
    </div>
  );
}

export default App;
