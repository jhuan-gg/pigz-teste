import OneCarrosel from "./OneCarrosel"
import TwoCarrossel from "./TwoCarrosel"
import TreeCarrossel from "./TreeCarrossel"
import FourCarrossel from "./FourCarrosel"
import { useState } from "react";



const SetCarrossel = () => {

    const C1 = () => (
        <div>
            <OneCarrosel />
        </div>
      );
      
      const C2 = () => (
        <div>
            <TwoCarrossel />
        </div>
      );
      
      const C3 = () => (
        <div>
            <TreeCarrossel />
        </div>
      );
      const C4 = () => (
        <div>
            <FourCarrossel />
        </div>
      );

      const [componenteAtual, setComponenteAtual] = useState(0);

    return (
        <div>
            <div className="carrossel" > 
            <button
            className="slfls asdd"
            onClick={() => {
              setComponenteAtual(0);
            }}
          >
            
          </button>
          <button
            className="slfls khlglb"
            onClick={() => {
              setComponenteAtual(1);
            }}
          >
            
          </button>
          <button
            className="slfls licsjc"
            onClick={() => {
              setComponenteAtual(2);
            }}
          >
            
          </button>
          <button
            className="slfls lvdjv"
            onClick={() => {
              setComponenteAtual(3);
            }}
          >
            
          </button>
                <div className="container" id="img">
                {componenteAtual === 0 && <C1 />}
                {componenteAtual === 1 && <C2 />}
                {componenteAtual === 2 && <C3 />}
                {componenteAtual === 3 && <C4 />}
                </div>
            </div>
        </div>
    )
}


export default SetCarrossel