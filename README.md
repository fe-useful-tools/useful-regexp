<p align="center">
  <h1 align="center"> USEFUL-REGEXP </h1>
</p>
<p align="center">
  <img alt="license" src="https://img.shields.io/npm/l/useful-regexp?style=flat-square">
  <img alt="releases" src="https://badgen.net/github/releases/fe-useful-tools/useful-regexp?style=flat-square">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/fe-useful-tools/useful-regexp?style=flat-square&colorB=51C838">
  <img alt="downloads" src="https://img.shields.io/npm/dt/useful-regexp?style=flat-square">
  <img alt="pkg dependents" src="https://badgen.net/github/dependents-pkg/fe-useful-tools/useful-regexp?style=flat-square">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/useful-regexp?style=flat-square">
</p>

# useful-regexp
Useful regex patterns and functions  for easier programming.

The repository is a derivative library of the following projects, designed to provide an API out of the box.

[ChinaMobilePhoneNumberRegex](https://github.com/VincentSit/ChinaMobilePhoneNumberRegex)

[any-rule](https://github.com/any86/any-rule)

## :wrench: Getting Started

### :card_file_box: Documentation

You can find for more details, API on [📚 Documentation](https://fe-useful-tools.github.io/useful-regexp/).

## :package: Install

useful-regexp was designed to work both in the browser and in Node.js.

### Node.js

To get started with useful-regexp in your Node.js project, simply add the dependency with NPM.

```shell
$ npm install useful-regexp --save
```

Then include it in your script:

```javascript
const regexp = require('useful-regexp');
// import * as regexp from 'useful-regexp' // ES 2015
console.log(regexp.isEmail('muikinghk@yahoo.com.hk'));
```

### Browser

```html
<script src="lib/useful-regexp/index.min.js"></script>
<script>
  usefulRegexp.isTel('0341-86091234');
</script>
```

### Typescript

useful-regexp ships with official type declarations for TypeScript in NPM package out of the box.

```shell
$ yarn add useful-regexp
# or
$ npm install --save useful-regexp
```

Import and use in your Typescript file

```typescript
import { isChineseName } from 'useful-regexp';

const name = '喜塔腊·尔晴';

const isChinese = isChineseName(name);
```

## :rocket: Download

Download the latest version of useful-regexp at https://github.com/fe-useful-tools/useful-regexp/releases
