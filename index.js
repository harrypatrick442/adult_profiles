const Helpers = require('helpers');module.exports={
	get DalProfiles(){return require('./backend/DalProfiles')},
	get ProfileRepository(){return require('./backend/ProfileRepository')},
	get SearchMembersCache(){return require('./backend/SearchMembersCache')},

	getScriptsRelativePath:Helpers.getGetScriptsRelativePath(),
	getScriptsAbsolutePath:Helpers.getGetScriptsAbsolutePath()
};