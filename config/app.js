/*
|--------------------------------------------------------------------------
| Module Exports
|--------------------------------------------------------------------------
*/
	module.exports = {

		/*
		|--------------------------------------------------------------------------
		| App Config
		|--------------------------------------------------------------------------
		*/
			//port: process.env.PORT || 3014,
			name: 'Microservice EBCC Validation',
			env: 'qa', // prod, qa, dev,
			port: {
				dev: process.env.PORT || 4014,
				qa: process.env.PORT || 5014,
				prod: process.env.PORT || 3014,
			},

		/*
		|--------------------------------------------------------------------------
		| Token
		|--------------------------------------------------------------------------
		*/
			secret_key: 'T4pagri123#',
			token_expiration: 7, // Days
			token_algorithm: 'HS256'
	}
