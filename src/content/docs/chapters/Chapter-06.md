---
title: Chapter 6 Off the Grid
description: Links, references, and footnotes
---


## Context 

Chapter 6 takes the reader “off the grid,” introducing them to historical experimental and expressive print-based layouts spearheaded by designers such as April Greiman and David Carson, as well as artists who collage, deconstruct, and use other methods both off and online. The modules provide technical underpinnings for such experiments in web pages, explaining CSS positioning, web forms, and how to use Javascript to change content and affect user experience in the browser.




![xxxxx](images/06/06-01-netartdiagram.gif) 

Figure 6.1 MTAA, Simple Net Art Diagram, 1997. This punchy illustration alludes to the reconstitution of meaning that happens in the communication system between the artist (that is, the art work) and viewer. CC BY MTAA

![xxxxx](images/06/06-02-lowres.png)
Figure 6.2 On the left, “Multiple Interaction Team : an exhibition-event to travel (cover image),” MIT Libraries, Cambridge, Massachusetts, 1972. Call no. N6493 1972.M37. This 1973 exhibition was organized by Gyorgy Kepes and prepared by the Center for Advanced Visual Studies at MIT. The catalog is credited to designer Jacqueline Casey, who worked with Murial Cooper in the Design Services office. 

![xxxxx](images/06/06-03-mrkeedy.jpg)
Figure 6.3 Mr. Keedy, “OK Identity” (1999) is an exciting yet pluralistic take on brand identity that neither accepts nor denies the constraints of corporate logo designing.
ALT: Mr. Keedy's OK Identity 


![xxxxx](images/06/06-04-greimain-Think-About-What-You-Think-About.jpg)
Figure 6.4 April Greiman, Think About What You Think About, Cal State Sacramento Lecture Poster, 2004. 


<table>
<tr>
<td valign="top"><a href="images/06/06-05a.png"><img src="images/06/06-05a.png" alt="ALT"></a><br>
Left: David Carson, 2023 Redesign of Raygun Issue 6 cover featuring PJ Harvey. 
</td>
<td valign="top"><a href="images/06/06-05-b.png"><img src="images/06/06-05-b.png" alt="ALT"></a><br>
David Carson, 2023 fashion design collaboration with Takahiromiyashita The Soloist.
</td>
</tr>
</table>



![xxxxx](images/06/06-06-glitterAndgoldjpg.jpg)
Figure 6.6 Émilie Brout & Maxime Marion, Gold and Glitter, Installation, website, found GIF and objects, 30 x 30 x 130 cm, 2015. This work was presented on and offline, where the unique frame counts of each found GIF file made the whole composition feel alive and more present than most things we view on the flat screens used to access the internet.

![xxxxx](images/06/06-07-sendRequest.png)
Figure 6.7 Herdimas Anggara, Ritual Engineer, 2023.


![xxxxx](images/06/06-08-traceryszine-01.jpg)
Figure 6.8 Kate Compton, Tracery zine used as a teaching tool.

![xxxxx](images/06/06-09-traceryScreenshot-NEW-NEW.png)
Figure 6.9 Kate Compton, Tracery user interface (editor) used to build most of the bots on Twitter. See: https://artbot.club/demo.




## 6.1 Brainstorming and Experimentation


![xxxxx](images/06/06-10-baldwin-iterations.png)
Figure 6.10 Owen used a quote from the poet and author, James Baldwin, to create four distinct grid layouts. The Figma layout grid is hidden in this figure, but it is clear the columns and rows provide structure to the text.


![xxxxx](images/06/06-11-moodboard.png)
Figure 6.11 This mood board includes a selection of text and image works made by women. While some present easily-found grid structures, all of these works use intentional expressive typographic design or juxtapose text and image to animate their ideas. 






## 6.2 CSS Grid, Transform, and Animation



![xxxxx](images/06/06-12-css-grid-examples.png)
Figure 6.12 The CSS grid module enables a wide variety of column and row configurations and sizes. 


![xxxxx](images/06/06-13-grid-1.png)
Figure 6.13 The lines of the poem presented in rows and columns thanks to the CSS grid.
ALT: The lines of the poem presented in rows and columns thanks to the CSS grid.



![xxxxx](images/06/06-14-grid-2.png)
Figure 6.14 The background image is centered in the browser. It appears only once, and the text is juxtaposed on top of it as a well-organized series of divs controlled by CSS grid.
ALT: Screenshot of the web page at the end of Section 6.1.2. The background covers the web page and text sits neatly on top of it. 



![xxxxx](images/06/06-15-CSS-transformations.png)
Figure 6.15 The CSS transform property allows for several fundamental geometric transformations. See this Codepen to experiment with these examples https://bit.ly/cwd-codepen-css-transform 









## 6.3 Javascript Functions, Arrays, & Loops


![xxxxx](images/06/06-16-JS-function-anatomy.png)
Figure 6.16 Use the function keyword to declare a function, one or more parameters to customize its task, and return to send data back to the location where it was called. ​​To use a function, call it with the function's name and two parentheses (). 

![xxxxx](images/06/06-17-for-loop.png)
Figure 6.17 A loop is a kind of control structure that will repeat until a condition is met.
ALT: Diagram showing how a loop repeats until a condition is met.


![xxxxx](images/06/06-18-js-for-loop-anatomy.png)
Figure 6.18 A Javascript for loop includes a control variable, loop condition, and iterator. If the condition is true then the code in the statement block will run.



### Exercise 6.2.3 Create a Simple Javascript Animation

There are many excellent libraries for animation, like anime.js or p5.js which we will explore later in the book. This simple exercise shows how to use Javascript to create animation by changing CSS properties over time. 

1. To access and change styles on any element you can use the style property. Add this code to a script tag before the closing body tag in index.html and test it. This single line of code will change the opacity of everything on the page using a decimal value between 0 and 1. You could select any element on the page but we are using the body to keep the example simple. 

```html
<script>
	document.body.style.opacity = .5;
</script>
```

2. Replace the above line of code with this next sample. The transform property requires a string containing one or more transform functions. The rotate() function uses a degree unit between parentheses. 

```js
document.body.style.transform = `rotate(90deg)`;
```

3. Change your script to match the below code which uses a built-in method called setInterval() that repeatedly executes a block of code. The setInterval() method accepts two parameters (a.k.a. arguments): a block of code that is executed repeatedly, and the interval in milliseconds (1000ms = 1s) that controls the frequency the code block runs. You can see that every 1/10th of a second (or 100ms) the repeated code increases the value of the rotation variable by 5 and then sets the value of document.body.style.transform using the concatenation operator + to combine the values into a single string. Test your document and watch as its contents rotate on the Z-axis. 

```js
let rotation = 0;
setInterval(function () {
	rotation += 5;
	document.body.style.transform = `rotate(${rotation}deg)`;
}, 100);
```

4. Experiment with the number values to get a sense of how this block of code affects the page. 





### Exercise 6.2.4 CSS Animations & CSS Transitions

While Javascript can change values repeatedly using setInterval(), CSS has two methods that create motion automatically. A CSS animation uses the @keyframes rule to define the start and end values of a tween and the browser renders the frames between. 

1. Remove or comment out the Javascript you added inside the script tag above, and add this block of code to your stylesheet . While the @keyframes rule specifies the values and when the property changes, the body rule defines parameters like the name (fadeOut) and duration (2 seconds) of the animation.

```css
@keyframes fadeOut {
	0% { opacity: 1;}
	100% { opacity: 0;}
}
body {
	animation-name: fadeOut;
	animation-duration: 2s;
}
```

2. Compare the performance of this with the code from the previous exercise you will see the CSS animation appears smoother. This is because it lets the browser optimize the rendering to minimize the frame-skipping that creates a stuttering effect. While setInterval() may be intuitive, a more efficient Javascript method exists called requestAnimationFrame(). See the documentation for substituting this method to increase your animation performance.
3. A CSS transition is different from a CSS animation, defining only the parameters of the transition, but not the start or end values or when they occur. This means your code will need to change properties using an event to start the effect. One benefit of CSS transitions is how easy it is to control when they start. Comment out or remove the previous CSS animation then add this transition to your body tag. 

```css
body {
	transition-property: transform;
	transition-duration: 3s;
}
```

Add this code to your script tag in the index file to start the transition. The click listener changes the transform style on the body by adding a random number between 1 and 20 degrees which the CSS transition will animate to the new value. 

```js
let rotation = 0;
document.addEventListener("click", function () {
	let min = 1;
	let max = 20;
	rotation += Math.random() * (max - min + 1) + min;
	document.body.style.transform = `rotate(${rotation}deg)`;
});
```


### 6.3.2 Anonymous Functions & Scope

Look back at the code in the preceding exercise. Using the function keyword to define the reusable code of `randomNumber()` is called a **function declaration**. However, the function keyword in the second parameter of addEventListener also creates a function (see Module 3.3) to handle the event. Passing the callback function like this as an argument is an example of a **function expression**. Function expressions created without a name are **anonymous functions** but they can also be stored in a variable, which we show below by rewriting `randomNumber()` as a function expression. The "fat arrow" syntax is more concise.

```js
const randomNumber = (min, max) => {
	return Math.random() * (max - min + 1) + min;
}
```

The location you declare a variable determines its **scope**, or how its value can be accessed by other parts of your program. We declared rotation in the **global scope** (outside of any functions) so we could access it from anywhere ("globally") in the program and add to the value over time. Alternately, variables created inside a statement block have **local scope** and are only accessible "locally" inside the curly braces where they were declared. So, creating a function not only packages your code for reuse, it also allows you to protect variables from being changed accidentally by other parts of your code. 


### Pro Tip: Functional Programming
With time, you’ll see that functions work best as small, single purpose expressions. Like functions in algebra, **pure functions**, those that always return the same output given the same input, are easier to test and reuse. You can see we have started to do this by linking to a single JS file called (appropriately) functions.js in the main assets folder of the repository. Pure functions are one feature of a programming paradigm called **functional programming** used by professional Javascript coders to write code that is easier to understand and more bug resistant.

Eric Elliott, “What Is Functional Programming?” JavaScript Scene, August 24, 2021, accessed June 3, 2024, https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0.






### Exercise 6.3.2 Create and Access an Array

Revisit the data type diagram in Module 5.2. In addition to primitive data types, Javascript can store collections of data. An array is an example of a collection type, letting you store multiple values inside a single variable. You can store any type of data inside an array, even other arrays. Explore a simple array in the DevTools console.

1. Open the DevTools console andto create the following array with a variable declaration, a name, and multiple comma-separated values between square brackets. This introduces a new array with three values. The variable name is written in plural form, a best practice for naming an entity that holds multiple values. 

```js
let colors = ["purple", "green", "blue"];
```

To retrieve any array value, use the index—the position or order of the data in the array—between two square brackets. Arrays are zero-indexed so the first data value is stored at 0, and then 1, and so on. Even though array indexes start at zero, their length reflects the total number in the array. Run this code, line by line, in the DevTools console to see what we mean.

```js
colors[0] // -> "purple"
colors[1] // -> “green”
colors.length // -> 3
```

Arrays are also like variables in that you can not only retrieve, or get stored values, you can set values by assigning them to an array index. Run these on the console to see this in action.

```js
colors[0] = "red";
colors[0] // -> "red"
colors // -> ["red", "green", "blue"];
```

In Javascript, arrays can store the same or different data types. This includes other arrays. An array inside an array adds a second dimension, similar to a table of data. While people[0] returns the entire array (or row), which is ['Mary', 18, 'mauve'], people[0][1] returns only the first index inside the array at people[0]. 

```js
const people = [
	['Mary', 18, 'mauve'],
	['Pam', 33, 'periwinkle']
];
people[0] // -> ['Mary', 18, 'mauve']
people[0][1] // -> 18
```







### Best Practices: Bookmarklets

A bookmarklet is like a regular browser bookmark except it contains Javascript in the URL field that runs when you click the link. These instructions demonstrate how to create a simple "hello world" bookmarket. 

1. Open a new pen at [codepen.io](https://codepen.io/) and paste the string below into the HTML section. Instead of a URL, the link's href uses the word "javascript" followed by actual script to run an alert on the page. When you test this link the browser will execute the Javascript. 

<a href="javascript:alert('Hello, World!')">Hello, World!</a>

2. To install the bookmarket, drag the link from the web page to your bookmarks bar. The browser will save the text inside the href as the URL.

See this Codepen for more information about bookmarklets, including instructions to save the above "Explode!" script or an HTML/CSS validation tool as bookmarklets: [criticalwebdesign.github.io#codepen-bookmarklets](http://criticalwebdesign.github.io#codepen-bookmarklets)  




![xxxxx](images/06/06-explodeTheWeb-laTimes.png)
![xxxxx](images/06/06-19-nyt-explode.png)
Figure 6.19 The LA Times and The New York Times websites get a redesign with two lines of code in the Console. 

![xxxxx](images/06/ch6-haiku-xtine-1.gif)
https://criticalwebdesign.github.io/book/06-off-the-grid/examples/module6.3-finish.html 


![xxxxx](images/06/ch6-birds-1.gif)
https://criticalwebdesign.github.io/book/06-off-the-grid/examples/birds.html 



![xxxxx](images/06/ch6-maintenance-3.gif)
https://criticalwebdesign.github.io/book/06-off-the-grid/examples/maintenance.html


![xxxxx](images/06/ch6-baldwin-1.gif)
https://criticalwebdesign.github.io/book/06-off-the-grid/examples/baldwin.html



## Inspiration

- Murial Cooper [1](https://mitpress.mit.edu/university-press-week-throwback-thursday-featuring-muriel-cooper/)
- Jacqueline Casey [1](https://issuu.com/sebastianchapman/docs/comd1200_chapmansebastian_designheroes_presentatio) [2](https://www.google.com/search?q=Jacqueline+Casey+designer&tbm=isch)
- Daniel Temkin [esoteric.codes](https://esoteric.codes)



