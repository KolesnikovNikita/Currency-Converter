import axios from 'axios';

export default axios.create({
    baseURL: "https://api.apilayer.com/fixer/latest",
    headers: {
        'apikey': 'a9V1uc04gKcUorjkjGwa1MTOcXFZdW2O'
      }
})