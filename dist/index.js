/** @license Apache-2.0 */

'use strict';

/**
* Create an iterator which generates a sequence of nonnegative even integers.
*
* @module @stdlib/math-iter-sequences-nonnegative-even-integers
*
* @example
* var iterNonNegativeEvenIntegersSeq = require( '@stdlib/math-iter-sequences-nonnegative-even-integers' );
*
* var iter = iterNonNegativeEvenIntegersSeq();
*
* var v = iter.next().value;
* // returns 0
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 4
*
* // ...
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
