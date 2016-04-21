import test from 'ava'
import {coroutine as easy} from 'bluebird'
import sinon from 'sinon'
import {expect} from 'chai'
import co from '.'

test('should pass using a generator wrapper', easy(function * () {
  var ctx = {}
  var stub = sinon.stub().returns('pong!')

  yield co(function * ping () {
    this.body = stub()
  }, ctx)

  expect(ctx.body).to.equal('pong!')
  expect(stub.calledOnce).to.be.true
}))

test('should pass using an async func', async () => {
  var ctx = {}
  var stub = sinon.stub().returns('pong!')

  await co(function * ping () {
    this.body = stub()
  }, ctx)

  expect(ctx.body).to.equal('pong!')
  expect(stub.calledOnce).to.be.true
})
