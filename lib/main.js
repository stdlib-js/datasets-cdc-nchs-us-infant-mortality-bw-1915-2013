/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var readJSON = require( '@stdlib/fs-read-json' ).sync;


// VARIABLES //

var fpath = resolve( __dirname, '..', 'data', 'data.json' );
var opts = {
	'encoding': 'utf8'
};


// MAIN //

/**
* Returns US infant mortality data, by race, from 1915 to 2013, as provided by the Center for Disease Control and Prevention's National Center for Health Statistics.
*
* ## Notes
*
* -   This function synchronously reads data from disk for each invocation. Such behavior is intentional and so is the avoidance of `require`. We assume that invocations are infrequent, and we want to avoid the `require` cache. This means that we allow data to be garbage collected and a user is responsible for explicitly caching data.
*
* @throws {Error} unable to read data
* @returns {Object} infant mortality data
*
* @example
* var data = dataset();
* // returns { 'black': [...], 'white': [...] }
*/
function dataset() {
	var data = readJSON( fpath, opts );
	if ( data instanceof Error ) {
		throw data;
	}
	return data;
}


// EXPORTS //

module.exports = dataset;
