exports.up = function(pgm) {
	console.log(process.env.DATABASE_URL);
	pgm.createTable('users', {
		id: {
			type: 'serial'
		},
		username: {
			type: 'varchar(30)'
		},
		create_dtm: {
			type: 'timestamp default now()'
		}
	});
};

exports.down = function(pgm) {
	pgm.dropTable('users');
};