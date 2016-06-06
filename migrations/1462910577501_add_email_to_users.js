exports.up = function(pgm) {
	pgm.addColumns('users', {
		email: {
			type: 'varchar(255)',
			notNull: true,
			unique: true
		}
	});
};

exports.down = function(pgm) {
	pgm.dropColumns('users', ['email']);
};
