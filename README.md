### Features

- Support ESImports with Easy to use imports;
- Easy manipulation of LOTR data;
- Query Information by using methods;
- SDK formatted in objects;

# LOTR
SDK for Lord of the rings OpenApi.

### Installing
```CLR
npm install;
```
To install dependencies.
```javascript
import LOTR from 'index.ts';
```
You can also use the default export, since the named export is just LOTR.
```javascript
const LOTR = require('index.js');
```
If you use require for importing, only default export is available:

### Example
> **NOTE:**  CommonJS usage in order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with require(), use the following approach:

```javascript
import LOTR from 'index.js';
//const LOTR = require('index.js'); // legacy way

// Request books information
LOTR.books.get()
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Optionally the request above could also be done as
LOTR.books.get({
    sort: {
		property: 'age',
		order:  asc // order: 'asc' | 'desc'
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getBooks() {
  try {
    const response = await LOTR.books.get();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```
>**NOTE:** async/await is part of ECMAScript 2017 and is not supported in Internet Explorer and older browsers, so use with caution.

```javascript
async function getMovies() {
  try {
	const authToken ='....';
    const response = await LOTR.movies.get(authToken);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```
>**NOTE:** most of the methods required auth token. You can access your Auth token by [sign in](https://the-one-api.dev/sign-up "sign in"). 

### Request configure
User can customize response by passing config object.
#### Filtering
Filtering can be performed by pass filter array into the config argument.

```javascript
async function getCharacters() {
  try {
    const response = await LOTR.character.get({
		filter: [
			race: 'Human'
		]
	});
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```
#### Sorting
Sorting can be performed by passing sort object into the config argument.

```javascript
async function getCharacters() {
  try {
    const response = await LOTR.character.get({
		sort: {
			property: 'age',
			order:  asc // order: 'asc' | 'desc'
		}
	});
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```
#### Pagination
Pagination can be performed by passing pagination object into the config argument.

```javascript
async function getCharacters() {
  try {
    const response = await LOTR.character.get({
		pagination: {
			limit: 100,
			page: 2,
			offset: 0
		}
	});
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```