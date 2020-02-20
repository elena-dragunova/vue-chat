const path = require('path');


module.exports = {
  /**
   * For right resolve aliases in webstorm ide.
   */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
