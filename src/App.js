import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

function App() {

    return (
        <div className="container">
           <CarForm />
           <CarSearch />
           <hr />
           <CarList />
           <CarValue /> 
        </div>
    );
}

export default App;