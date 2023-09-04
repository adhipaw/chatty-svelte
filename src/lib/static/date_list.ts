export const MONTH = {
	'1': 'January',
	'2': 'Febuary',
	'3': 'March',
	'4': 'April',
	'5': 'Mei',
	'6': 'June',
	'7': 'July',
	'8': 'August',
	'9': 'September',
	'10': 'October',
	'11': 'November',
	'12': 'December'
};

export const DATES: Record<string, string> = {};
for (let index = 1; index <= 31; index++) {
	DATES[`${index}`] = index.toString();
}

export const YEARS: Record<string, string> = {};
for (let index = 1900; index <= 2023; index++) {
	YEARS[`${index}`] = index.toString();
}
