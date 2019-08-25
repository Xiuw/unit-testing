const websites = [
	'flower.com',
	'cake.com',
	'lovecake.com',
	'flowers.com',
	'coolpicture.com',
	'picture.com',
	'flowerss.com',
];

const search = (input, db) => { //search if websites matches, and return only first 2
	const matches = db.filter(website => {
		return website.includes(input);
	})
	return matches.length > 2 ? matches.slice(0,2) : matches
}

module.exports = search;