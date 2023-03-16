import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {

    const dispatch = useDispatch();

    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm;
    });

    const handleChange = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    };

    return (
        <div className="list-header">
            <h3 className="title is-3">My Cars</h3>
            <div className="field-horizontal">
                
                <input 
                  className="input" 
                  onChange={handleChange}
                  value={searchTerm}
                  placeholder="Search..."
                />
            </div>

        </div>
    );
}

export default CarSearch;