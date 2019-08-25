const search = require('./script');

dbMock = [
	'aflowers.com',
	'mycoolpicture.com',
	'mypicture.com',
	'myflowerss.com',
];

describe('My first test', ()=>{
	it('My first test' , () =>{
	expect('hello').toBe('hello')
})

it('Testing search' , () =>{
	expect(search('hahaha',dbMock)).toEqual([])
	expect(search('flower',dbMock)).toEqual(['aflowers.com','myflowerss.com'])
})

it('Testing undefined and null' , () =>{
	expect(search('undefined',dbMock)).toEqual([])
	expect(search('null',dbMock)).toEqual([])
})

it('Only return 2 matches' , () =>{
	expect(search('.com',dbMock).length).toEqual(2);
	
})
})

