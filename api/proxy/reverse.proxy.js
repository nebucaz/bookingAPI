/**
 * Created by kevinkreuzer on 05.05.17.
 */
'use strict'
const request = require('request')
const createReverseProxy = (app, environmentConfiguration) => {


    const proxyAPIRequest = (uri, req, res) => {
        let backendReise = environmentConfiguration.backendReise
        request(`${backendReise}/api/${uri}${req.params[0]}${req._parsedUrl.search ? req._parsedUrl.search : ''}`).pipe(res)
    }
    app.get('/redirect_api/locations*', function (req, res) {
        proxyAPIRequest('locations', req, res)
    })
    app.get('/redirect_api/trips*', function (req, res) {
        proxyAPIRequest('trips', req, res)
    })
    app.get('/redirect_api/offers*', function (req, res) {
        proxyAPIRequest('offers', req, res)
    })
    app.get('/redirect_api/prebookings*', function (req, res) {
        proxyAPIRequest('prebookings', req, res)
    })
    app.get('/redirect_api/bookings*', function (req, res) {
        proxyAPIRequest('bookings', req, res)
    })

    app.get('/basicAuth/login', function (req, res) {
        let basicAuthURL = environmentConfiguration.basicAuth_url
        request(`${basicAuthURL}${req.params[0]}${req._parsedUrl.search ? req._parsedUrl.search : ''}`).pipe(res)
    })
}
module.exports = createReverseProxy
