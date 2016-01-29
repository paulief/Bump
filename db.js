/*

PROBABLY WILL DELETE THIS FILE, WAS GONNA USE IT FOR MIGRATIONS

*/

var Q 				 = require('q');
var pg         = require('pg');

var config     = require('config');
var dbConfig   = config.get('Bump.dbConfig');
var connString = buildConnString(dbConfig);
process.env.DATABASE_URL = connString;

var db = {};

db.createTable = function(queryString) {
	var deferred = Q.defer();

	// TODO: get actual error messages
	pg.connect(connString, function(err, client, done) {
		if (err) {
			deferred.reject({
				error: 'Connection Error',
				message: 'Could not connect to DB'
			});
		} else {
			client.query(queryString, function(err) {
				if (err) {
					deferred.reject({
						error: 'Query Error',
						message: 'Could not execute query'
					});
				} else { //succesfully created
					deferred.resolve('Table successfully created');
				}
			});
		}
	});
};

module.exports = db;

function buildConnString(dbConfig) {
	return [
		'postgres://',
		dbConfig.username,
		':',
		dbConfig.password,
		'@',
		dbConfig.host,
		':',
		dbConfig.port,
		'/',
		dbConfig.name
	].join('');
}