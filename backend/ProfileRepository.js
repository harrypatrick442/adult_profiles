module.exports = new (function(){
	const dalProfiles = require('./DalProfiles');
	const Cache = require('cache').Cache;
	const ProfilesRouter = require('./ProfilesRouter');
	var cache = new Cache({
		name:'Profiles Cache',
		getFromDatabaseById:dalProfiles.getByUserId,
		updateToDatabase:updateToDatabase,
		merge:merge,
		router:ProfilesRouter,
		provideRemote:true
	});
	ProfilesRouter.setProfilesCache(cache);
	this.getByUserIdJSONString = function(userId){
		return cache.getJSONStringById(userId);
	};
	this.getByUserIdRaw = function(userId){
		return cache.getById(userId);
	};
	/*this.getByUserIdWrapped = function(userId){
		return new Promise(function(resolve, reject){
			cache.getById(userId).then(function(raw){
				resolve(raw?Profile.fromJSON(raw):null);
			}).catch(reject);
		});
	};*/
	this.update = function(userId, profile){
		return cache.update(userId, profile);	
	};
	function updateToDatabase(userId, profile){
		return dalProfiles.set(userId, profile);
	}
	function merge(incoming, local){
		return incoming;
	}
})();