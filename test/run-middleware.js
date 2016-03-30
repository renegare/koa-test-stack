var t = require('tap').test
var pco = require('bluebird').coroutine
var co = require('../')
var expect = require('chai').expect
var sinon = require('sinon')

t('should execute handler', pco(function * (t) {
  var ctx = {}
  var stub = sinon.stub().returns('pong!')

  yield co(function * ping () {
    this.body = stub()
  }, ctx)

  expect(ctx.body).to.equal('pong!')
  expect(stub.calledOnce).to.be.true

  t.end()
}))
