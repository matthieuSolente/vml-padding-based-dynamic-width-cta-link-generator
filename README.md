# Dynamic and Flexible auto width VML Button Generator !
Another VML padding based CTA link generator

See a working example on my [codepen](https://codepen.io/matthieuSolente/pen/BaqpxLR)

The idea for this generator came to me while analyzing the buttons created in BEE editor. The idea is to start from the padding to dynamically generate the width and height of the vml v:roundrect, for a pixel perfect CTA link !

Some explanations :

### No width and height
The generator uses the outerHeight() function to calculate the height of the button on the fly. 

### Arcise
To obtain the value of the arcsize, we retrieve the border-radius in pixel inserted by the user, and divide it by the height of the block, multiplied by 100. 

```javascript
arcsize=Math.ceil($('#bRadius').val()/$(cssBtnClass).outerHeight()*100);
```

### cta VML width and height

The height and width of the button, in its VML version, is automatically calculated according to the size of the html button, using the outerHeight function.

```javascript
vmlwidth = 'width:' + Math.ceil($(cssBtnClass).outerWidth()).toFixed(1)*0.75+'pt';
vmlheight = 'height:' + Math.ceil($(cssBtnClass).outerHeight()).toFixed(1)*0.75+'pt';
```
### css code

Minimal css code is added to improve the visual rendering of the button in dark mode on Outlook
