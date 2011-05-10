// ========================================================================== //
// Misc
// ========================================================================== //

// Focus the channel on window click.
Event.observe(window, 'click', function() {
	if (window.linkinus) linkinus.focus();
});

// ========================================================================== //
// CONSOLE LOGGING
// ========================================================================== //

window.debug = {
	debug_level:0,
	getLevel:function() {
		return this.debug_level;
	},
	log:function() {
		if (this.debug_level) console.log( Array.prototype.slice.call(arguments) );
	}
};

window.Phonograph = {
	history:[],
	recording:true,
	fire:function (target, action, args) {
		if (this.recording) this.history.push({action:action, args:args});
		Event.fire(target, action, args);
	},
	output:function () {
		console.log(Object.toJSON(this.history));
	}
};

// ========================================================================== //
// Style Preferences / States
// ========================================================================== //

// Enable or disable emoticons.

function setEmoticonsEnabled( state ) {
	window.debug.log('Linkinus.setEmoticonsEnabled', state);
	Phonograph.fire(document, "style:setting", {key:'Emoticons', value:state});
}

// Enable or disable "combined messages"

function setCombinedMessagesEnabled( state ) {
	window.debug.log('Linkinus.setCombinedMessagesEnabled', state);
	Phonograph.fire(document, "style:setting", {key:'CombinedMessages', value:state});
}

// Enable or disable "spotlight" link hover mode.

function setSpotlightUserMessagesOnHoverEnabled( state ) {
	window.debug.log('Linkinus.setSpotlightUserMessagesOnHoverEnabled', state);
	Phonograph.fire(document, "style:setting", {key:'SpotlightUserMessagesOnHover', value:state});
}

// Set font size.
function setFontSize( size ) {
	window.debug.log('Linkinus.setFontSize', size);
	Phonograph.fire(document, "style:setting", {key:'FontSize', value:size});
}



// When all initial chat messages and unfocus has been called, this is called.
function setReady() {
	window.debug.log('Linkinus.setReady');
	Phonograph.fire(document, "style:ready");
}

// Update the topic. (Not in the app - yet?).

function setTopic( text ) {
	window.debug.log('Linkinus.setTopic',text);
	Phonograph.fire(document, "style:topicChanged", {topic:text});
}

// Change style variant.

function setVariant( name ) {
	window.debug.log('Linkinus.setVariant',name);
	Phonograph.fire(document, "style:setting", {key:'Variant', value:name});
}

function setEmoticonSet( name ) {
	window.debug.log('Linkinus.setEmoticonSet', name);
	Phonograph.fire(document, "style:setting", {key:'EmoticonSet', value:name});
}

// ========================================================================== //
// Messages
// ========================================================================== //

// Called every time a new chat message is added.

function appendMessage( arr ) {
	// Map array of arguments (from app) into something more useful.
	var args = {},
	arg_map = [ 'type', 'id', 'nick', 'description', 'time', 'nick_color',
		'extra', 'current', 'highlight', 'starred', 'embed', 'direction',
		'nick_image', 'context', 'nick_userhost', 'unencrypted' ];
	
	for (var i=0;i<arg_map.length;i++) args[ arg_map[i] ] = arr[i];
	
	// msgTopicReply and msgTopicChange are both used to set the topic, but for
	// some reason, msgTopicReply seems to get spammed on style redraw, so use
	// the "topic" msgRaw in its place for chat messages.
	
	if ( args.type === 'msgTopicChange' ) {
		setTopic( args.description );
	} else if ( args.type === 'msgTopicReply' ) {
		setTopic( args.description );
		return;
	} else if ( args.type === 'msgRaw' && /^Topic is/.test( args.description ) ) {
		args.description = args.description.replace( /^Topic is "(.*)"$/, '$1' );
		setTopic( args.description );
		args.type = 'msgTopicReply';
	}
	
	window.debug.log('Linkinus.appendMessage', args);
	Phonograph.fire(document, "style:appendMessage", args);
	
	/*
	
	The Message type (string). Possible values are:
		msgMessage
		msgAction
		msgRaw
		msgJoin
		msgPart
		msgQuit
		msgKick
		msgModeChange
		msgNick
		msgTopicChange
		msgTopicDetails
		msgTopicDetailsReply
		msgNotice
		msgNoticeAuth
	The unique post id (string),
	The user's nickname (string),
	The message body (often called the description),
	The timestamp (string). Format HH:MM,
	The nick colour key (integer). Possible values are between 0 and 20,
	Any extra data,
	Message type (integer). Possible values are:
		0 = History,
		1 = Current,
	Message is highlight (integer). Possible values are:
		0 = False,
		1 = True,
	Message is starred (integer). Possible values are:
		0 = False,
		1 = True,
	Message has embeddable content (integer). Possible values are:
		0 = False,
		1 = True,
	Message direction (integer). Possible values are:
		0 = incoming,
		1 = outgoing,
	User image url (string).
	Message location
	Userhost,
	Display unencrypted. Possible values are:
		0 = False,
		1 = True,
	
	*/
	
	
}




// Called when the channel scrollback reaches maximum.

function deleteFirstMessage() {
	window.debug.log('Linkinus.deleteFirstMessage');
	Phonograph.fire(document, "style:removeFirstMessage");
}

// Called when a message needs to be removed.

function removeMessage( id ) {
	window.debug.log('Linkinus.removeMessage', id);
	Phonograph.fire(document, "style:removeMessage", {messageID:id});
}

// Add a visible dividing line if "Insert breaks when losing focus" is enabled.

function addBreak() {
	window.debug.log('Linkinus.addBreak');
	Phonograph.fire(document, "style:addBreak");
	Phonograph.fire(document, "style:break", {set:true});
}

// Remove the dividing line.

function removeLastBreak() {
	window.debug.log('Linkinus.removeLastBreak');
	Phonograph.fire(document, "style:removeBreak");
	Phonograph.fire(document, "style:break", {set:false});
}

// ========================================================================== //
// User Feedback
// ========================================================================== //

// Called when a visible chat window loses focus.

function unfocus() {
	window.debug.log('Linkinus.unfocus');
	Phonograph.fire(document, "style:blur");
}

// Called when a visible chat window gains focus.

function focus() {
	window.debug.log('Linkinus.focus');
	Phonograph.fire(document, "style:focus");
}

// Called when a chat message has been un-starred in the H&S window

function markAsUnstarred( id ) {
	window.debug.log('Linkinus.markAsUnstarred', id);
	Phonograph.fire(document, "style:unstar", {messageID:id});
}

// ========================================================================== //
// Chat Navigation
// ========================================================================== //

// Called to scroll chat to the bottom (conditionally or forced).

function scrollToBottom( force ) {
	window.debug.log('Linkinus.scrollToBottom', force);
	Phonograph.fire(document, "style:scrollTo", {target:'bottom', forced:force});
}

// Called when a specific message should be scrolled to.

function scrollTo( id ) {
	window.debug.log('Linkinus.scrollTo', id);
	Phonograph.fire(document, "style:scrollTo", {target:'message', messageID:id});
}

// Called when the last break should be scrolled to.

function scrollToLastBreak() {
	window.debug.log('Linkinus.scrollToLastBreak');
	Phonograph.fire(document, "style:scrollTo", {target:'break'});
}

function prevHighlight() {
	window.debug.log('Linkinus.prevHighlight');
	Phonograph.fire(document, "style:scrollTo", {target:'prevHighlight'});
}

function nextHighlight() {
	window.debug.log('Linkinus.nextHighlight');
	Phonograph.fire(document, "style:scrollTo", {target:'nextHighlight'});
}


// ========================================================================== //
// Misc
// ========================================================================== //

function showConnectionHintBox( network, server, nickname, realname ) {
	window.debug.log('Linkinus.showConnectionHintBox',{ network:network, server:server, nickname:nickname, realname:realname });
	Phonograph.fire(document, "style:showConnectionHintBox", { network:network, server:server, nickname:nickname, realname:realname });
}

function hideConnectionHintBox() {
	window.debug.log('Linkinus.hideConnectionHintBox');
	Phonograph.fire(document, "style:hideConnectionHintBox");
}
