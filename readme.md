# What can your browser do for you?
This is a utilitarian tool first and foremost. If it has some aestheticism, it is only because of a lesson I saw on responsive design by a gentleman named Brad Frost who had a lesson called [&lsquo;This is Responsive&rsquo;](http://bradfrost.com/blog/web/this-is-responsive/). I subsequently tweaked the design afterwards for this tool. 


## Please visit
You can see [the project](https://donLucho.github.io/apis "the project at github") for yourself and decide whether it is really for you or not. 


## What you will need to run this web app?
This does not require Bower but for the sake of completeness, a __*bower.json*__ file was built in order to facilitate one later just in case. Presently, the gulp directive inside __*gulpfile.js*__ as it applies to javascript is brittle. So until I can address it it&rsquo;ll have to stay as it is. If you have __*npm*__ installed, first, download the contents &amp; place them in your present working directory (or __*pwd*__ for short). Then, from your __*pwd*__ and with your terminal application of choice open, type __*npm install*__ and you&rsquo;re off.


### Browser APIs at your disposal
I want to know the dimensions of the screen, window, document. Or, if my browser can handle request animation frame without browser prefixes. And, if I play media such as audio or video, I have to consider what the browser capabilities are on a case by case basis &#45; browser to browser. The purpose of this page is to indicate to any developer in detailed form what the capacities and limitations are of a desktop and\or mobile device browser. 


### Handle the error gracefully
If a browser supports an API it is important to know this and equally important to support situations where a browser cannot handle any certain number of APIs. In terms of the latter, I will show how to gracefully handle these events but at a future date. In the context of this example, it is best that a browser communicates any info up&#45;front which will help a developer prepare for any situation as it develops. 


#### Discovery and other ideas for real world situations
I have a lot more to add, but I feel there is a neater way. With time&#45;&#45; something I do not have much of these days &#45;&#45;anything is possible. I also learned that __*-webkit*__ prefixes are still a thing in 2017 especially when testing for APIs. I actually had to cull an expression I once used for feature testing as it applies to some of the __*File APIs*__ and opt for a utilitarian function in its place that returns the supported expression. 