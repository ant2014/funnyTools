/**
 *   myUnslider by coolwubo
 *	 learn by @idiot and @damirfoy
 *   Contributors:
 *   - @ShamoX
 *
 */


;(function($, flag){

	//function Unslider(){}??
	var Unslider = function(){
		var _ = this;

		_.option = {
			speed: 500,  //integer or boolean, false for no transition
			delay: 2000, //integer or boolean, false for no autoplay
			init: 0,  //init delay, false for no delay
			pause: !flag,  //pause on hover
			loop: !flag,  //
			keys: flag,
			//dots: flag,
			//arrows: flag,
			prev: '&Left',
			next: '&Right',
			fluid: flag,  //Boolean, is it a percentage width
			starting: flag,   // invoke before animation (function with argument)
			complete: flag,  // invoke after animation (function with argument)
			items: '>ul',   // slides container selector
			item: '>li',    // slidable items selector
			easing: 'swing',// easing function to use for animation
			autoplay: true  // enable autoplay on initialisation
		};

		_.init = function(element, option){
			_.o = $.extend(_.option, option);
			_.element = element;
			_.ul = _.element.find(_.o.items);
			_.max = [element.outerWidth() | 0, element.outerHeight() | 0];
			_.li = _.ul.find(_.o.item).each(function(index){
				var me = $(this),
				    width = me.outerWidth(),
				    height = me.outerHeight();
				console.log("init function var me = $(this) = " + me);

				//set the max values
				if (width > _.max[0]) _.max[0] = width;

				if (height > _.max[1]) _.max[1] = height;

			});


			//cache vars
			var o = _.o,
				ul = _.ul,
				li = _.li,
				len = li.length;

			_.i = 1;
			alert(li.first().outerHeight());
			element.css({width: _.max[0], height: _.max[1], overflow: 'hidden'});

			//set relative width
			ul.css({position: 'relative', left: 0, width: (len * 100) + '%'});
			if(o.fluid){
				li.css({'float': 'left', width: (100 / len) + '%'});
			}else{
				li.css({'float': 'left', width: _.max[0] + 'px'});
			}

			//auto slide
			o.autoplay && setTimeout(function(){
				console.log("o.autoplay && setTimeout 中的 " + o.delay + "");
				if(o.delay | 0){
					_.play();

					if(o.pause){
						element.on('mouseover mouseout', function(e){
							_.stop();
							e.type === 'mouseout' && _.play();
						});
					};
				};
			}, o.init | 0)

			if(o.keys){
				$(document).keydown(function(e){
					switch(e.which) {
						case 37:
							_.prev();  //left
							break;
						case 39:
							_.next();  //right
							break;
						case 27:
							_.stop();  //esc
							break;
					};
				});
			};

			o.fluid && $(window).resize(function(){
				_.r && clearTimeout(_.r);

				_.r = setTimeout(function(){
					var styl = {height: li.eq(_.i).outerHeight()},
						width = element.outerWidth();

					styl.width = Math.min(Math.round((width / element.parent().width())) * 100, 100) + '%';
					element.css(styl);

					li.css({ width: width + 'px'});

				}, 50);
			}).resize();

			return _;
		};

		//move unSlider to a slide index
		_.to = function(index, callback){
			if(_.t) {
				_.stop();
				_.play();
			}

			var o = _.o,
				element = _.element,
				ul = _.ul,
				li = _.li,
				current = _.i,
				target = li.eq(index);

			$.isFunction(o.starting) && !callback && o.starting(element, li.eq(current));

			//to slide or not 
			console.log("_.to !target.length = " + !target.length);
			if ((!target.length || index < 0) && o.loop === flag) 
				return;

			//check if it's out of bounds
			if(!target.length)
				index = 0;
			if(index < 0)
				index = li.length - 1;
			target = li.eq(index);

			var speed = callback ? 5 : o.speed | 0,
				easing = o.easing,
				obj = {height: target.outerHeight()};

				console.log("ul.queue('fx') " + ul.queue('fx'));
				console.log("ul.queue('fx').length = " + ul.queue('fx').length);
			if(1){
				 ul.animate($.extend({left: '-' + index + '00%'}, obj), speed, easing, function(data){
					_.i = index;
					$.isFunction(o.complete) && !callback && o.complete(element, target);
				});
			};
		};

		//Autoplay function
		_.play = function(){
			_.t = setInterval(function(){
				_.to(_.i + 1);
			}, _.o.delay | 0)
		}

		//stop autoplay
		_.stop = function(){
			_.t = clearInterval(_.t);
			return _;
		}

		// move to prev/next slide
		_.prev = function(){
			return _.stop().to(_.i - 1);
		}

		_.next = function(){
			return _.stop().to(_.i +1 );
		}


	}


	//create a jQuery plugin
	$.fn.lunbo = function(option){
		var len = this.length;
		console.log("**********************************************");
		console.log("$.fn.myUnslider var len 111= " + len);

		var me = $(this),
		instance = (new Unslider).init(me, option);
		/*return this.each(function(index){
			//  Cache a copy of $(this), so it
			var me = $(this),
				key = 'unslider' + (len > 1 ? '-' + ++index : ''),
				instance = (new Unslider).init(me, option);

			//  Invoke an Unslider instance
			//me.data(key, instance).data('key', key);
		})*/

	}
}
)(jQuery,false)
