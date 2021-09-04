// declare global variable 
const buttonClicked = document.getElementById('search_button');
const countryName = document.getElementById('countryName');


buttonClicked.addEventListener('click', function () {
    const searchValue = countryName.value;
    countryName.value = '';
    if (searchValue == '') {
        console.log('hmmm');
        document.getElementById('status').style.display = 'none';
        document.getElementById('error-status').innerText = "You have to input a country name"
        return;
    }
    const url = `https://api.covid19api.com/total/country/${searchValue}`;


    fetch(url)
        .then(res => res.json())
        .then(data => display(data[590]));
})


const display = data => {
    console.log(data);


    // set value
    const country = data.Country;
    const totalCases = data.Confirmed;
    const totalDeaths = data.Deaths
    const active = data.Active;

    // get value 
    document.getElementById('country').innerText = country;
    document.getElementById('totalCases').innerText = totalCases;
    document.getElementById('totalDeaths').innerText = totalDeaths;
    document.getElementById('recovered').innerText = active;

}


