# CHANGELOG

> Package changelog.

<section class="release" id="v0.3.0">

## 0.3.0 (2026-01-29)

<section class="features">

### Features

-   [`f1fa458`](https://github.com/stdlib-js/stdlib/commit/f1fa458db16484f740ca8a80095231a31831226b) - add `blas/ext/base/dapxsumkbn-wasm` [(#3204)](https://github.com/stdlib-js/stdlib/pull/3204)
-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954)
-   [`dc08755`](https://github.com/stdlib-js/stdlib/commit/dc08755be693a93f1cef11bc0fe13d30829c9392) - add C `ndarray` API and refactor `blas/ext/base/dapxsum` [(#2946)](https://github.com/stdlib-js/stdlib/pull/2946)
-   [`bc3a86b`](https://github.com/stdlib-js/stdlib/commit/bc3a86bd7570b474ee165594dbb48e389f68fa60) - add C `ndarray` API and refactor `blas/ext/base/dapxsumkbn` [(#2930)](https://github.com/stdlib-js/stdlib/pull/2930)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`981c7ba`](https://github.com/stdlib-js/stdlib/commit/981c7baecfe6ab8ab4d973e95cd20453f90c5e28) - add missing checks for `N` and address failing tests stemming from refactoring
-   [`3d9c97f`](https://github.com/stdlib-js/stdlib/commit/3d9c97f44999496954f47fac902e4d67aed03425) - add `math/base/speical/abs` in manifest.json of `blas/ext/base/dapxsumkbn` [(#4732)](https://github.com/stdlib-js/stdlib/pull/4732)

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`2035f34`](https://github.com/stdlib-js/stdlib/commit/2035f344a1a469278042b7532f034dc6119933b3) - **docs:** add function documentation _(by Athan Reines)_
-   [`1ad050f`](https://github.com/stdlib-js/stdlib/commit/1ad050f89071f72e94b72c56acbb0fb8c270f7bf) - **bench:** refactor to use dynamic memory allocation in `blas/ext/base/dapxsumkbn` [(#8868)](https://github.com/stdlib-js/stdlib/pull/8868) _(by ashutoshsao)_
-   [`c221279`](https://github.com/stdlib-js/stdlib/commit/c2212790b0118b7787b5e292244b4364c08ea05a) - **docs:** minor clean-up _(by Philipp Burckhardt)_
-   [`981c7ba`](https://github.com/stdlib-js/stdlib/commit/981c7baecfe6ab8ab4d973e95cd20453f90c5e28) - **fix:** add missing checks for `N` and address failing tests stemming from refactoring _(by Athan Reines)_
-   [`1ed8400`](https://github.com/stdlib-js/stdlib/commit/1ed8400db79e87f245a7ad7d80d942e420b82e60) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`9f85b5d`](https://github.com/stdlib-js/stdlib/commit/9f85b5d90cb6fcaf052116cd06aa4a693757f0ec) - **test:** fix description _(by Philipp Burckhardt)_
-   [`ca7bf2d`](https://github.com/stdlib-js/stdlib/commit/ca7bf2d42bf8785f00754c838a855cc203f095e8) - **docs:** fix line wrapping _(by Athan Reines)_
-   [`f9561f9`](https://github.com/stdlib-js/stdlib/commit/f9561f99cd606b6fd783ed2253a425c3bdddce4e) - **docs:** update related packages sections [(#5087)](https://github.com/stdlib-js/stdlib/pull/5087) _(by stdlib-bot)_
-   [`3d9c97f`](https://github.com/stdlib-js/stdlib/commit/3d9c97f44999496954f47fac902e4d67aed03425) - **fix:** add `math/base/speical/abs` in manifest.json of `blas/ext/base/dapxsumkbn` [(#4732)](https://github.com/stdlib-js/stdlib/pull/4732) _(by Aayush Khanna)_
-   [`563a4f8`](https://github.com/stdlib-js/stdlib/commit/563a4f826ab757636ae08094fc6f62746042da4b) - **docs:** update related packages sections [(#4594)](https://github.com/stdlib-js/stdlib/pull/4594) _(by stdlib-bot)_
-   [`62364f6`](https://github.com/stdlib-js/stdlib/commit/62364f62ea823a3b52c2ad25660ecd80c71f8f36) - **style:** fix C comment alignment _(by Philipp Burckhardt)_
-   [`ac06419`](https://github.com/stdlib-js/stdlib/commit/ac06419c2a8358dfd80818823f571077eb58958e) - **docs:** update related packages sections [(#3387)](https://github.com/stdlib-js/stdlib/pull/3387) _(by stdlib-bot)_
-   [`f1fa458`](https://github.com/stdlib-js/stdlib/commit/f1fa458db16484f740ca8a80095231a31831226b) - **feat:** add `blas/ext/base/dapxsumkbn-wasm` [(#3204)](https://github.com/stdlib-js/stdlib/pull/3204) _(by Snehil Shah, Athan Reines, stdlib-bot)_
-   [`4eb9aea`](https://github.com/stdlib-js/stdlib/commit/4eb9aea88656f98ba3f65075b4a7cb3335284716) - **refactor:** replace `fabs` with `stdlib_base_abs` in C implementation of `blas/ext/base/dapxsumkbn` [(#3214)](https://github.com/stdlib-js/stdlib/pull/3214) _(by Muhammad Haris, stdlib-bot)_
-   [`f4009fd`](https://github.com/stdlib-js/stdlib/commit/f4009fd28715c51637c80513a1bf5b3b91784e7a) - **refactor:** update docs and handling of zero stride in `blas/ext/base/dapxsumkbn` [(#3212)](https://github.com/stdlib-js/stdlib/pull/3212) _(by Muhammad Haris)_
-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954) _(by Muhammad Haris)_
-   [`dc08755`](https://github.com/stdlib-js/stdlib/commit/dc08755be693a93f1cef11bc0fe13d30829c9392) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapxsum` [(#2946)](https://github.com/stdlib-js/stdlib/pull/2946) _(by Muhammad Haris, Athan Reines)_
-   [`bc3a86b`](https://github.com/stdlib-js/stdlib/commit/bc3a86bd7570b474ee165594dbb48e389f68fa60) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapxsumkbn` [(#2930)](https://github.com/stdlib-js/stdlib/pull/2930) _(by Muhammad Haris, Athan Reines)_
-   [`7e366ae`](https://github.com/stdlib-js/stdlib/commit/7e366ae8bd41439be0e99e958d1c3fbb1b7dd0c2) - **chore:** update package.json descriptions _(by Philipp Burckhardt)_
-   [`ed44fee`](https://github.com/stdlib-js/stdlib/commit/ed44feecb9eaa5e0849d1a533e5415624d0aa338) - **style:** use imperative in package.json description and end with period _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 6 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Athan Reines
-   Muhammad Haris
-   Philipp Burckhardt
-   Snehil Shah
-   ashutoshsao

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="bug-fixes">

### Bug Fixes

-   [`e3bf989`](https://github.com/stdlib-js/stdlib/commit/e3bf9895394d9a4c3db621a8c0491fc18a0fd1ba) - update build configurations and add missing include

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`272ae7a`](https://github.com/stdlib-js/stdlib/commit/272ae7ac5c576c68cfab1b6e304c86407faa20cd) - **docs:** remove comment _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`ceb4943`](https://github.com/stdlib-js/stdlib/commit/ceb494351d42c2505e559a2c8aad9a120c76d0db) - **docs:** remove comments _(by Athan Reines)_
-   [`e3bf989`](https://github.com/stdlib-js/stdlib/commit/e3bf9895394d9a4c3db621a8c0491fc18a0fd1ba) - **fix:** update build configurations and add missing include _(by Athan Reines)_
-   [`7b29fe4`](https://github.com/stdlib-js/stdlib/commit/7b29fe431c795281b725bff2cc0911dda20c112c) - **refactor:** update `blas/ext/base/dapxsumkbn` to follow current project conventions _(by Suraj Kumar, Pranav, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Pranav Goswami
-   Suraj Kumar

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`df3c9b3`](https://github.com/stdlib-js/stdlib/commit/df3c9b368d8a3dd7dd38f8768deb53c2a780c055) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`42c921a`](https://github.com/stdlib-js/stdlib/commit/42c921ab62b8cdf789a9e76b06b18074e850af5e) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.11">

## 0.0.11 (2022-08-29)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.10">

## 0.0.10 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

