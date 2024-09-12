# simplest-password-create

A simple library for creating passwords of a given length from a given set of characters.

## Install

```commandline
npm i simplest-password-create
```

## Usage

The library contains one function `createPassword(length, charSetsConfig)`

| Parameter      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| length         | Password length. Default is 10                                                                                                                                                                                                                                                                                                                                                                                                                      |
| charSetsConfig | An array of strings containing the names of the character sets from which the password should be created. The array can contain `"latinLower"`, `"latinUpper"`, `"digits"`, `"punctuation"` and `"other"` values. Any other values ​​will be ignored. Values ​​may be repeated, which will increase the likelihood of characters from this set being included in the password. By default `charSetsConfig = ['latinLower', 'latinUpper', 'digits']` |

## Example

```js
const { createPassword } = require("simple-password-create");

console.log(createPassword());
console.log(createPassword(20, ["digits", "latinLower"]));
console.log(createPassword(5, ["latinLower", "other"]));
```
