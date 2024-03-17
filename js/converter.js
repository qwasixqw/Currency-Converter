'use strict';

const rates = {
	usd: 0.014,
	eur: 0.013
};

export function convert(rub, currency) {
	if (!rates[currency]) {
		return null;
	}

	return rub * rates[currency];
}

