# koa-test-stack
single interface wrapper around koa-compose and co, to test koa middleware(s)

# :badges:

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[![Build Status](https://travis-ci.org/renegare/koa-test-stack.svg?branch=master)](https://travis-ci.org/renegare/koa-test-stack)

[![npm version](https://badge.fury.io/js/koa-test-stack.svg)](https://badge.fury.io/js/koa-test-stack)

# Usage

```
import test from 'ava'
import sinon from 'sinon'
import {expect} from 'chai'
import co from '.'

test('should pass using an async func', async () => {
  var ctx = {}
  var stub = sinon.stub().returns('pong!')

  await co(function * ping () {
    this.body = stub()
  }, ctx)

  expect(ctx.body).to.equal('pong!')
  expect(stub.calledOnce).to.be.true
})
```

For a less* futuristic way of testing ... see ```spec.js```

\* using generator function to wrap your tests.
