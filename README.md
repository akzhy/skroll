# skroll
Skroll is a JQuery plugin / javascript library that can create beautiful animations on scroll.

## Usage

For the JQuery plugin,
Include JQuery first and then include the file as follows.
```html
<script src="jquery.min.js" type="text/javascript"></script>
<script src="skroll.jquery.min.js" type="text/javascript"></script>
```
For Vanilla js, simply include the script
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
        
        If vanilla javascript,
        
        el.style["transform"] = "scale(.1,.1)";
        el.style["opacity"] = 0;
        
        */
        $(el).css({
             transform:"scale(.1,.1)",
             opacity:0
         });
     },
     end:function(el){
        $(el).css({
             transform:"scale(1,1)",
             opacity:1
         })
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

Check live demo [here](http://akzhy.com/demos/skroll).

[Codepen Demo](https://codepen.io/akzhy/pen/YRpVvM)
