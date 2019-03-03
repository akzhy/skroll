# skroll
![](https://img.shields.io/badge/skroll.js-2.0.1-brightgreen.svg) ![](https://img.shields.io/badge/License-MIT-blue.svg) [![Paypal Donate](https://img.shields.io/badge/Donate-paypal-9c27b0.svg)](https://www.paypal.me/akzhy/10)

Skroll is a javascript library that can create beautiful animations on scroll.

## Usage
*As of v2.0.0, the jquery plugin has been deprecated.*

Simply include the script
```html
<script src="skroll.min.js" type="text/javascript"></script>
```
Now in js file call
```javascript
new Skroll()
  .add(".element",{
    delay:50,
    duration:500,
    animation:"zoomIn"
  })
  .init();
```

## Methods

### `.add(element,options)`

Used to add an element to be animated.
Options are
```javascript
triggerTop:.2,               // Any value between 0 and 1
triggerBottom:.8,            // Any value between 0 and 1
delay:0,                     // Integer, delay in milliseconds
duration:500,                // Integer, duration in milliseconds
animation:"zoomIn",          // string or object
easing:"ease",               // string
wait:0,                      //  integer, wait in milliseconds
repeat:false,                // boolean
onEnter:false,               // function or false to denote no action
onLeave:false                // function or false to denote no action
```

### `.addAnimation(name,obj)`

Used to add custom animations. It accepts two arguments, the name of the animation and an object that defines the animation. The object should have two methods, start(el) and end(el). Where start is the initial state of the element, ie before it enters the viewport and end is the final stage of the animation when it enters viewport. Both the methods will have an argument el that is the DOM of the element to be animated.

Sample:

```javascript
.addAnimation("customAnimation",{
    start:function(el){
        /*
        JQuery can also be used
        */
        el.style["transform"] = "scale(.1,.1)";
        el.style["opacity"] = 0;
     },
     end:function(el){
        el.style["transform"] = "scale(1,1)";
        el.style["opacity"] = 1;
     }
})
```
 

### `.recalcPosition()`

Used to recalculate the position of elements in case of height changes that occur due to addition or loading of elements. It is recommended to call this method during window load or in an interval.

---

By default the animations will be disabled on mobile devices to improve performance. To allow this in mobile devices, simply pass the argument as follows.

```javascript
new Skroll({
  mobile:true
})
```
By default scroll position is considered with respect to `window` to change it to a custom element, do

```javascript
new Skroll({
  reference:"#element"
})

```
Check out more about this plugin and [examples here](http://akzhy.com/shelf/skroll). 

[Live Demo 1](http://demos.akzhy.com/skroll/skroll-demo-1/) | [Live Demo 2](http://demos.akzhy.com/skroll/skroll-demo-2/)

