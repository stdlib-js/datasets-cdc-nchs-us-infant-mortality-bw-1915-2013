<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# US Infant Mortality Rates, By Race (1915-2013)

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> US infant mortality data, by race, from 1915 to 2013, as provided by the Center for Disease Control and Prevention's National Center for Health Statistics.



<section class="usage">

## Usage

To use in Observable,

```javascript
dataset = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var dataset = require( 'path/to/vendor/umd/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.dataset;
})();
</script>
```

#### dataset()

Returns US infant mortality data, by race, from 1915 to 2013, as provided by the Center for Disease Control and Prevention's National Center for Health Statistics.

```javascript
var data = dataset();
// returns { 'black': [...], 'white': [...] }
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   All birth data by race **before** 1980 are based on race of the child. Starting in 1980, birth data by race are based on race of the mother. Birth data are used to calculate infant mortality rate.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Retrieve the data:
var data = dataset();
var b = data.black;
var w = data.white;

// Compute the relative infant mortality rate for blacks versus whites...
var r;
var i;
for ( i = 0; i < b.length; i++ ) {
    r = b[ i ] / w[ i ];
    console.log( '%d', r.toFixed( 3 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013.svg
[npm-url]: https://npmjs.org/package/@stdlib/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013

[test-image]: https://github.com/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013.svg
[dependencies-url]: https://david-dm.org/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013#cli
[cli-url]: https://github.com/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013/tree/cli
[@stdlib/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013]: https://github.com/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013/tree/deno
[umd-url]: https://github.com/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013/tree/umd
[esm-url]: https://github.com/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013/tree/esm
[branches-url]: https://github.com/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013/blob/main/branches.md

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[csv]: https://tools.ietf.org/html/rfc4180

</section>

<!-- /.links -->
