const container = document.querySelector(".container");
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

/* Functions */

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total amount and count of seats
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    // Copy selected seats into array
    // Map through array
    // Return a new array of indexes
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    console.log(seatsIndex);
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    
    setMovieData(movieSelect.selectedIndex, movieSelect.value)
    

}

// Get data from localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('selected');
        }
      });
    }
  
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  
    if (selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
    }
  }

/* Event listeners */

// Movie select event
movieSelect.addEventListener('change', event => {
    ticketPrice = +event.target.value;
    setMovieData(event.target.selectedIndex, event.target.value);
    updateSelectedCount();
});

// Seat click event
container.addEventListener('click', event => {
    if(event.target.classList.contains('seat') && !event.target.classList.contains('occupied')) {
        event.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

// Initial count and total set
updateSelectedCount();

/*************************************************************************************************************************************************
*************************************************************************************************************************************************/

/* Currency Convertor */
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
            joker.innerText = `Joker (${(jokerPrice * rate).toFixed(2)} ${currencyEl_one.value})`;
            toyStory.innerText = `Toy Story 4 (${(toyStoryPrice * rate).toFixed(2)} ${currencyEl_one.value})`;
            lionKing.innerText = `The Lion King (${(lionKingPrice * rate).toFixed(2)} ${currencyEl_one.value})`;
            currencySelected.innerText = currency_one;
            total.innerText = (total.innerText * rate).toFixed(2);
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