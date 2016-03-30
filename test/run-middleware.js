var t = require('ava')
var co = require('../')
var expect = require('chai').expect
var sinon = require('sinon')

t('should execute handler', async t => {
  var ctx = {}
  var stub = sinon.stub().returns('pong!')

  await co(function * ping () {
    this.body = stub()
  }, ctx)

  expect(ctx.body).to.equal('pong!')
  expect(stub.calledOnce).to.be.true
})
