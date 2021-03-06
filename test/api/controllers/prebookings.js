'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
  describe('Test prebook offer 1001', function (done) {
    describe('GET /api/prebookings/1001/prebook', function (done) {
      it('should not return an error', function (done) {
        request(server)
                .get('/api/offers/1001/prebook')
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(200)
                .end(function (err, res) {
                  if (err) {
                    throw err
                  } else {
                    done()
                  }
                })
      })
    })
  })
})
