const url = 'https://calendarific.com/api/v2/holidays?&api_key=muC7CCeq3O6a65ciSGxf3Nion28NaItp&country=US&year=2024&type=national'
const api_key = "muC7CCeq3O6a65ciSGxf3Nion28NaItp"
let year = 2024
let country = "US"
let type = 'national'

fetch((url))
.then((res) => res.json())
.then((data) => console.log(data))