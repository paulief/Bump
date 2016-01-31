exports.up = function(pgm) {
	pgm.createTable('playlists', {
		id: {
			type: 'serial',
			primaryKey: true
		},
		user_id: {
			type: 'integer',
			references: 'users'
		},
		name: {
			type: 'varchar(50)',
			notNull: true
		},
		create_dtm: {
			type: 'timestamp default now()'
		}
	});
};

exports.down = function(pgm) {
	pgm.dropTable('playlists');
};
