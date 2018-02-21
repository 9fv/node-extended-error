/**
 * This file is part of node-extended-error
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module extended-error
 * @description An class to extend standard Javascript errors. Encapsulate {ExtendableError} from [es6-error]().
 * @example
 *
 * const {ExtendedError} = require('extended-error')
 *
 * // A custom error class.
 * class CustomError extends ExtendedError {
 *
 *   // The constructor.
 *   constructor (...args) {
 *     super(...args)
 *   }
 * }
 *
 * throw new CustomError('an error') // throw an error of custom type.
 *
 */

const ExtendableError = require('es6-error')

/**
 * A base class for extended errors.
 *
 * @category error
 * @class
 * @public
 */
class ExtendedError extends ExtendableError {

}

module.exports = {}
module.exports.ExtendedError = ExtendedError
