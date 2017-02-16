### Javascript

### Objectives


### The anatomy of a web site

This is Alice.  Turn Alice turn.

<iframe src="story.html" width="500" height="200">
  <p>Your browser does not support iframes.</p>
</iframe>

Alice will keep turning until we stop her.  By the end of this lesson, you'll learn how to stop Alice.  

You'll also learn something about Javascript.

###Objectives

* Understand the roles of HTML, CSS, and Javascript in constructing a website.
* Understand how to view the Javascript of any page online.
* Understand what we mean by the Document Object Model.  

###

What is javascript?  Let's go to www.espn.com.  A lot of things go into making that website work.  Let's be honest. It looks like a carnival.  Now in this lesson we'll try identify which part of that site is javascript and what is the html.

Well the html is the static content that our browser receives.  What does that mean?  Well do the following.  At the top left of the webpage is the ESPN logo, with the letters ESPN.  If you are using a windows machine right click on it, or in a mac two fingers click on it.  A dropdown will appear and the very bottom you will find inspect.  Click on it.  

You'll be taken to the corresponding html in the google chrome developer console.  That html will look something like this:

```html
  <a href="/" name="&amp;lpos=sitenavdefault&amp;lid=sitenav_main-logo">ESPN</a>
```

Ok, now press the delete button on your keyboard.  You'll see that the instant you press delete, the html disappears, as does the corresponding html logo.  If you would like to place back the logo, simply undo the change with control+z (or command+z on a mac).  That piece of html we say is static.  This means that the html is not in charge of changing.  The html says, display the logo and keep on displaying it.

Now let's compare that with javascript.

### Discovering Javascript

Now hover over the list of games at the very top of the espn.com page.  You see movement?  Not static.  That is not static at all.  The movement you see is all because of javascript.  Javascript allows us to manipulate the display of our page without refreshing or directing to a new url.  Javascript is responsible for the movement.  

Let's prove this.  Now in a new tab, type in `chrome://settings/search#javascript` in the url.  Then click on the button `content settings`, and select the radio button that says `Do not allow any site to run javascript`.  Finally, refresh the tab with espn.com.  A lot of the movement that we used to see on the page is gone.  Now moving towards dev speak, we would say that javascript provides behavior to the html.  So the html is the content, such as our ESPN logo.  The javascript determines that content's behavior such as whether to show or to hide, or move, upon a hover, a click, or other interactions we have with the browser.

### Finishing with CSS

Now, as you likely, we use css to style the content.  Let's just do a quick review, to see what this means. Press command+F and type in the word css to search for the css.  Then comment out the line that links to the stylesheet.  Then refresh the page.  You'll see that this is what the page looks like without javascript and without styling.  Looks like a totally different site.  We go through the styling to also point out that *some* of the movement you see on hovering is not javascript, but rather is css styling that allows a change in appearance on hovering.  But the movement that you saw disappear with commenting out the javascript did come from the javascript code.  

### Summary

When we view a webpage, we are really viewing three different components.  There is the html, which is responsible for the content.  There is css, which styles a webpage, and there is javascript which adds behavior to that html.  

We see that we can easily access that html, javascript, and styling simply by viewing the source of a webpage and by using our developer tools.  

But after doing all of that, one might think that javascript doesn't play such a big role in the web.  What's all the fuss about?

In the next section, we will take a brief tour through the evolution of the web.  And then, once we know our place in this new world, we will promptly dive into learning javascript and using javascript to manipulate our web pages.
