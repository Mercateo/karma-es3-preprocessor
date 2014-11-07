# karma-es3-preprocessor

A Karma preprocessor for ES3 safe recast of reserved phrases.
Depends on es3-safe-recast package.

## Install 

```sh
$ npm install --save-dev karma-es3-preprocessor
```

## Usage

Modify your karma.conf.js like shown below:
```json
{
  preprocessors: [
    'src/**/*.js': 'es3-safe-recast'
  ]
}
``` 
