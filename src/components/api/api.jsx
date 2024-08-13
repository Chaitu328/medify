const UPI_URL = 'https://meddata-backend.onrender.com'

const states = async () => {
    const response = await fetch(`${UPI_URL}/states`);
    const responceInJSON = await response.json();
    return responceInJSON;
}

const fetchStateAndCity = async(state,city)=>{
    const response = await fetch(`${UPI_URL}/data?state=${state}&city=${city}`);
    const responceInJSON = await response.json()
    return responceInJSON
}

const citiesInState = async(state)=>{
    const response = await fetch(`${UPI_URL}/cities/${state}`);
    const responceInJSON = await response.json()
    return responceInJSON
}

module.exports = { 
    states,
    fetchStateAndCity,
    citiesInState
};