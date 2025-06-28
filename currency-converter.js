//Currency Converter 
//for flag->  http://flags.ox3.in/svg/xx.svg
//for currency converting ->  https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/curr.json

let from = document.querySelector("#select-from");
let to = document.querySelector("#select-to");
// let btn=document.querySelector("#btn");
// let input_from=document.querySelector("#input-from");
let arrow2 = document.querySelector("#arrow2");
let loading = document.querySelector("#loading");
let flag1 = document.querySelector("#one");
let flag2 = document.querySelector("#two");
for (let country in countries) {
    if (country === 'us') {
        from.innerHTML += `<option value="${country}" selected>${countries[country]}</option>`;
        to.innerHTML += `<option value="${country}">${countries[country]}</option>`;
    }
    else if (country === 'in') {
        from.innerHTML += `<option value="${country}">${countries[country]}</option>`;
        to.innerHTML += `<option value="${country}" selected>${countries[country]}</option>`;
    }
    else {
        from.innerHTML += `<option value="${country}">${countries[country]}</option>`;
        to.innerHTML += `<option value="${country}">${countries[country]}</option>`;
    }

}
from.addEventListener('change', async () => {
    if (from.value) {
        loading.style.display = 'block';

        flag1.src = `http://flags.ox3.in/svg/${from.value}.svg`;

        await new Promise((resolve) => {
            flag1.onload = resolve;
            flag1.onerror = resolve; // in case image fails to load
        });
        loading.style.display = 'none';
    }
});
to.addEventListener('change', async () => {
    if (from.value) {
        loading.style.display = 'block';

        flag2.src = `http://flags.ox3.in/svg/${to.value}.svg`;

        await new Promise((resolve) => {
            flag2.onload = resolve;
            flag2.onerror = resolve; // in case image fails to load
        });
        loading.style.display = 'none';
    }
});
arrow2.addEventListener('click', async () => {
    let temp = to.value;
    to.value = from.value;
    from.value = temp;
    temp = flag1.src;
    flag1.src = flag2.src;
    flag2.src = temp;
    let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${countryToCurrency[from.value].toLowerCase()}.json`);

    let res = await response.json();
    loading.style.display = 'none';
    if (input_from.value) {
        let value = res[countryToCurrency[from.value].toLowerCase()][countryToCurrency[to.value].toLowerCase()];

        document.querySelector("#rate").innerHTML = `<p> Rate => (1 ${countryToCurrency[from.value]} = ${value} ${countryToCurrency[to.value]})`;

        document.querySelector("#input-to").placeholder = `${Math.round(value * input_from.value * 100) / 100}`;
    }
});
btn.addEventListener('click', async () => {
    if (input_from.value) {
        loading.style.display = 'block';
        let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${countryToCurrency[from.value].toLowerCase()}.json`);

        let res = await response.json();
        loading.style.display = 'none';
        let value = res[countryToCurrency[from.value].toLowerCase()][countryToCurrency[to.value].toLowerCase()];

        document.querySelector("#rate").innerHTML = `<p> Rate => (1 ${countryToCurrency[from.value]} = ${value} ${countryToCurrency[to.value]})`;

        document.querySelector("#input-to").placeholder = `${Math.round(value * input_from.value * 100) / 100}`;
    }
    else {
        alert('Enter currency amount');
    }
});