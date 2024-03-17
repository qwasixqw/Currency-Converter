'use strict';
import { convert } from "../js/converter.js";

const valueInput = document.querySelector('.input');
const currencySelector = document.querySelector('.currency-selector');
const output = document.querySelector('.output');

valueInput.addEventListener('input', renderCurrency)
currencySelector.addEventListener('change', renderCurrency);

function renderCurrency() {
	const rub = Number(valueInput.value);
	const currency = currencySelector.value;
	const result = convert(rub, currency);
	
	output.textContent = result.toFixed(2);
}