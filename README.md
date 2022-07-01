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

# US Infant Mortality Rates, By Race (1915-2013)

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> US infant mortality data, by race, from 1915 to 2013, as provided by the Center for Disease Control and Prevention's National Center for Health Statistics.



<section class="usage">

## Usage

```javascript
import dataset from 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013@esm/index.mjs';
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
<script type="module">

import dataset from 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-cdc-nchs-us-infant-mortality-bw-1915-2013@esm/index.mjs';

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

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
