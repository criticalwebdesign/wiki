---
title: 6.2 Javascript Arrays and Loops
description: Links, references, and footnotes
layout: default
# draft: true
---

<div class="callout-intro">
👉 Create animation using Javascript.
</div>









## Javascript Functions, Arrays, and Loops

Create animations on the page using these three features of Javascript.

- **Functions** allow you to write repeatable code
- **Arrays** are data type that lets you store multiple values
- **Loops** are a control structure that let you repeat specific code

<figure>

![functions](../../../assets/images/06/06-12-JS-function-anatomy.png)
Use the `function` keyword to declare a function, one or more parameters to customize its task, and `return` to send data back to the location where it was called. ​​To use a function, call it with the function's name and two parentheses `()`. 

</figure>

<figure>

![Diagram showing how a loop repeats until a condition is met.](../../../assets/images/06/06-13-for-loop.png)
A loop is a kind of control structure that will repeat until a condition is met.

</figure>

<figure>

![for loop](../../../assets/images/06/06-14-js-for-loop-anatomy.png)
A Javascript `for` loop includes a control variable, loop condition, and iterator. If the condition is true then the code in the statement block will run.

</figure>

Putting this all together...

```js
// element reference in variable
let ele = document.querySelector("jsColors");
// array of colors
let colors = ["red", "green", "blue"];
// declfunction
function changeColors(){
    // move first element in array to last index
    colors.push(colors.shift());
    // loop through array
    for (let i = 0; i < colors.length; i++){
        ele.style.backgroundColor = colors[i];
        ele.innerHTML = colors[i];
    }
}
```

<button class="jsColors bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">See it in action</button>

<script>
// store reference to element in a variable
let ele = document.querySelector(".jsColors");
// declare an array
let colors = ["red", "green", "blue"];
// declare a function
function changeColors(){
    // move first element in array to last index
    colors.push(colors.shift());
    // loop elements in the array
    for (let i = 0; i < colors.length; i++){
        ele.style.backgroundColor = colors[i];
        ele.innerHTML = colors[i];
    }
}
document.querySelector(".jsColors").addEventListener("click", function(){
    setInterval(function(){
        changeColors();
    },500);
});
</script>



:::caution
Refresh the page to reset the animations!
:::






## 6.3.2 Anonymous Functions and Scope

Look back at the code in the preceding exercise. Using the function keyword to define the reusable code of `randomNumber()` is called a **function declaration**. However, the function keyword in the second parameter of addEventListener also creates a function (see Module 3.3) to handle the event. Passing the callback function like this as an argument is an example of a **function expression**. Function expressions created without a name are **anonymous functions** but they can also be stored in a variable, which we show below by rewriting `randomNumber()` as a function expression. The "fat arrow" syntax is more concise.

```js
const randomNumber = (min, max) => {
	return Math.random() * (max - min + 1) + min;
}
```

The location you declare a variable determines its **scope**, or how its value can be accessed by other parts of your program. We declared rotation in the **global scope** (outside of any functions) so we could access it from anywhere ("globally") in the program and add to the value over time. Alternately, variables created inside a statement block have **local scope** and are only accessible "locally" inside the curly braces where they were declared. So, creating a function not only packages your code for reuse, it also allows you to protect variables from being changed accidentally by other parts of your code. 





:::tip[Functional Programming]
With time, you’ll see that functions work best as small, single purpose expressions. Like functions in algebra, **pure functions**, those that always return the same output given the same input, are easier to test and reuse. You can see we have started to do this by linking to a single JS file called (appropriately) functions.js in the main assets folder of the repository. Pure functions are one feature of a programming paradigm called **functional programming** used by professional Javascript coders to write code that is easier to understand and more bug resistant.

Eric Elliott, “What Is Functional Programming?” JavaScript Scene, August 24, 2021, accessed June 3, 2024, https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0.
:::




## Exercise 6.3.2 Create and Access an Array

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







## Best Practices: Bookmarklets

A bookmarklet is like a regular browser bookmark except it contains Javascript in the URL field that runs when you click the link. These instructions demonstrate how to create a simple "hello world" bookmarket. 

1. Open a new pen at [codepen.io](https://codepen.io/) and paste the string below into the HTML section. Instead of a URL, the link's href uses the word "javascript" followed by actual script to run an alert on the page. When you test this link the browser will execute the Javascript. 

<a href="javascript:alert('Hello, World!')">Hello, World!</a>

2. To install the bookmarket, drag the link from the web page to your bookmarks bar. The browser will save the text inside the href as the URL.

See this Codepen for more information about bookmarklets, including instructions to save the above "Explode!" script or an HTML/CSS validation tool as bookmarklets: [criticalwebdesign.github.io#codepen-bookmarklets](http://criticalwebdesign.github.io#codepen-bookmarklets)  




