import axios from 'axios';

export default axios.create({
    baseURL: "https://api.apilayer.com/fixer/latest",
    headers: {
        'apikey': 'Dge5XjNbdgPe9S2wTVnCPWXI4dav7bes'
      }
})