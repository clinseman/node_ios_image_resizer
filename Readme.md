node_ios_image_resizer
========

This is a simple node command line script to rename and resize images when developing for iOS and the Retina screen. 

	* copies the images from a source folder to a destination/2x and renaming to the @2x convention
	* resizes the same images by 50% and copies to the destination/1x folder (no rename)

Requirements
-------

- <b>[ImageMagick][]</b>

[ImageMagick][] is the most popular choice for image processing in Node.js. But ImageMagick's syntax is a little too complicated for the average developer, and the method of calling it further complicates the matter. Worry not, there is a Node.js module called [EasyImage][] which will ensure that image manipulation in Node.js is a breeze for you - beginner or advanced user. (taken from http://www.hacksparrow.com/node-js-image-processing-and-manipulation.html).

To install this library see instructions at [EasyImage][]

[ImageMagick]: http://www.imagemagick.org/script/index.php
[EasyImage]: https://github.com/hacksparrow/node-easyimage
