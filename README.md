# jQuery Broken Image

Provides support to add fallback images for broken images

## Usage

Include the script **jquery.brokenimage.js** in the html page 

Bind to image elements using

```sh
$('img').qImageFallback();
```
Define fallback images on img tags using **data-fallback** attribute
```sh
<img src="images/image-01.jpg" data-fallback="images/fallback.jpg" alt="" />
```


Check **index.html** for example/demo
