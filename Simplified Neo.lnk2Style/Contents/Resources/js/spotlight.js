Spotlight = {
	TriggerOnHover:false,
	last_userhost:'',
	
	e_setting:function (event) {
		var args = event.memo;
		if (args.key=='SpotlightUserMessagesOnHover')
			this.TriggerOnHover = args.value;
	},
	e_click: function (event, element) {
		var row = element.up('li');
		var userhost = row.getAttribute('data-userhost');
		
		this.set(userhost);
	},
	e_mover: function (event, element) {
		if (!this.TriggerOnHover) return;
		var row = element.up('li');
		var userhost = row.getAttribute('data-userhost');
		this.set(userhost);
	},
	e_mout: function (event, element) {
		if (!this.TriggerOnHover) return;
		this.set(false);
	},
	
	set: function (userhost) {
		$$('li.spotlight').invoke('removeClassName','spotlight');
		if (userhost && userhost !== this.last_userhost) {
			$$('li[data-userhost="'+userhost+'"]').invoke('addClassName','spotlight');
			this.last_userhost = userhost;
		} else {
			this.last_userhost = false;
		}
	},
	
	isCurrent: function (userhost) {
		return userhost === this.last_userhost;
	}
	
	
};

Event.observe(document,'dom:loaded', function () {
	Event.on(document, 'style:setting',							Spotlight.e_setting.bind(Spotlight));
	Event.on(document, 'click',		'li .nick',		Spotlight.e_click.bind(Spotlight));
	Event.on(document, 'mouseover',	'li .nick',		Spotlight.e_mover.bind(Spotlight));
	Event.on(document, 'mouseout',	'li .nick',		Spotlight.e_mout.bind(Spotlight));
	
});