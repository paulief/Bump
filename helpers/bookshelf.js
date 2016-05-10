var config 	 = require('config');
var dbConfig = config.get('Bump.dbConfig');

var knex = require('knex')({
	client: 'pg',
	connection: {
		host: dbConfig.host,
		port: dbConfig.port,
		user: dbConfig.username,
		database: dbConfig.name,
		password: dbConfig.password,
		charset: 'utf8'
	}
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
