const nope = (methodName) => {
	throw `Method ${methodName} not implemented`;
};


/**
 * @type {IPluginManager}
 * @interface
 */
module.exports = (function() {
	return class IPluginManager {
		constructor(applicationPrefix) {}

		/**
		 * @return {Promise<Array<Plugin>>}
		 */
		getInstalled() {
			return nope('getInstalled');
		}

		/**
		 * @param {string} pluginName
		 * @return {Promise<undefined>}
		 */
		install(pluginName) {
			return nope('install');
		}

		/**
		 * @param {string} pluginName
		 * @return {Promise<undefined>}
		 */
		remove(pluginName) {
			return nope('remove');
		}

		/**
		 * @param {string} pluginName
		 * @return {Promise<undefined>}
		 */
		update(pluginName) {
			return nope('update');
		}

		/**
		 * @param {string} query
		 * @return {Promise<Array<Plugin>>}
		 */
		search(query) {
			return nope('search');
		}
	};
})();
