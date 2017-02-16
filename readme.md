### Javascript

### Objectives


### The anatomy of a web site

This is Alice.  Turn Alice turn.

<iframe height='265' width="125" scrolling='no' title='js and the web' src='//codepen.io/flatiron/embed/ggyKpb/?height=265&theme-id=0&default-tab=html,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/flatiron/pen/ggyKpb/'>js and the web</a> by Jeffrey Katz (<a href='http://codepen.io/flatiron'>@flatiron</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

Notice that Alice has some behavior.  Click on her and find out.  Uh oh, now you've done it.  When Alice is poked, she never stops spinning.  It's not a very nice behavior to give to a kitten, so by the end of Alice we'll learn how to stop Alice.  

You'll also learn something about Javascript.

### Discovering Javascript

In previous lessons, you've seen that HTML is used to add or remove content to a webpage.  Now Javascript is a language that adds behavior to a website.

Javascript is responsible for a lot of the movement that you see on a website.  We say that Javascript adds behavior to our HTML.  In this case, the behavior that Javascript added was to say, when a user clicks on the picture of Alice, make Alice spin.  If you look at the Javascript tab, you can see that the code is almost readable.  

By adding behavior we Javascript can do a few things to it:
  1. Move, remove or add HTML.  That is Javascript can move, remove or add content to our site.  
  2. Find specific pieces of HTML so that it knows what to remove, where to add specific content, or what to change.
  3. Javascript can remove or add styling to specific or a group of HTML elements.
  4. Javascript can listen and respond to specific events that occur in our browser.  The events that Javascript can listen to include click on specific elements, hovering over specific elements, the user pressing on down on specific keys, and many more.  

In this case, we are telling Javascript to find the element with an id attribute of kitten (which is our image), listen to a click event, and add a CSS class that causes that selected element to spin.  

You are not expected to read and understand the Javascript code at this point in time (that's we have this course), but you are expected get a sense of what Javascript adds to a website.  

Now that you know what Javascript does, you can narrow down how to change functionality of a website.  This is really nice, because as we'll see in a future lesson, the Javascript code of all websites is exposed and free for you to copy or interact with.  

In this case, we want to get back to our problem of making sure that when Alice is clicked on, she does not begin to spin.  First, refresh the page so that we can start over.  Ok, so how can we prevent the spinning upon a click.  Well we know that the Javascript code is responsible for behavior like listening to events and adding or changing content.  So what do we do?  We simply remove the Javascript code.  You'll see that after removing Javascript, you can click on Alice as much as you want.  She won't begin to spin.

### Summary

When we view a webpage, we are really viewing three different components.  There is the html, which is responsible for the content.  There is css, which styles a webpage, and there is javascript which adds behavior to that html.  

When we say adds behavior we mean a couple of things.  Essentially we mean moving, adding or removing certain elements.  And we can mean adding or removing CSS styles to certain elements.  Javascript also gives us the ability to select certain elements, so that we can be specific about which HTML elements we are adding behavior to, or where on the page we are moving specific elements.  

We still don't know how to implement any of this, by the way.  All we know is that Javascript allows us to do it.  

But after knowing what Javascript brings to the table, one might think that javascript doesn't play such a big role in the web.  What's all the fuss about?  Just a bunch of spinning cats?

In the next section, we will take a brief tour through the evolution of the web.  And then, once we know our place in this new world, we will promptly dive into learning javascript and using javascript to manipulate our web pages.
