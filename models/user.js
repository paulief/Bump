let bookshelf = require('../helpers/bookshelf');

//import { Playlist } from 'models/playlist';

let User = bookshelf.Model.extend({
	//instance properties
	tableName: 'users',
	playlists() {
		return this.hasMany('Playlist');
	}
}, {
	// class properties
	get(id) {
		return new this({ id: id }).fetch();
	}
});

module.exports = User;
