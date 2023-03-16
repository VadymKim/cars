import { useSelector } from "react-redux";


function CarValue() {

    const total = useSelector(({cars: { carList, searchTerm }}) => 
        carList
          .filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .reduce((sum, car) => sum + car.cost, 0)
    );

    return (
       <div className="field car-value">
          <p><b>Total Cost: ${total}</b></p> 
       </div>
    );
}

export default CarValue;