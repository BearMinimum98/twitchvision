function TwitchPlayer(channel, element, width, height, callback) {
	this._element = element;
	swfobject.embedSWF("https://www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf", element.id, width.toString(), height.toString(), "11", null, {
		"initCallback": callback,
		"embed": 1,
		"channel": channel,
		"volume": 100,
		"auto_play": "true"
	},
	{
		"allowScriptAccess": "always",
		"allowFullScreen": "true"
	});
	this.playVideo = function() {
		return this._element.playVideo();
	};
	this.pausedVideo = function() {
		return this._element.pauseVideo();
	};
	this.mute = function() {
		return this._element.mute();
	};
	this.unmute = function() {
		return this._element.unmute();
	};
	this.onlineStatus = function() {
		return this._element.onlineStatus();
	};
	this.loadStream = function(streamId) {
		return this._element.loadStream(streamId);
	};
	this.loadVideo = function(videoId) {
		return this._element.loadVideo(videoId);
	}
}