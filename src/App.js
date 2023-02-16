import './App.css';
import SetCarrossel from './components/caroussel/SetCarrosel'
import PigzPigz from './components/informaçoes/PigzPigz';
import Pagamento from './components/informaçoes/Pagamento';
import WhatsApp from './components/informaçoes/Whatsapp';
import Footer from './components/Rodape.js/Footer';
import FormularioOne from './components/formularios/FormularioOne';
import SetFormulario from './components/formularios/SetFormulario';

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
                      <img src="burguer.png" className='burguer' alt="hambuguer" />
                </div>
              </div>
          </section>
          <section className='seçao2'>
              <article>
                <h4 className='fontepp'>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</h4>
              </article>
              <SetFormulario />
          </section>
        </div>
        <section className='kvdjoj'>
          <img src="Grupo 3535 (1).svg" className="pigzimg" />
          <h2 className="pigzdido">Você tem um <br/>novo Pigzdido!</h2>
        </section>
        <section className="opçoes">
          <button  className="buttonsnav">
            <img src="storefront_black_24dp.svg" alt="" />
            <h2 className="btn sfdfv">Marketplace 
              <p className="btns">Pra sua loja vender mais</p>
            </h2>
          </button>
          <button className="buttonsnav">
            <img src="smartphone_black_24dp.svg" alt="" />
            <h2 className="btn sfdfv">É fácil e rápido
              <p className="btns">Fazer um pedido no pigz</p>
            </h2>
          </button>
          <button className="buttonsnav">
            <img src="Grupo 3545.svg" alt="" />
            <h2 className="btn sfdfv">Pigz gestão
              <p className="btns">Você no controle, sempre</p>
            </h2>
          </button>
          <button className="buttonsnav">
            <img src="print_black_24dp.svg" alt="" />
            <h2 className="btn sfdfv">Vias de Impressão
              <p className="btns">Personalizáveis</p>
            </h2>
          </button>
        </section>
        <section>
          <h2 className="pigzdiddo">Tudo que você <br />precisa por apenas <br />R$199/mês</h2>
          <p className="btns">Tenha todas as funcionalidades <br />Pigz sem taxa de adesão, sem <br />comissão por cada venda, sem <br />letrinhas miúdas.</p>
        </section>
        <SetCarrossel />
        <section>
          <h1 className='pigzdido nbgf'>
            E mais: suporte <br />que realmente <br />funciona!
          </h1>
          <p className='btns'>Respostas automáticas e robôs? <br />Aqui não. Nossa equipe está <br />sempre disponível pra ajudar você <br />e seus clientes.</p>
        </section>
        <PigzPigz />
        <Pagamento />
        <WhatsApp />
        <Footer />
    </div>
  );

}

export default App;
