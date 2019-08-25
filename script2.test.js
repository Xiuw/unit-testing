const fetch = require('node-fetch');
const starwarapi = require('./script2');

it('Calling swapi api(AsyncAwait)', ()=>{ // when running asynchrous test, always do expect assertion and return the test
	expect.assertions(1) //assertions = how many assertions you expect
	return starwarapi.getPeopleAsyncAwait(fetch).then(data=>{ // use return so it will wait until the function return
		expect(data.count).toEqual(87);
	})
})

it('Calling swapi api(Promise)', ()=>{
	expect.assertions(2)
	return starwarapi.getPeoplePromise(fetch).then(data=>{
		expect(data.count).toEqual(87);
		expect(data.results.length).toBeGreaterThan(5);
	})
})