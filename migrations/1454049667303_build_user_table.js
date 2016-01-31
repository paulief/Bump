exports.up = function(pgm) {
	pgm.createTable('users', {
		id: {
			type: 'serial',
			primaryKey: true
		},
		username: {
			type: 'varchar(30)',
			notNull: true
		},
		password: {
			type: 'varchar(30)', //need to change this
			notNull: true
		},
		create_dtm: {
			type: 'timestamp default now()'
		}
	});
};

exports.down = function(pgm) {
	pgm.dropTable('users');
};