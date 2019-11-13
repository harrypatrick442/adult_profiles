module.exports = new (function(){
	const DalProfiles = require('./../DAL/DalProfiles');
	const SearchMembersCache = require('./../cache/SearchMembersCache');
	const S = require('./../strings/S');
	this.search = function(req, callback){
		var ticket = req[S.TICKET];
		_search(req[S.CRITERIA]).then(function(members){
			callback({
				[S.SUCCESSFUL]:true,
				[S.MEMBERS]:members, 
				[S.TICKET]:ticket
			});
		}).catch(function(err){
			console.error(err);
			callback({
				[S.SUCCESSFUL]:false,
				[S.TICKET]:ticket
			});
		});
	};
	function _search(criteria){
		return new Promise(function(resolve, reject){
			SearchMembersCache.search(criteria).then(function(members){
				if(members){
					resolve(members);
					return;
				}
				DalProfiles.searchMembers(criteria).then(resolve).catch(reject);
			}).catch(reject);
		});
	}
})();