// CurrencyEl_one will be the one to work with. baseCurrency is just a base amount (in euros) to calculate the price in any currency
const currencyEl_one = document.getElementById('currency-one');
const baseCurrency = "EUR";

// Prices of films in euros
const avengersPrice = 10;
const jokerPrice = 12;
const toyStoryPrice = 8;
const lionKingPrice = 9;


// Option elements of select element to modify the price as a function of the currency
const avengers = document.getElementById('avengers');
const joker = document.getElementById('joker');
const toyStory = document.getElementById('toy-story');
const lionKing = document.getElementById('lion-king');

// p element to change the value of value and currency
const currencySelected = document.getElementById('currency-selected');

// Fetch exchange rates and update the DOM
function calculate() {  
    const currency_one = currencyEl_one.value;
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_one];
            avengers.innerText = `Avengers: Endgame (${(avengersPrice * rate).toFixed(2)} ${currencyEl_one.value})`;
            joker.innerText = `Joker (${(avengersPrice * rate).toFixed(2)} ${currencyEl_one.value})`;
            toyStory.innerText = `Toy Story 4 (${(avengersPrice * rate).toFixed(2)} ${currencyEl_one.value})`;
            lionKing.innerText = `The Lion King (${(avengersPrice * rate).toFixed(2)} ${currencyEl_one.value})`;
            currencySelected.innerText = currency_one;
        })
        .catch(err => {
            if(typeof err.json === "function") {
                err.json().then(jsonError => {
                    console.log("Json error from API");
                    console.log(jsonError);
                }).catch(genericError => {
                    console.log("Generic error from API");
                    console.log(err.statusText);
                });
            } else { 
                console.log("Fetch error");
                console.log(err);
            }
        });
    
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);

calculate();