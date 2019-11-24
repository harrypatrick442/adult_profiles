module.exports = new (function(){
	const MESSAGE='message';
	const EventEnabledBuilder = require('core').EventEnabledBuilder;
	const ItemTypes = require('enums').ItemTypes;
	const InterserverCommunication = require('interserver_communication');
	const ItemRouter = InterserverCommunication.ItemRouter;
	var _profilesRouter;
	this.get=function(){
		if(!_profilesRouter){
			_profilesRouter = new ProfilesRouter();
		}
		return _profilesRouter;
	};
	function ProfilesRouter(){
		EventEnabledBuilder(this);
		var self = this;
		var profilesCache;
		var itemRouter = new ItemRouter({itemType:ItemTypes.PROFILE, getIds:getIds});
		this.getChannels=itemRouter.getChannels;
		this.getRoutingTable=itemRouter.getRoutingTable;
		this.getMyIp = itemRouter.getMyIp;
		this.sendToServersWith=itemRouter.sendToServersWithItem;
		this.getSendToServerWithTryHandle = itemRouter.getSendToServerWithItemTryHandle
		this.has = itemRouter.hasItem;
		this.add=itemRouter.addItem;
		this.remove = itemRouter.removeItem;
		this.setProfilesCache = function(value){
			profilesCache=value;
		};
		itemRouter.incoming = incoming;
		function getIds(){
			return profilesCache.getLocalIds();
		}
		function incoming(msg, channel, itemId){
			validateHasProfileAndSendRoutingTableIfNecessary(itemId);
			dispatchOnMessage(msg, channel);
		}
		function validateHasProfileAndSendRoutingTableIfNecessary(itemId, channel){
			if(!itemId)return;
			if(profilesCache.hasLocal(itemId))return;
			itemRouter.sendRoutingTable(channel.getIp());
		}
		function dispatchOnMessage(msg, channel){
			var msg = {type:MESSAGE, msg:msg, channel:channel.getPublic()};
			self.dispatchEvent(msg);
		}
	}
})();