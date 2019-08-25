const fetch = require('node-fetch');
const starwarapi = require('./script2');

it('Calling swapi api(AsyncAwait)', ()=>{ // when running asynchrous test, always do expect assertion and return the test
	expect.assertions(1) //assertions = how many assertions you expect
	return starwarapi.getPeopleAsyncAwait(fetch).then(data=>{ // use return so it will wait until the function return
		expect(data.count).toEqual(87);
	})
})

it('Calling swapi api(Promise)', ()=>{
	expect.assertions(2) //2 assertions
	return starwarapi.getPeoplePromise(fetch).then(data=>{
		expect(data.count).toEqual(87);
		expect(data.results.length).toBeGreaterThan(9);
	})
})

it('Return count and results', ()=>{
	const mockFetch = jest.fn()
	.mockReturnValue(Promise.resolve({//mock the data
		json: ()=>Promise.resolve({//always assuming the promise is resolve
			count:87,
			results:[0,1,2,3,4,5,6,7,8,9,10]
		})
	}))  //Mock the api call 
	expect.assertions(4)
	return starwarapi.getPeoplePromise(mockFetch).then(data => {
		expect(mockFetch.mock.calls.length).toBe(1) //number of this to be call is 1
		expect(mockFetch).toBeCalledWith('https://swapi.co/api/people')
		expect(data.count).toEqual(87)
		expect(data.results.length).toBeGreaterThan(9)
	})
})