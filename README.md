# karma-es3-preprocessor

A Karma preprocessor for ES3 safe recast of reserved phrases.

## Install 

```sh
$ npm install --save-dev karma-es3-preprocessor
```

## Usage

In your karma.conf.js add this preprocessor like shown below:
```json
{
  preprocessors: [
    'src/**/*.js': 'es3-safe-recast'
  ]
}
``` 
