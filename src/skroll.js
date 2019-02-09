Skroll = function(opt){
	var _this = this;

	this.settings = opt || {};
	this.settings.mobile = this.settings.mobile === undefined ? false : this.settings.mobile;
	this.referenceElement = this.settings.reference === undefined ? window : this.get(this.settings.reference)[0];
    this.elements = [];

    this.animations = {
        zoomIn:{
            start:function(el){
                el.style["transform"] = "scale(.1,.1)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "scale(1,1)";
                el.style["opacity"] = 1;
            }
        },
        fadeInLeft:{
            start:function(el){
				el.style["transform"] = "translate(-50%,0)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "translate(0%,0)";
                el.style["opacity"] = 1;
            }
        },
        fadeInRight:{
            start:function(el){
				el.style["transform"] = "translate(50%,0)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "translate(0%,0)";
                el.style["opacity"] = 1;
            }
        },
        fadeInLeftBig:{
            start:function(el){
				el.style["transform"] = "translate(-100%,0)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "translate(0%,0)";
                el.style["opacity"] = 1;
            }
        },
        fadeInRightBig:{
            start:function(el){
				el.style["transform"] = "translate(100%,0)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "translate(0%,0)";
                el.style["opacity"] = 1;
            }
        },
        fadeInUp:{
            start:function(el){
				el.style["transform"] = "translate(0,50%)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "translate(0,0%)";
                el.style["opacity"] = 1;
            }
        },
        fadeInDown:{
            start:function(el){
				el.style["transform"] = "translate(0,-50%)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "translate(0,0%)";
                el.style["opacity"] = 1;
            }
        },
        slideInLeft:{
            start:function(el){
				el.style["transform"] = "translate(-50%,0) scale(.8,.8)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "translate(0%,0) scale(1,1)";
                el.style["opacity"] = 1;
            }
        },
        slideInLeftBig:{
            start:function(el){
				el.style["transform"] = "translate(-100%,0) scale(.8,.8)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "translate(0%,0) scale(1,1)";
                el.style["opacity"] = 1;
            }
        },
        slideInRight:{
            start:function(el){
				el.style["transform"] = "translate(50%,0) scale(.8,.8)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "translate(0%,0) scale(1,1)";
                el.style["opacity"] = 1;
            }
        },
        slideInRightBig:{
            start:function(el){
				el.style["transform"] = "translate(-100%,0) scale(.8,.8)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "translate(0%,0) scale(1,1)";
                el.style["opacity"] = 1;
            }
        },
        flipInX:{
            start:function(el){
				el.style["transform"] = "rotateX(90deg)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "rotateX(0deg)";
                el.style["opacity"] = 1;
            }
        },
        flipInY:{
            start:function(el){
				el.style["transform"] = "rotateY(90deg)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "rotateY(0deg)";
                el.style["opacity"] = 1;
            }
        },
        rotateRightIn:{
            start:function(el){
				el.style["transform"] = "rotate(45deg)";
				el.style["transform-origin"] = "0 100%"
                el.style["opacity"] = 0;
            },
            end:function(el){
                el.style["transform"] = "rotate(0deg)";
                el.style["opacity"] = 1;
            }
        },
        rotateLeftIn:{
            start:function(el){
				el.style["transform"] = "rotate(-45deg)";
				el.style["transform-origin"] = "0 100%"
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "rotate(0deg)";
                el.style["opacity"] = 1;
            }
        },
        growInLeft:{
            start:function(el){
				el.style["transform"] = "translate(-100%,0) scale(.1,.1)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "translate(0%,0) scale(1,1)";
                el.style["opacity"] = 1;
            }
        },
        growInRight:{
            start:function(el){
				el.style["transform"] = "translate(100%,0) scale(.1,.1)";
                el.style["opacity"] = 0;
            },
            end:function(el){
				el.style["transform"] = "translate(0%,0) scale(1,1)";
                el.style["opacity"] = 1;
            }
        }
    }
}

Skroll.prototype.get = function(el){
	return document.querySelectorAll(el);
}

Skroll.prototype.inViewport = function(elem,settings){
	var scrollTop,elementTop,elementBottom,viewportTop,viewportBottom;
	if(this.referenceElement == window){
		scrollTop = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
		elementTop = JSON.parse(elem.getAttribute("data-skroll-offset")).top;
		elementBottom = elementTop + elem.offsetHeight;
		viewportTop = scrollTop + screen.availHeight*settings.triggerTop;
		viewportBottom = scrollTop + screen.availHeight*settings.triggerBottom;
	}else{
		var re = this.referenceElement;
		scrollTop = re.scrollTop;
		elementTop = JSON.parse(elem.getAttribute("data-skroll-offset")).top;
		elementBottom = elementTop + elem.offsetHeight;
		viewportTop = scrollTop + re.offsetHeight*settings.triggerTop;
		viewportBottom = scrollTop + re.offsetHeight*settings.triggerBottom;
	}
	return (elementBottom > viewportTop && elementTop < viewportBottom);
}
Skroll.prototype.getScrollStatus = function(elem,settings){
	if(this.inViewport(elem,settings)){
		elem.setAttribute("data-skroll-inview",true);
		return {action:"enter",data:{shown:elem.getAttribute("data-skroll-shown")}};
	}else{
		if(elem.getAttribute("data-skroll-inview") == "true"){
			elem.setAttribute("data-skroll-inview",false);
			return {action:"leave",data:{shown:elem.getAttribute("data-skroll-shown")}};;
		}
		return {action:"idle",data:{shown:elem.getAttribute("data-skroll-shown")}};
	}
}
Skroll.prototype.add = function(el,options){
	var settings = {
		triggerTop:options.triggerTop || .2,
		triggerBottom:options.triggerBottom || .8,
		delay:options.delay || 0,
		duration:options.duration || 500,
		animation:options.animation || "zoomIn",
		easing:options.easing || "ease",
		wait:options.delay || 0,
		repeat:options.repeat || false,
		onEnter:options.onEnter || false,
		onLeave:options.onLeave || false
	}
	this.elements.push({
		element:el,
		settings:settings
	});
	return this;
}
Skroll.prototype.recalcPosition = function(){
	var _this = this;
	this.elements.forEach(function(val,key){
		_this.get(val.element).forEach(function(e,i){
			if(e.getAttribute("data-skroll-shown") == "false"){
				var t = e.style.transform;
				e.style["transform"] = "none";
				var offset = e.getBoundingClientRect();
				var top = _this.referenceElement == window ? offset.top + _this.referenceElement.scrollY : offset.top + _this.referenceElement.scrollTop;
				e.setAttribute("data-skroll-offset",JSON.stringify({top:top}));
				e.style["transform"] = t;
			}
		})
	})
}
Skroll.prototype.throttle = function(fn,threshhold,scope){
	threshhold || (threshhold = 250);
	var last,deferTimer;
	return function () {
		var context = scope || this;
		var now = +new Date,
		args = arguments;
		if(last && now < last + threshhold){
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function(){
				last = now;
				fn.apply(context, args);
			}, threshhold);
		}else{
			last = now;
			fn.apply(context, args);
		}
	};
}
Skroll.prototype.addAnimation = function(name,property){
	this.animations[name] = property;
	return this;
}
Skroll.prototype.init = function(){
	var _this = this;
	if(!this.settings.mobile && screen.width < 600) return this;
	this.elements.forEach(function(val,key){
		_this.get(val.element).forEach(function(e,i){
			var offset = e.getBoundingClientRect();
			var top = _this.referenceElement == window ? offset.top + _this.referenceElement.scrollY : offset.top + _this.referenceElement.scrollTop;
			e.setAttribute("data-skroll-inview",false);
			e.setAttribute("data-skroll-shown",false);
			e.setAttribute("data-skroll-offset",JSON.stringify({top:top}));
			if(typeof(val.settings.animation) == "string" && val.settings.animation != "none"){
				if(!_this.animations[val.settings.animation]){
					console.warn("The requested animation '%s' was not found switching to default zoomIn",val.settings.animation);
					console.trace();
					val.settings.animation = "zoomIn";
				}
				_this.animations[val.settings.animation].start(e);
			}else if(typeof(val.settings.animation) == "object"){
				if(val.settings.animation.start != undefined){
					val.settings.animation.start(e);
				}
			}
		})
	});
	['scroll','resize'].forEach(function(e){
		_this.referenceElement.addEventListener(e,_this.throttle(function(){
			_this.elements.forEach(function(val,key){
				var tDelay = val.settings.wait;
				_this.get(val.element).forEach(function(e,i){
					var sStat = _this.getScrollStatus(e,val.settings);
					if(sStat.action == "idle") return;
					if(sStat.action == "enter" && (sStat.data.shown == "false")){
						if(typeof(val.settings.animation) == "string" && val.settings.animation != "none"){
							e.style["transition"] = "all "+val.settings.duration+"ms "+val.settings.easing;
							setTimeout(function(){
								_this.animations[val.settings.animation].end(e);
								e.setAttribute("data-skroll-shown",true);
								tDelay+= val.settings.delay*i;
							},tDelay)
						}else if(typeof(val.settings.animation) == "object"){
							if(val.settings.animation.end != undefined){
								e.style["transition"] = "all "+val.settings.duration+"ms "+val.settings.easing;
								setTimeout(function(){
									val.settings.animation.end(e);
									e.setAttribute("data-skroll-shown",true);
									tDelay+= val.settings.delay*i;
								},tDelay)
							}
						}
						tDelay+= val.settings.delay;

					}else if(sStat.action == "leave" && sStat.data.shown){
						if(val.settings.repeat){
							if(typeof(val.settings.animation) == "string" && val.settings.animation != "none"){
								if(_this.animations[val.settings.animation]){
									e.style["transition"] = "all "+val.settings.duration+"ms "+val.settings.easing;
									setTimeout(function(){
										_this.animations[val.settings.animation].end(e);
										e.setAttribute("data-skroll-shown",false);
										tDelay+= val.settings.delay*i;
									},tDelay)
								}
							}else if(typeof(val.settings.animation) == "object"){
								if(val.settings.animation.end != undefined){
									e.style["transition"] = "all "+val.settings.duration+"ms "+val.settings.easing;
									setTimeout(function(){
										val.settings.animation.end(e);
										e.setAttribute("data-skroll-shown",false);
										tDelay+= val.settings.delay*i;
									},tDelay)
								}
							}
							tDelay+= val.settings.delay;
						}
					}
					if(sStat.action == "enter"){
						if(val.settings.onEnter) val.settings.onEnter(i,e);
					}else if(sStat.action == "leave"){
						if(val.settings.onLeave) val.settings.onLeave(i,e);
					}
				})
			})
			if(e == 'resize') _this.recalcPosition();
		},150));
	})
	if(window.dispatchEvent){
		_this.referenceElement.dispatchEvent(new Event("scroll"));
	}else{
		_this.referenceElement.fireEvent("scroll");
	}
	return _this;
}
