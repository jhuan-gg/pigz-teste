import './App.css';
import OneCarrosel from './components/OneCarrosel';
import SetCarrossel from './components/SetCarrosel';

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
                <div className="artigo">
                    <h2 className='fonteseçao'>
                      Pigz: tudo que <br /> você precisa <br />pra vender <br />ainda mais!
                    </h2>
                </div>
              </div>
              <div classname="hamburguer">
                <img src="burguer.png" className='burguer' alt="hambuguer" />
              </div>  
          </section>
          <section className='seçao2'>
              <article>
                <h4 className='fontepp'>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</h4>
              </article>
            <form id='login' className='formulario'>
              
                <h1  className='fonte'>Quero vender no Pigz</h1>
                <p className='fontone'>Dê o primeiro passo para aumentar suas vendas</p>
              
              
                <p className='fontone'>Nome</p>
                <input type="text" placeholder='digite seu nome' name="nome" className='imputnome' />
              
              
                <p className='fontone'>E-mail</p>
                <input type="text" placeholder='digite seu e-mail' name='email' className='inputemail' />
              
              
                <p className='fontone'>Telefone</p>
                <input type="tel" id='phone' placeholder="(XX) XXXXX-XXXX" name='phone' className='inputnumero' />
              
              
                <p className='fontep'>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</p>
              
                <button className='buttoncontinue'>continuar</button>
              </form>
          </section>
        </div>
        <section className="pigzimg">
          <img src="Grupo 3535 (1).svg" alt="pigzimg" className="ju" />
          <h2 className="pigzdido">Você tem um <br/>novo Pigzdido!</h2>
        </section>
        <section className="opçoes">
          <button className="buttonsnav">
            <img src="storefront_black_24dp.svg" alt="" />
            <h2 className="btn">Marketplace 
              <p className="btns">Pra sua loja vender mais</p>
            </h2>
          </button>
          <button className="buttonsnav">
            <img src="smartphone_black_24dp.svg" alt="" />
            <h2 className="btn">É fácil e rápido
              <p className="btns">Fazer um pedido no pigz</p>
            </h2>
          </button>
          <button className="buttonsnav">
            <img src="Grupo 3545.svg" alt="" />
            <h2 className="btn">Pigz gestão
              <p className="btns">Você no controle, sempre</p>
            </h2>
          </button>
          <button className="buttonsnav">
            <img src="print_black_24dp.svg" alt="" />
            <h2 className="btn">Vias de Impressão
              <p className="btns">Personalizáveis</p>
            </h2>
          </button>
        </section>
        <section>
          <h2 className="pigzdido">Tudo que você <br />precisa por apenas <br />R$199/mês</h2>
          <p className="btns">Tenha todas as funcionalidades <br />Pigz sem taxa de adesão, sem <br />comissão por cada venda, sem <br />letrinhas miúdas.</p>
        </section>
    </div>
  );

}

export default App;
