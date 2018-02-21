/**
 * This file is part of node-extended-error
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {ExtendedError} = require('../lib/extended-error')

describe('Class {ExtendedError}', () => {
  it('should be a function', () => {
    (ExtendedError).should.be.a.Function()
  })
})

describe('Create a new instance of {ExtendedError}', () => {
  it('without arguments should be an object', () => {
    (new ExtendedError()).should.be.an.Object()
  })
  it('without arguments should be an instance of {ExtendedError}', () => {
    (new ExtendedError()).should.be.an.instanceOf(ExtendedError)
  })
  it('with argument should be an object', () => {
    (new ExtendedError('an error')).should.be.an.Object()
  })
  it('with argument should be an instance of {ExtendedError}', () => {
    (new ExtendedError('an error')).should.be.an.instanceOf(ExtendedError)
  })
})

describe('Throw an {ExtendedError}', () => {
  it('without arguments should be an object', () => {
    (() => { throw new ExtendedError() }).should.throw()
  })
  it('with arguments should be an object', () => {
    (() => { throw new ExtendedError('an error') }).should.throw()
  })
})
