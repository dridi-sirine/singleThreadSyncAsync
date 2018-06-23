const axios = require('axios')
const fetch = require('node-fetch')
const http = require('http')
const util = require('util')
const request = require('request')
const sync_request = require('sync-request')

const url = 'http://localhost:8080/google/api/geo'

console.log('Starting app')
// blocking nodejs code


const res = sync_request('GET', url)
console.log('BLOCKING - sync-request: ', res.getBody().toString())


// Simulate non-blocking nodejs code by delaying code in miliseconds

setTimeout((result) => {
    console.log('SIMULATE NON-BLOCKING - Inside a callback')
}, 2000)

setTimeout(() => {
    console.log('SIMULATE NON-BLOCKING - Second timeout')
}, 0)

// Non-blocking nodejs code

// Async/Await

const getGeo = async (url) => {
    try {
        const result = await axios.get(url)
        console.log('NON-BLOCKING - async/await: ', result.data)
    } catch(err) {
        console.log(err)
    }
}


getGeo(url)

// Promiqe
fetch(url)
    .then(res => res.text())
    .then(body => console.log('NON-BLOCKING - Promise: ', body))
    .catch(err => console.log(err))

// Callback
http.get(url, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log('NON-BLOCKING - callback: ', data);
    });

})

// Request with callback
request(url, (error, response, body) => {
    if (error) {
        console.log(error)
    } else {
        console.log('NON-BLOCKING - REQUEST callback: ', body)
    }
})

// callback to promise
const req = util.promisify(request)

req(url)
    .then((response, body) => {
        console.log('NON-BLOCKING - Callback to promise: ', response.body)
    })
    .catch(err => console.log(err))


// callback to async/await
const getGeoFromCallbackToPromise = async (url) => {
    try {
        const result = await req(url)
        console.log('NON-BLOCKING - Callback to async/await: ', result.body)
    } catch(err) {
        console.log(err)
    }
}
getGeoFromCallbackToPromise(url)

console.log('finishing app')