const RepositoriesHelper = require('repositories_helper');module.exports={
	get DalProfiles(){return require('./backend/DalProfiles')},
	get DalSearchMembersCriteria(){return require('./backend/DalSearchMembersCriteria')},
	get MembersRepository(){return require('./backend/MembersRepository')},
	get ProfileHandler(){return require('./backend/ProfileHandler')},
	get ProfileHelper(){return require('./backend/ProfileHelper')},
	get ProfileRepository(){return require('./backend/ProfileRepository')},
	get ProfilesRouter(){return require('./backend/ProfilesRouter')},
	get SearchMembersCache(){return require('./backend/SearchMembersCache')},
	get Tables(){return require('./db/TablesMysql');},
	getScriptsRelativePath:RepositoriesHelper.getGetScriptsRelativePath(),
	getScriptsAbsolutePath:RepositoriesHelper.getGetScriptsAbsolutePath(),
	getStylesRelativePath:RepositoriesHelper.getGetStylesRelativePath(),
	getStylesAbsolutePath:RepositoriesHelper.getGetStylesAbsolutePath()
};