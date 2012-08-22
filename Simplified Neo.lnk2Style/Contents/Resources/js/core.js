StyleCore = {
	last_message_nick:'',
	last_message_node:null,
	ready:false,
	TOTAL_COLORS:20,
	messageQueue: [],
	messageQueueTask: null,
	
	settings: {
		CombinedMessages:false,
		Emoticons:false,
		FontSize:12,
		Variant:'',
		EmoticonSet:''
	},
	
	templates: {
		row:					new Template('<span class="star"><span class="button"></span><span class="hit" title="Star or Unstar this message"></span></span><span class="time">#{time}</span><span class="contents">#{contents}</span>'),
		msgMessage:				new Template('<span class="gutter nick" title="#{nick_userhost}">#{nick}</span><i>#{description}</i>'),
		msgAction:				new Template('<span class="gutter"></span><i><span class="nick" title="#{nick_userhost}">#{nick}</span> #{description}</i>'),
		msgRaw:					new Template('#{description}'),
		msgJoin:				new Template('<span class="gutter nick">#{nick}</span><i><span class="userhost parens">#{nick_userhost}</span> joined the channel.</i>'),
		msgPart:				new Template('<span class="gutter nick">#{nick}</span><i><span class="userhost parens">#{nick_userhost}</span> left the channel.<span class="parens">#{description}</span></i>'),
		msgQuit:				new Template('<span class="gutter nick">#{nick}</span><i><span class="userhost parens">#{nick_userhost}</span> left IRC. <span class="parens">#{description}</span></i>'),
		msgQuitReason:			new Template('You left IRC. <span class="parens">#{description}</span>'),
		msgKick:				new Template('<span class="gutter nick">#{nick}</span><i>kicked <span class="nick2">#{extra}</span> from the channel. <span class="parens">#{description}</span></i>'),
		msgModeChange:			new Template('<span class="gutter nick">#{nick}</span><i>sets mode <span class="mode">#{description}</span></i>'),
		msgModeReply:			new Template('Mode is <span class="mode">#{description}</span>'),
		msgNick:				new Template('<span class="gutter nick2">#{nick}</span><i>is now known as <span class="nick">#{description}</span>.</i>'),
		msgTopicChange:			new Template('<span class="gutter nick">#{nick}</span><i> changed the topic to <span class="topic">#{description}</span></i>'),
		msgTopicReply:			new Template('Topic is <span class="topic">#{description}</span>'),
		msgTopicDetailsReply:	new Template('Set by <span class="nick">#{nick}</span> on <span class="date">#{extra}</span>'),
		msgNotice:				new Template('<span class="gutter nick">#{nick}</span><i>#{description}</i>'),
		msgNoticeAuth:			new Template('#{description}'),
	},
	
	hashColor:function (str) {
		//Color hashing courtesy of the Whisper style.
		var h = 0;
		for (i = 0; i < str.length; i++) {
			h += str.charCodeAt(i);
			h += (h << 10);
			h ^= (h >> 6);
		}
	
		h += h << 3;
		h ^= h >> 11;
		h += h << 15;
		return Math.abs(h % this.TOTAL_COLORS);
	},
	
	e_ready:function (event) {
		this.ready = true;
		document.body.addClassName('ready');
		$('overlay').fade();
	},
	e_setting:function (event) {
		var args = event.memo;
		if (args.key in this.settings) this.settings[args.key] = args.value;
		
		switch (args.key) {
		case 'Variant':
			document.body.className = document.body.className.replace(/(^|\s+)variant-[\w]+(\s+|$)/,' ').strip();
			if (args.value) document.body.addClassName('variant-'+args.value);
			break;

		case 'FontSize':
			document.body.setStyle({fontSize:args.value+'px'});
			break;
			
		case 'CombinedMessages':
			if (args.value) document.body.addClassName('grouped-messages');
			else document.body.removeClassName('grouped-messages');
			break;	
		}
	},
	e_appendMessage:function (event) {
		var args = event.memo;
		var that = this;

		this.messageQueue.push(args);
		if (!!this.messageQueueTask) {
			this.messageQueueTask.cancel()
			this.messageQueueTask.start();
		} else {
			this.messageQueueTask = Timed.after(75, function () {
				var fragment = document.createDocumentFragment();
				
				while (that.messageQueue.length) {
					args = that.messageQueue.shift();
				
					//BUILD MESSAGE NODE
					var node = new Element('li');
					node.id = args.id;
				    node.className = [
						args.type,
						'usercolor-' + (args.nick_color && args.nick_userhost?that.hashColor(args.nick_userhost):args.nick_color),
						args.direction ? 'outgoing' : 'incoming',
						args.highlight ? 'highlight' : 'nohighlight',
						args.starred ? 'starred' : 'nostarred',
						args.embed ? 'embed' : 'noembed',
						args.unencrypted ? 'unencrypted' : '',

						'grouping-' + (args.type === 'msgMessage' && (args.nick === that.last_message_nick ? 'next' : 'first')) ,

						args.nick_userhost ? 'userhost' : 'server',
						args.nick_userhost && Spotlight.isCurrent(args.nick_userhost) ? 'spotlight' : '',
						/^msg(?:Message|Action|Notice)$/.test( args.type ) ? 'user' : 'system'
				    ].join(' ');

					node.setAttribute('data-nick', args.nick);
					node.setAttribute('data-userhost', args.nick_userhost);

					that.last_message_nick = args.type === 'msgMessage' ? args.nick : '';
					that.last_message_node = node;

					//PREPARE DESCRIPTION
					args.description = (function (text) {
						// Un-escape non-breaking spaces in text.
					    text = text.replace( /&nbsp;/g, ' ' );

						// Process links in text.
						text = linkify( text, { callback: function( text, href ) {
							if ( href ) { // Link.
								if ( href !== text ) text = '<a href="' + href + '" title="Link is ' + href + '">' + text + '</a>';
								else text = '<a href="' + href + '">' + text + '</a>';
							}
							return text;
						}});

					    // Re-escape non-breaking spaces in text and return.
					    return text.replace( / {2}/g, ' &nbsp;' );
					})(args.description);

					args.contents = that.templates[args.type].evaluate(args);

					node.innerHTML = that.templates.row.evaluate(args);

					if (args.current) {
						fragment.appendChild(node);
					} else {
						$('history').appendChild(node);
					}					
				
				}
				
				$('current').appendChild(fragment);
			});
		}
		
		
	},
	e_removeFirstMessage: function () {
		var y = scroller.scrollTo(),
		h1 = document.body.scrollHeight,
		h2;	

		$$('li').first().remove();

		h2 = document.body.scrollHeight;

		// Keep scroll position from "drifting" when scrolled back.
		Scroller.scrollTo( Math.max( 0, y - h1 + h2 ), true, true );
	},
	e_removeMessage: function (event) {
		var message_id = event.memo.messageID;		
		if ($(message_id)) $(message_id).remove();
		Scroller.update();
	},
	
	e_break: function (event) {
		$$('li.break').invoke('removeClassName', 'break');
		if (event.memo.set) this.last_message_node.addClassName('break');
	},
	
	e_focus: function (event) {
		$('overlay').fade({duration:0.2});
	},
	
	e_blur: function (event) {
		$('overlay').appear({duration:0.2});
	}
};

Event.observe(document,'dom:loaded', function () {
	Event.observe(document, 'style:appendMessage',		StyleCore.e_appendMessage.bind(StyleCore));
	Event.observe(document, 'style:setting',			StyleCore.e_setting.bind(StyleCore));
	Event.observe(document, 'style:ready',				StyleCore.e_ready.bind(StyleCore));
	Event.observe(document, 'style:removeFirstMessage',	StyleCore.e_removeFirstMessage.bind(StyleCore));
	Event.observe(document, 'style:removeMessage',		StyleCore.e_removeMessage.bind(StyleCore));
	Event.observe(document, 'style:break',				StyleCore.e_break.bind(StyleCore));
	Event.observe(document, 'style:focus',				StyleCore.e_focus.bind(StyleCore));
	Event.observe(document, 'style:blur',				StyleCore.e_blur.bind(StyleCore));
});