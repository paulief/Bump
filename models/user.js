var bookshelf = require('../helpers/bookshelf');

import { Playlist } from 'models/playlist';

var User = bookshelf.Model.extend({
	tableName: 'users',
	playlists: function() {
		return this.hasMany(Playlist);
	}
});

module.exports = User;
