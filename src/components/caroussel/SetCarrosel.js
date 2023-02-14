import OneCarrosel from "./OneCarrosel"
import TwoCarrossel from "./TwoCarrosel"
import TreeCarrossel from "./TreeCarrossel"
import FourCarrossel from "./FourCarrosel"


const SetCarrossel = () => {
    return (
        <div>
            <div className="carrossel" >  
                <div className="container" id="img">
                    <OneCarrosel />
                    <TwoCarrossel />
                    <TreeCarrossel />
                    <FourCarrossel />
                </div>
            </div>
        </div>
    )
}


export default SetCarrossel