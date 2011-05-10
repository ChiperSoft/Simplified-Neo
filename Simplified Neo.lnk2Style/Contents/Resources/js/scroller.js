Scroller = {
	ready: false,
	is_scrolling:false,
	effect:null,
	current_scroll:0,
	smooth_scrolling:0.2,
	e_ready: function () {
		this.ready = true;
		this.scrollToBottom(true);
	},
	
	e_scroll: function (event) {
		if (!this.ready) return; //ignore scroll messages if the document isn't ready.
		
		var args = event.memo;
		switch (args.target) {
		case 'bottom':
			this.scrollToBottom(args.forced);
			break;
		case 'message':
			if ($(args.messageID)) this.scrollTo(args.messageID);
			break;
		case 'break':
			var el = $$('li.break').first();
			if (el) this.scrollTo(el);
			break;
		}
	},
	
	scrollToBottom : function( force ) {
		var body = document.body,
			height = document.viewport.getHeight(),
			y = body.scrollHeight - height,
			threshold = 100; //height * 0.25;
		
		if ( force ) {
			// Forced.
			if (this.effect) this.effect.cancel();
			body.scrollTop = y;
			
		} else if ( this.is_scrolling || this.current_scroll <= 1 && this.ready ) {
			// Not forced, so only scroll to bottom if not manually scrolled up.
			if ( this.smooth_scrolling ) {
				if (this.effect) this.effect.cancel();
				
				this.is_scrolling = true;
				this.effect = new Effect.Tween(body, body.scrollTop, y, {
					duration:this.smooth_scrolling, 
					afterFinish:function () {this.is_scrolling = false;this.effect = null;}.bind(this)
				}, 'scrollTop');
								
			} else {
				if (this.effect) this.effect.cancel();
				body.scrollTop = y;
			}
			
		}
	},
	
	update : function() {
		this.current_scroll = document.body.scrollHeight - document.body.scrollTop - document.viewport.getHeight();
	},
	
	scrollTo: function( y, no_center, no_animate ) {
		var elem,
			body = document.body,
			bh,
			wh,
			h;
		
		if ( y === undefined ) {
			return body.scrollTop;
			
		} else {
			if ( typeof y !== 'number' ) {
				elem = $(y);
				if ( !elem.length ) { return; }
				y = elem.cumulativeOffset().top;
			}
			
			if ( !no_center ) {
				bh = body.scrollHeight;
				wh = document.viewport.height();
				h = elem.outerHeight;
				y -= ( wh - h ) / 2;
				y = Math.max( 0, Math.min( y, bh ) );
			}
			
			if ( no_animate ) {
				body.scrollTop = y;
			} else {
				this.effect = new Effect.Tween(body, body.scrollTop, y, {
					duration:this.smooth_scrolling, 
					afterFinish:function () {
						this.is_scrolling = false;
						this.effect = null;
						elem.addClassName('scrollto');
						setTimeout(function () {elem.removeClassName('scrollto');}, 3000);
					}.bind(this)
				}, 'scrollTop');
			}

		}
		
	}
	
};

Event.observe(document,'dom:loaded', function () {
	Event.observe(document, 'style:scrollTo',	Scroller.e_scroll.bind(Scroller));
	Event.observe(document, 'style:ready',		Scroller.e_ready.bind(Scroller));
	Event.observe(document, 'scroll',			Scroller.update.bind(Scroller));
});