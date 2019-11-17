const RepositoriesHelper = require('repositories_helper');module.exports={
	get DalProfiles(){return require('./backend/DalProfiles')},
	get ProfileRepository(){return require('./backend/ProfileRepository')},
	get SearchMembersCache(){return require('./backend/SearchMembersCache')},

	getScriptsRelativePath:RepositoriesHelper.getGetScriptsRelativePath(),
	getScriptsAbsolutePath:RepositoriesHelper.getGetScriptsAbsolutePath()
};