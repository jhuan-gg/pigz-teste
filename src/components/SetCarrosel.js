import OneCarrosel from "./OneCarrosel"
import TwoCarrossel from "./TwoCarrosel"
import TreeCarrossel from "./TreeCarrossel"
import FourCarrossel from "./FourCarrosel"


const SetCarrossel = () => {
    return (
        <div>
            <div className="carrossel">
            <div classname="container" id="img">
                <img src="burguer_2@3x.png" alt="" srcset="" />
                <img src="burguer_2@3x.png" alt="" />
                <img src="burguer_2@3x.png" alt="" />
            </div>
            </div>
        </div>
    )
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img")

let idx = 0;

function carrossel(){
  idx++;

  if(idx > img.length - 1){
  idx = 0;
}

imgs.style.transform = `translateX{${-idx *500}px}`;
}
setInterval(carrossel, 1800);
}


export default SetCarrossel