const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

const load = document.getElementById('load');

//  Add min atribute to inputs
amountEl_one.setAttribute("min", "0");
amountEl_two.setAttribute("min", "0");

// Fetch exchange rates and update the DOM
function calculate() {  
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    load.classList.toggle('now');
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
            load.classList.remove('now');
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
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});

calculate();

//TODO: Cuando se realiza la consulta al API, indicar estado de espera mediante logo o mensaje por pantalla