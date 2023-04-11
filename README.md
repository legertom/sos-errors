# sos-errors

A lightweight npm package for error handling and troubleshooting.

## Installation

To install sos-errors, run:

```sh
npm install sos-errors
```

## Usage
### `logErrorToFile(error, filepath)`
Logs an error object to a file.

Parameters
`error`: The error object to log.
`filepath`: The file path to log the error to.

Example
```js
const sosErrors = require('sos-errors');

try {
  throw new Error('Something went wrong');
} catch (error) {
  sosErrors.logErrorToFile(error, './errors.log');
}
```

###`addContextToError(error)`

Adds context information to an error object.

Parameters
`error`: The error object to add context to.
Returns
-The error object with added context information.
Example
```js
const sosErrors = require('sos-errors');

try {
  throw new Error('Something went wrong');
} catch (error) {
  const errorWithContext = sosErrors.addContextToError(error);
  console.error(errorWithContext);
}
```
### `createCustomError(code, message)`
Creates a custom error object with a custom code and message.

Parameters
-`code`: The custom error code.
-`message`: The custom error message.
Returns
The custom error object.
Example
```js
const sosErrors = require('sos-errors');

const customError = sosErrors.createCustomError('E001', 'Custom error message');
console.error(customError);
```
## Links

Tom Léger's Portfolio: [tomleger.dev](https://tomleger.dev)
Tom Léger's GitHub: [github.com/legertom](https://github.com/legertom)

## License
This project is licensed under the MIT License