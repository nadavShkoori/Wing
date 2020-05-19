const path = require('path');

module.exports = {
  entry: './scripts/login.js',
  output: {
    filename: 'login.js',
    path: path.resolve(__dirname, 'scripts')
  }
}