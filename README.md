# skroll
Skroll is a JQuery plugin that can create beautiful animations on scroll.

## Usage

Include JQuery first and then include the file as follows.
```html
<script src="jquery.min.js" type="text/javascript"></script>
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

By default the animations will be disabled on mobile devices to improve performance. To allow this in mobile devices, simply pass the argument as follows.
```javascript
new Skroll({
  mobile:true
})
```
Check out more about this plugin and [examples here](http://akzhy.com/portfolio/skroll). 

Check live demo [here](http://akzhy.com/demos/skroll).

[Codepen Demo](https://codepen.io/akzhy/pen/YRpVvM)
