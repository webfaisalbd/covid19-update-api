// declare global variable 
const buttonClicked = document.getElementById('search_button');
const countryName = document.getElementById('countryName');


buttonClicked.addEventListener('click', function () {
    const searchValue = countryName.value;
    const url = `https://api.covid19api.com/total/country/${searchValue}`;


    fetch(url)
        .then(res => res.json())
        .then(data => display(data[590]));
})


const display = data => {
    console.log(data);



}


