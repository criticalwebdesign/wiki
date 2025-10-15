---
title: Chapter 7 Ethical Design
description: Links, references, and footnotes
---



## Context

In Chapter 7 we turn to accessibility and inclusion as goals of ethical design. We explore and offer examples of “deceptive design” (formerly dark patterns) such as Hidden Costs, Confirm Shaming, and Disguised Ads, and discuss alternatives to such practices. Readers will learn how to identify and test for accessibility using the WAVE Web Accessibility Evaluation Tools, as well as best practices for coding with accessibility in mind. 





![xxxxx](images/07/07-01-ethical-hierarchy-of-needs.png)
Figure 7.1 Our interpretation of the “Ethical Hierarchy of Needs” (CC BY 4.0) from the Ethical Design Manifesto, created by Aral Balkan and Laura Kalbag https://ind.ie/ethical-design/ 
ALT: Diagram showing the “Ethical Hierarchy of Needs”



![xxxxx](images/07/07-02-design-patterns-navigation.png)
Figure 7.2 A selection of common design patterns for website navigation presented across these four sketches (in color) includes (clockwise from top left) the “main menu,” “breadcrumb,” “pagination,” and “fat footer.”
ALT Diagram showing common design patterns for navigation



![xxxxx](images/07/07-03-dark-pattern-thredup.png)
Figure 7.3 Deceptive patterns can be found on many shopping websites that pressure users to complete purchases by informing them that items are in high demand (Fake Social Proof) and/or will likely sell out soon (Fake Scarcity). 





![xxxxx](images/07/07-04-eclipsesoundscapes.png)
Reginé Gilbert is an Industry Assistant Professor and James Weldon Johnson Professor at NYU in the Integrated Design & Media program of the Tandon School of Engineering. She lives and works in New York City. Reginé is author of Inclusive Design for a Digital World: Designing with Accessibility in Mind. For the last three years my students have been working on a NASA-funded UX/UI project to make soundscapes of the eclipse accessible for blind and low-vision folks. ARISA Labs received the grant to collect sounds from the eclipse for their Citizen Science project, https://eclipsesoundscapes.org. This project uses technology to study how solar eclipses affect life on earth. For instance, we know that before and after a solar eclipse you won’t hear crickets, but during the eclipse you will, because we have heard recordings of the crickets made by citizen scientists (participants with recorders). These recorded sounds are uploaded to the Zooniverse platform and shared through the EclipseSoundscapes web page. https://eclipsesoundscapes.org



## 7.1 Accessibility



### Accessibility Testing Tools

A list of accessibility testing tools that we found to be helpful and intuitive:

- WAVE https://wave.webaim.org/ 
- ANDI https://www.ssa.gov/accessibility/andi/ 
- LERA https://advancedbytez.com/lera/ 



### Best Practices: WAVE caveats

- This initial display of the WAVE tool and resulting addition of icons and manipulation of web page elements, we found, took some getting used to. However, WAVE is an industry standard that provides potentially valuable feedback regardless of issues we found as of December 2023: 
- The WAVE interface almost always breaks the page layout which makes it messy and hard to use. 
- The design of the WAVE interface itself could be improved. It does not make good use of whitespace, the Summary items are not hotlinked to their respective areas in the tabbed menu, nor does it make a clear distinction between which items are positive or negative accessibility findings on the page.  
- The icons WAVE uses, which contain tiny miniature icons attached to the bottom right (meant to communicate errors, warnings, and everything else) could be greatly improved to make them more readable, cohesive, and potentially, changed to overlay the page instead of interrupting (and breaking) the HTML flow.
- We also found WAVE recommendations to be inconsistent across installations. xtine found "structural tag" warnings with the module 7.3 start file, but Owen encountered none of these regardless of testing using the same file, browser, and operating system. 



![xxxxx](images/07/07-05-WAVE-viewFromHere.png)
Figure 7.5 This screenshot of WAVE’s summary from October 2023 shows errors and alerts drawing attention to elements one could adjust to achieve greater accessibility. 
ALT A screenshot of WAVE in action, providing a summary for the AIGA Our Story page.



![xxxxx](images/07/07-06-WAVE-errors.png)
Figure 7.6 There are 9 errors found, including missing alternative text, which we can confirm in the code drawer at the bottom.
ALT: A screenshot of WAVE focusing on missing alternative text.


![xxxxx](images/07/07-07-WAVE-skippedHeading.png)
Figure 7.7 The “Skipped heading level” alert shows where the code presents heading levels seemingly out of order. 
ALT A screenshot of the WAVE tool displaying a skipped heading level alert.



![xxxxx](images/07/07-08-color-vision-test.png)
Figure 7.8 Results from using the Emulate vision deficiencies option in DevTools. The original Ishihara test image is on the left, followed by the Protanopia and then Deuteranopia (red-green) emulation.
ALT: In red-green color blindness the users cannot distinguish the green dots in the center of the circle that make a "74".




## 7.2 Design Patterns & Prototypes

![xxxxx](images/07/07-09-proportions.png)
Figure 7.9 Potential methods for representing proportionality of a value, including (from top) horizontal stacked bar charts, proportional area charts, and icon array charts.





![xxxxx](images/07/07-10-wireframe.png)
Figure 7.10 A design showing 50.8% of users affected by accessibility issues. 
ALT Design wireframe with portraits contained in circles using contrast in opacity to visualize data.  



![xxxxx](images/07/07-11-card-layout-iterations.png)
Figure 7.11 Variations of layouts showing the card pattern used to combine the percentage and text blurb into an interactive menu. 
ALT Design iterations made in Figma.



![xxxxx](images/07/07-12-finalLayout.png)
Figure 7.12 This final design departs from the card to use a progressive disclosure pattern. As users hover over the number values text is revealed underneath to describe the statistic.


![xxxxx](images/07/07-13-header.png)
Figure 7.13 The title, menu with percentage values, and text blurb.
ALT The header area includes text and a series of navigation buttons with percentage values.



![xxxxx](images/07/07-14-nav-setActive.png)
Figure 7.14 The navigation menu now shows which menu option is currently active.
ALT Screenshot of the navigation with a menu option selected.



![xxxxx](images/07/07-15-testingInConsole.png)
Figure 7.15 Using numbers to test the for loop.
ALT Screenshot of the web page and DevTools console.






### 7.2.4 Control Flow

By default, a web browser interprets Javascript code line by line, until it reaches the end. You already learned to control the flow of your program using a `for` loop in Chapter 6, repeating specific blocks of code as many times as needed. Similarly, a **conditional statement** allows you to change which code will run based on the state of information in your program. As the second example in Figure 7.16 illustrates, when a conditional statement is evaluated, it either runs the statement block if the condition is true, or skips to the end when the condition is false. 


![xxxxx](images/07/07-16-control-flow-if-ifelse-else-statement.png)
Figure 7.16 This diagram demonstrates the normal flow of javascript code, as well as different scenarios using if statements. 
ALT: A diagram showing the flow of if statements 

To create the branching structures you see in the figure 7.16 you can use an if statement. As the name suggests, if the expression is true, the following statement block (inside the curly braces) will be executed. Otherwise, if the condition is false, unless you also add an if/else or else block, the code will continue the normal flow. Figure 7.17 shows how an if statement is written. At its core is an expression that returns a boolean value (either true or false) using a comparison operator. In table 7.4 we show several examples using comparison operators.



![xxxxx](images/07/07-17-control-flow-if-statement-code.png)
Figure 7.17 The anatomy of an if statement. 
ALT: A diagram showing the syntax for an if statement in Javascript




Expression | Returns | Notes
--- | --- | ---
`1 == 1` | `true` | The double == returns true if the values are equal and false if not.
`1 == 2` | `false` | 
`1 != 2` | `true` | The != operator returns true if the expression is false.
`1 == "1"` | `true` | Javascript is a weakly-typed language; it will try to convert the value on the left to a string and then compare to find them equal.
`1 === "1"` | `false` | Javascript's special triple === evaluates the condition of both the value and the type of data being compared.
`3 > 1` | `true` | Greater than and less than operators also return a Boolean value

Table 7.4 Expressions using comparison operators

As you noticed in figure 7.16, you can also test other conditions using an `if/else` statement. And finally, you can use an `else` statement to define a default condition. You can also combine conditional expressions using logical operators ( and `&&,` or `||`, not `!`) to combine the results of the expressions and account for more than one variable.

Expression | Returns | Notes
--- | --- | ---
`(1 < 2 && 3 > 4)` | `false` | Use && ("and") to test if both expressions are true
`(1 < 2 || 3 > 4)` | `true` | Use two "pipes" || ("or") to test if either expression is true
`!true` | `false` | Use ! ("not equal") to test if the expression is not true
`!(1 > 2)` | `true` | 

Table 7.5 Expressions using logical operators

Now we will apply what you’ve learned about control flow by typing the following if statement in the Chrome Console. Open a new browser window and press Command+Option+J to access the Console. This code snippet evaluates more than one condition in an `if`, `if/else`, and `else` statement using comparison and logical operators. Notice how we use a comma to separate multiple variable declarations. What do you think this will output? Test your answer in the console.

```js
let apples = 2, 
    blueberries = 4; 

if (apples >= 2 && blueberries >= 4) {
	console.log("we can make fruit salad")
} else if (apples > 3 || blueberries > 2) {
	console.log("we can make pie!")
} else {
	console.log("we need more fruit")
}
```





![xxxxx](images/07/07-18-testingRandomization.png)
Figure 7.18 The Console shows the 36 randomized integers selected for the user array, between the numbers 0 and 115.
ALT Screenshot of the web page and Console while testing randomization.


![xxxxx](images/07/07-19-navigationWorks.png)
Figure 7.19 The working example after the above changes.
ALT: Screenshot of the page in development with a functioning navigation bar.




## 7.3 Implementing Accessible Design







![xxxxx](images/07/07-20-wave-summary.png)
7.20 The WAVE tool summary shows errors, alerts, structural elements, and more. 
ALT Screenshot of the WAVE tool summary for our current page design. 


![xxxxx](images/07/07-21-waveErrors.png)
Figure 7.2 The 36 errors are all cases of missing alternative text for the portrait images.
ALT Screenshot of the WAVE errors.



![xxxxx](images/07/07-22-waveSuccess.png)
Figure 7.22 Results of a retest of our page after edits to correct accessibility errors and alerts.
ALT A screenshot of the WAVE accessibility report



![xxxxx](images/07/07-23-userCount-viewport.png)
Figure 7.23 Before and after adding the code to update the number of users based on the viewport size.

![xxxxx](images/07/07-24-finalDesign.png)
Figure 7.24 The final design follows accessibility guidelines.
ALT: Screenshot of the final project file in the browser.




> **Best Practices: ARIA**
> One method for making HTML documents accessible that we do not explore in this exercise is the use of ARIA roles for clarifying HTML elements or features that are not already well-defined for the browser. As we noted in the aiga.org discussion above, much of the time it would be better to simply use the semantic HTML already available. In fact, this is so often the case, that it is also a best practice. The Mozilla documentation for ARIA includes the following statements from the W3 specification about the importance of semantic HTML and its priority over ARIA landmarks: The first rule of ARIA use is, "If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of repurposing an element and adding an ARIA role, state or property to make it accessible, then do so." Read more at https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA 






> **Best Practice: Process of Elimination**
> If ever you are coding and run into a hard to solve problem, consider using a process of elimination to find your issue. This can be done in HTML, CSS, JS or any code language (or a situation in life) by disabling or removing factors which make it hard to detect an issue. For example, say you are working on the prompt from this chapter and for some reason you cannot make the background fill the whole page






## Related

- https://arstechnica.com/uncategorized/2008/08/target-to-pay-6-million-to-settle-site-accessibility-suit/
- https://www.smashingmagazine.com/2018/03/ethical-design-practical-getting-started-guide/#black-hat-design
- https://eyekiller.com/blog/accessible-websites-arts-council-of-northern-ireland

