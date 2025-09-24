
const exchangeRates = {
  IN: { name: "INR", rates: { IN: 1, US: 0.012, UK: 0.0095, EU: 0.011, JP: 1.7 } },
  US: { name: "USD", rates: { IN: 83.3, US: 1, UK: 0.79, EU: 0.92, JP: 141.5 } },
  UK: { name: "GBP", rates: { IN: 105.2, US: 1.27, UK: 1, EU: 1.17, JP: 179.4 } },
  EU: { name: "EUR", rates: { IN: 89.6, US: 1.09, UK: 0.86, EU: 1, JP: 153.4 } },
  JP: { name: "YEN", rates: { IN: 0.59, US: 0.0071, UK: 0.0056, EU: 0.0065, JP: 1 } },
};

function convertCurrency() {
  const from = document.getElementById("sourceCountry").value;
  const to = document.getElementById("destinationCountry").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid positive amount.");
    return;
  }

  const rate = exchangeRates[from].rates[to];
  const converted = amount * rate;

  const sourceCurrency = exchangeRates[from].name;
  const destCurrency = exchangeRates[to].name;

  document.getElementById("convertedAmount").textContent = `${converted.toFixed(2)} ${destCurrency}`;
  document.getElementById("rateInfo").innerText =
    `1 ${sourceCurrency} = ${rate} ${destCurrency}`;
}