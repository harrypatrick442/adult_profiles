module.exports = new (function(){
	const S = require('strings').S;
	const Core = require('core');
	const each = Core.each;//const ProfilePropertyNames = require('./../property_names/ProfilePropertyNames');
	const Iterator = Core.Iterator;
	Core.Linq;
	const ProfileRepository = require('./ProfileRepository');
	const ProfilePropertyNames = require('./ProfilePropertyNames');
	const Client = require('client');
	const UsersRouter = Client.UsersRouter;
	var users;
	var initialized = false;
	this.initialize = function(usersIn){
		if(initialized)throw new Error('Already initialized');
		initialized = true;
		users = usersIn;
	};
	this.updateProfile = function(req, user){
		return new Promise(function(resolve, reject){
			var userId = user.getId();
			ProfileRepository.getByUserIdRaw(userId).then(function(profile){
				var hasStandardChanges=false;
				if(!profile)profile ={};//todo room for efficiency improvements here
				if(req[S.INTERVIEW]){
					hasStandardChanges=true;
					updateProfile_Interview(profile, req[S.INTERVIEW]);
				}
				if(req[S.LOCATION]){
					hasStandardChanges=true;
					updateLocation(profile, req[S.LOCATION]);
				}
				updateMultimediaCategories(profile, req[S.MULTIMEDIA_CATEGORIES]);
				ProfileRepository.update(userId, profile).then(resolve).catch(reject);
				sendProfileUpdatesToAllUserDevices(userId, profile);
			}).catch(reject);
		});
	};
	this.getMyProfile = function(req, user){
		return new Promise(function(resolve, reject){
			ProfileRepository.getByUserIdRaw(user.getId()).then(function(profile){
				if(!profile)profile={};//todo this is temporary ideally some kind of empty join on a table that gets created when a user joins. like tblAccounts.
				resolve(profile);
			}).catch(reject);
		});
	};
	this.getProfile = function(req, userId){
		return new Promise(function(resolve, reject){
			ProfileRepository.getByUserIdRaw(userId).then(function(profile){
				if(!profile)profile={};//todo this is temporary ideally some kind of empty join on a table that gets created when a user joins. like tblAccounts.
				resolve(profile);
			}).catch(reject);
		});
	};
	function sendProfileUpdatesToAllUserDevices(userId, profile){
		var msg = {type:S.CLIENT_PROFILE_UPDATES, userId:userId, profile:profile};	
		var user = users.getById(userId);
		console.log('by id user');
		if(user)user.getDevices().sendMessage(msg);
		UsersRouter.get().sendToServersWith(userId, msg);
	}
	function updateLocation(profile, i){
		var location = profile[S.LOCATION];
		if(!location){
			location = {};
			profile[S.LOCATION] = location;
		}
		location[S.CHANGED]=true;
		each(ProfilePropertyNames[S.LOCATION], function(propertyName){
			location[propertyName]=i[propertyName];
		});
	}
	function updateMultimediaCategories(profile, multimediaCategoriesChanged){
		console.log(multimediaCategoriesChanged);
		if(!multimediaCategoriesChanged)return;
		var multimediaCategoriesExisting = profile[S.MULTIMEDIA_CATEGORIES];
		if(!multimediaCategoriesExisting)
		{ 
			multimediaCategoriesExisting=[];
			profile[S.MULTIMEDIA_CATEGORIES]=multimediaCategoriesExisting;
		}
		each(multimediaCategoriesChanged, function(multimediaCategoryChanged){
			var matchingMultimediaCategory = multimediaCategoriesExisting.where(
			multimediaCategory=>multimediaCategory[S.MULTIMEDIA_CATEGORY_ID]==multimediaCategoryChanged[S.MULTIMEDIA_CATEGORY_ID])
			.firstOrDefault();
			if(!matchingMultimediaCategory){
				matchingMultimediaCategory={};
				multimediaCategoriesExisting.push(matchingMultimediaCategory);
			}
			each(ProfilePropertyNames[S.MULTIMEDIA_CATEGORY] , function(propertyName){
					matchingMultimediaCategory[propertyName]=multimediaCategoryChanged[propertyName];
			});
			matchingMultimediaCategory[S.CHANGED]=true;
		})
	}
	function updateProfile_Interview(profile, i){
		var interview = profile[S.INTERVIEW];
		if(!interview){
			interview ={};
			profile[S.INTERVIEW] = interview;
		}
		if(i[S.HAVE_OWN_CHANGES]){
			interview[S.CHANGED]=true;
			each(ProfilePropertyNames[S.INTERVIEW], function(propertyName){
				interview[propertyName]=i[propertyName];
			});
		}
		if(i[S.PHYSICAL]){
			updateProfile_Interview_Physical(interview, i[S.PHYSICAL]);
		}
		if(i[S.PERSONALITY]){
			updateProfile_Interview_Personality(interview, i[S.PERSONALITY]);
		}
	}
	function updateProfile_Interview_Physical(interview, i){
		var physical = interview.physical;
		if(!physical){
			physical = {};
			interview[S.PHYSICAL] = physical;
		}
		physical[S.CHANGED]=true;
		each(ProfilePropertyNames[S.PHYSICAL], function(propertyName){
			physical[propertyName]=i[propertyName];
		});
	}
	function updateProfile_Interview_Personality(interview, i){
		var personality = interview[S.PERSONALITY];
		if(!personality){
			personality = {};
			interview[S.PERSONALITY] = personality;
		}
		personality[S.CHANGED]=true;
		each(ProfilePropertyNames[S.PERSONALITY], function(propertyName){
			personality[propertyName]=i[propertyName];
		});
	}
})();