---
title: Chapter 2 View Source
description: Links, references, and footnotes
---


## Context 

In Chapter 2 readers will learn about copyleft practices and concrete poetry while reimagining a quote from a design manifesto for the browser using HTML, CSS, and Javascript. Following the prompts in Chapter 2, readers will choose a license for their manifesto/concrete poem and cite their source in the console. 

![An image of The New York Times from the developer console.](images/02/02-01-ascii-art-nyt.png)
Figure 2.1 This ASCII art image of The New York Times logo can only be viewed by using developer features found in all web browsers. See more at https://omundy.github.io/console.love



![A-side and B-side views of the tape.](images/02/02-02-NEW-deadKennedys.jpg)
Figure 2.2 Dead Kennedys, “In God We Trust, Inc.” cassette tape. Side B of the Dead Kennedys’ 1981 album, “In God We Trust, Inc.” features the message “Home taping is killing record industry profits! We left this side blank so you can help.” This cassette tape encouraged sharing and free distribution before the rise of Napster and other digital sharing websites (Figure 2.2). 


![Screenshot of MSCHF’s The FREE Movie. ](images/02/02-02-TFM_Wesbite_Interface-SRGB.png)
Figure 2.3 MSCHF, web interface for crowdsourced drawing, The FREE Movie, 2019 (ongoing).


![Poem Think](images/02/02-03-Poem-Think.png)
Figure 2.4 After completing the exercises in this chapter you will create a work of expressive typography based on a manifesto of your choice. 


### Design Manifestos

A list of manifestos by artists, designers, and engineers:

- https://molleindustria.org/files/BIG-DATA.html 
- https://designmanifestos.org 
- https://designmanifestos.org/first-things-first-a-manifesto-2020-edition/ 
- https://antisoftware.club/manifesto.html 
- https://criticalengineering.org 



![Screenshot of Molleindustria’s BIG DATA.](images/02/02-04-BIG-DATA.png)
Figure 2.5 BIG DATA is a manifesto written and designed by Molleindustria https://molleindustria.org/files/BIG-DATA.html that mimics Tristan Tzara’s 1921 Dadaist manifesto design. See Tzara’s DADA soulève tout in the Museum of Modern Art’s online collection, https://www.moma.org/collection/works/184054. See these other websites that offer manifestos for artists, designers, and engineers: https://github.com/criticalwebdesign/book/wiki/Chapter-02#design-manifestos













## 2.1 Design Fundamentals



![2.5 Screenshot of Guillaume Apollinaire’s Calligrammes.](images/02/02-05-calligrammes.png)
Figure 2.6 Guillaume Apollinaire, Calligrammes book of concrete poetry, 1918. Courtesy of the Public Domain Review website.



![Screenshot of the Getty Research Institute’s 2017 Concrete Poetry exhibit.](images/02/02-06-Campos.png)
Figure 2.7 Open (Abre), Augusto de Campos and Julio Plaza, Poemobiles 1968-1974, Getty Research Institute, Los Angeles (92-B21581).This work is featured in the Getty Research Institute’s 2017 exhibition, Concrete Poetry: Words and Sounds in Graphic Space. View this and additional works, https://www.getty.edu/research/exhibitions_events/exhibitions/concrete_poetry/





![ASCII art of Tweety Bird cartoon with the phrase “Smash the Patriarchy”](images/02/02-07-ascii-art-patriarchy.png)
Figure 2.8 "SMASH THE PATRIARCHY" ASCII art found in DevTools console “What is Code?” by Paul Ford. See more at https://omundy.github.io/console.love



![Animation frame, "BUST DOWN THE DOOR!"](images/02/02-08-bustDown.png)
Figure 2.9 “BUST DOWN THE DOOR!” by Young-Hae Chang Heavy Industries, 2000 animated text synched to a jazz soundtrack. https://www.yhchang.com/BUST_DOWN_THE_DOOR!_V.html 



![xxxxx](images/02/02-09-wireframes.png)
Figure 2.10 Designers create wireframes at the beginning of the process using simple geometrical shapes to decide where they will place content in the layouts.
ALT: Wireframes boxes acting as placeholders in a grid design.




![wireframe](images/02/02-10-dont-be-evil-sketch.png)
Figure 2.11 The wireframe Owen made for the example he designed for this chapter was created with pencil on graph paper. See the result at https://criticalwebdesign.github.io/book/02-view-source/examples/poem-evil.html 



![wireframe](images/02/02-11-thinkDifferentWireframe.jpg)
Figure 2.12 The wireframe drawing for the example xtine designed for this chapter expresses the Apple slogan “Think Different!” It was created in a sketchbook with ink. It’s a good idea to leave notes for yourself and a date as you are working. 



![Webpage showing the focus of the user's eyes as they move around the page. ](images/02/02-12-baby-eye-tracking.png)
Figure 2.13 In the baby product ad at the top, the results of an eye movement test show the order and location of the test user's focus as they move their eyes around the design. The second row shows a heatmap from the eye tracking test. While the composition on the left shows only one strong heat spot, in the composition on the right, participants’ eyes followed the gaze of the baby to increase engagement with important information on the page. This is an example of using leading lines (in this case the baby’s gaze) to direct attention. Image appears courtesy of James Breeze, made with Tobii eye tracker. 







## 2.2 HTML & CSS


![Diagram showing primary components of a URL (Uniform Resource Locator)](images/02/02-13-URL-anatomy.png)
Figure 2.13 This figures shows the primary components of a URL for a “breakfast burrito”




![The hierarchy of folders and files in your website is the file address or path.](images/02/02-14-hierarchyOfFolders.png)
Figure 2.14 The hierarchy of folders and files in your website is the file address or path.




![A diagram showing the anatomy of a CSS rule](images/02/02-15-css-anatomy.png)
Figure 2.15 This CSS diagram shows the anatomy of a rule, including the selector, and properties and values in the declaration block. 




2.2.5 CSS Specificity 
Now that you have three rules applied to the h1 tag, you might be wondering why the blue style has priority? Unless you explicitly override it, all styles set in parent elements are inherited by the child elements. If you set a parent element purple (like our body), then all the child elements will also be purple (like the paragraph tags). The word “cascading” in the language name refers to the way that CSS resolves conflicting rules in a specific order. When conflicts arise, as they do in our h1 exercise, the most important style wins. The term for how the CSS cascade determines the winner is specificity (Figure) and it primarily depends on two factors: what kind of selector you use for the rule and where in the document you apply it. One rule of thumb is, "the closer the rule is applied to the element to be styled, the more likely it will override the others." Browsers give priority to rules included as inline styles first, then it will look at the head of the page, then an external stylesheet, and lastly it will apply any browser defaults.

![A diagram showing CSS specificity. ](images/02/02-16-css-specificity.png)
Figure 2.16 CSS specificity describes how likely a rule will be used by the browser over others applied to the same elements. 




![CSS classes can be reused in HTML, however IDs can only be used once.](images/02/02-17-CSS-class-vs-id.png)
Figure 2.17 Class attributes can be reused in HTML, but IDs can be just used once.





![The difference between block-level, inline, and inline-block elements in CSS.](images/02/02-18-CSS-block-vs-inline.png)
Figure 2.18 An example showing the difference between block-level, inline, and inline-block elements in CSS.




![Abstract Browsing](images/02/02-19-abstractbrowsing.png)
Figure 2.19 Abstract Browsing by Rafaël Rozendaal and Reinier Feijen (2014) is a browser extension that transforms all block-level elements on every webpage into colorful abstract patterns. 




![A diagram showing the margin, border, padding, and content components of the CSS box model.](images/02/02-20-CSS-box-model.png)
Figure 2.20 A diagram showing the margin, border, padding, and content components of the CSS box model.





![CSS position](images/02/02-21-CSS-position.png)
Figure 2.21 Elements can be positioned four ways. Static is the default, and causes the element to "go with the flow" of the page. Relative position means an element's position can be offset using the top, right, bottom, or left properties. Absolute position will make the element's origin the top left of a page. Fixed position is the same as absolute, except the element will stay fixed even if the page scrolls.


### Exercise 2.2.5 Using CSS Display and Position Properties

Edit the box model properties in CSS.

1. Open view-source/index.html in VS Code. In the <style> element, add a new CSS rule for paragraphs and set their display property to inline-block. If you test your work you'll see they are no longer taking up the full width.

```css
p { 
	display: inline-block; 
}
```

2. Update the p rule in CSS to reflect the code sample below. The code shown in gray was already added. You can see the updated rule adds spacing between the paragraphs in Figure 2.21.

```css
p {
	display: inline-block;
	width: 70px;
	height: 20px;
	margin: 20px 20px 0 0;
	padding: 10px;
	background-color: lavender;
}
```

3. Another way to affect an element's position is by completely removing it from the flow of the page. Add a new class to your CSS using the code below. Then add this class to the last paragraph element on the page. This will cause the paragraph to be positioned relative to the top left corner of the browser window. See Figure 2.16 and this codepen for more https://codepen.io/owenmundy/pen/LYmRqob 

```css
.anywhere {
	position: absolute;
	top: 350px;
	left: 180px;
}
```








## 2.3 Javascript & DevTools 

![Element tool](images/02/02-22-elementtool.png)
Figure 2.22 Use the Element tool to select and inspect elements on the page.




![A screenshot of the Elements tab in DevTools.](images/02/02-23-CSS-devtools.png)
Figure 2.23 Using the DevTools, developers can see and manipulate a live version of the page. The element is visualized in the bottom right using the Box Model diagram. 






![Executing an alert function in the Console](images/02/02-24-devtools-alert.png)
Figure 2.24 We tested Javascript directly in the Console in this exercise.




![Tree diagram of the document object model.](images/02/02-25-js-dom.png)
Figure 2.25 The hierarchical document object visualized.






![A screenshot showing how to run Javascript in the Console prompt.](images/02/02-26-devtools-dom.png)
Figure 2.25 Use the Console to test Javascript before you save it in your script tag.




![A screenshot of the Console showing messages, warnings, and errors.](images/02/02-27-devtools-errors.png)
Figure 2.26 The Console can show several types of messages, warnings, and errors to let you know about issues with your page.
 




![A screenshot showing code with a syntax error due to the use of smart quotes in VS Code.](images/02/02-28-DumbSmartQuotes.png)
Figure 2.28 VS Code and other editors use color to let you know when your code syntax is not correct. The first line in this image uses dumb quotes so the formatter changes the color to indicate it is recognized as a string. The second line uses smart quotes (a.k.a. "curly quotes") so the formatter shows the string does not conform to a single color and adds red underlines to signify the syntax error.

> Best Practices: Avoid smart quotes
> You should always design with smart quotes and code in dumb quotes.



![outcome](images/02/ch2-Poem-Think-code.png)
Figure 2.29 This outcome https://criticalwebdesign.github.io/book/02-view-source/examples/poem-think.html is based on Apple’s “Different” manifesto/campaign. It employs inline and block styles as well as some negative values for margins to emphasize repetition and contrast in scale, value, and form (rotation). 




![outcome](images/02//ch2-Poem-Chaos-code.png)
Figure 2.30 This outcome https://criticalwebdesign.github.io/book/02-view-source/examples/poem-chaos.html uses Javascript to update the CSS of the page to create an animated rendition of Rachel Greene's description of the possibilities and "chaos" of the WWW from her book, Internet Art. 












## Bibliography

- [Eye Tracking 2021 – You Look Where They Look!](https://www.objectiveexperience.com/eye-tracking-ux-research/)
- https://monoskop.org/images/c/c9/Brand_Stewart_ed_Whole_Earth_Software_Catalog.pdf
