'use strict';



/**
 * @interface
 */
const IPluginManager = require('./lib/i-plugin-manager');
const npm = require('npm');


/**
 * @type {PluginManager}
 * @implements {IPluginManager}
 */
module.exports = (function() {
	'use strict';
	return class PluginManager extends IPluginManager {
		constructor(applicationName) {
			super();

			/**
			 * @type {string}
			 * @private
			 */
			this._prefix = applicationName;

			/**
			 * @type {Promise<undefined>}
			 * @private
			 */
			this._initPromise = new Promise((resolve, reject) => {
				npm.load('', () => resolve());
			});
		}
	};
})();
