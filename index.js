const RepositoriesHelper = require('repositories_helper');module.exports={
	get DalProfiles(){return require('./backend/DalProfiles')},
	get DalSearchMembersCriteria(){return require('./backend/DalSearchMembersCriteria')},
	get MembersRepository(){return require('./backend/MembersRepository')},
	get ProfileHelper(){return require('./backend/ProfileHelper')},
	get ProfileRepository(){return require('./backend/ProfileRepository')},
	get ProfilesRouter(){return require('./backend/ProfilesRouter')},
	get SearchMembersCache(){return require('./backend/SearchMembersCache')},

	getScriptsRelativePath:RepositoriesHelper.getGetScriptsRelativePath(),
	getScriptsAbsolutePath:RepositoriesHelper.getGetScriptsAbsolutePath()
};