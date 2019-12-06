module.exports = new (function(){
	const S = require('strings').S;
	const Core = require('core');
	const Client = require('client');
	const UsersRouter = Client.UsersRouter;
	var initialized = false;
	var users;
	this.initialize = function(usersIn){
		users = usersIn;
		if(initialized)throw new Error('Already initialized');
		UsersRouter.get().addMessageCallback(S.CLIENT_PROFILE_UPDATES, clientProfileUpdates);
		initialized = true;
		console.log('INITIALIZED');
	};
	function clientProfileUpdates(msg, channel){
		console.log('got client profile updates');
		var user = users.getById(msg.userId);
		if(!user)return;
		user.getDevices().sendMessage(msg);
	}
	
})();