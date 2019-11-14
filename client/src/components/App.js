import React, {useState, useEffect} from "react";
import api from "../utils/api";

const App = () => {
    const [brandLabels, setBrandLabels] = useState([]);
    const [brandData, setBrandData] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(brandLabels[0]);
    const [cars, setCars] = useState([]);
    // state is used to save variable
    // when variable is changed then react can rerender

    useEffect(() => {
        api.get("/cars/brand").then(result => {
            setBrandLabels(getChartLabels(result.data, 5));
            setBrandData(getChartData(result.data, 5));
        }, []);
    })

    return (
    <div>
        {brandLabels.map(brand => (
        <div>
            <label>
                <input 
                type="radio" value={brand} 
                checked={brand === selectedBrand}
                onChange={() => setSelectedBrand(brand)}
                ></input>
                {brand}
            </label>
        </div>))}
        <div>Selected: {selectedBrand}</div>
        <button onClick={() => {
            api.get("cars", {brand: {selectedBrand}}).then(cars => {
                setCars(cars);
                console.log(cars);
            }
            );
        }}>Get cars</button>
       
    </div>
    );
};

const getChartData = (input, number) => {
    let data = [];
    for(let i = 0; i<number; i++) {
        data.push(input[i].count);
    }
    return data;
}

const getChartLabels = (input, number) => {
    let labels = [];
    for(let i = 0; i<number; i++) {
        labels.push(input[i]._id);
    }
    return labels;
}

export default App;
