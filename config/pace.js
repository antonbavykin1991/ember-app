/* jshint node: true */

module.exports = function  () {
	return {
    theme: 'minimal',
    color: 'blue',
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body', '.ember-view']
    },
    ajax: {
      trackMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
      trackWebSockets: true,
      ignoreURLs: []
    }
  };
}