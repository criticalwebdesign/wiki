---
title: Chapter 4 On the Grid
description: Links, references, and footnotes
---




## Context 

Chapter 4 introduces readers to grid-based design, starting with a historical overview of the use of grids in printing with moveable type and concluding with grids for responsive design. The modules put this context into practice, introducing frames and layout grids for desktop, tablet, and mobile devices in Figma, discussing content hierarchy using display and body type, and coding a simple responsive layout with the Bootstrap framework using lorem ipsum placeholder text to work across all devices.


### Usability Resources

- NN/G [Thinking Aloud: The #1 Usability Tool](https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/)
- Wikipedia [Think aloud protocol](https://en.wikipedia.org/wiki/Think_aloud_protocol)
- Wikipedia [Comparison of usability evaluation methods](https://en.wikipedia.org/wiki/Comparison_of_usability_evaluation_methods)




### Exercise 4.0.1: What is Good Design?

The following exercise asks you to evaluate your response to good design. As an example of “learning through discovery,” it works best if you actually do the activity, whether you are reading this section on your own or with a group in a classroom.

1. Think of a company or organization that you associate with “good design.” 
2. Explore the website of the organization, consider the objects, software, or other things they create. Use the Thinking Aloud method (see the sidebar) while you look to evaluate your response to the design.
3. List some reasons why you might have selected this organization. What about their website, products, or other aspects of their brand or identity (see chapter 3) are examples of good design?

Here we share notes from our own response to the above questions, using the “Thinking Aloud” method to assess apple.com (Figure 4.1): 

> [on the Apple home page] *“Apple spends billions of dollars on marketing each year, and it is evident in their product photography. All of these images are beautiful, especially the product close-ups and details.”*
>
>![The Apple Watch Ultra home page](images/04/04-01-apple-watch-comp.png)
> Figure 4.1 The Apple Watch Ultra home page
>
> [clicks the Apple Watch Ultra page] *“Isn't it interesting how the color chosen for the text that describes the watch features on the web page (Figure 4.0.1) matches the color on the actual watch crown and band? All the typefaces and type treatments on the page are equally consistent. Body text about the product is always left-aligned, making it easy to scan.”*
>
> [scrolls through the Watch Ultra page] *“There is that orange color again—on a watch band, a call to action (CTA) button (see sidebar), and even on icons above text blocks— creating focal points that guide our eyes around the page. So many things are uniform, even the animations on this page move at the same speed!”*

So, what is the answer to the question presented above? If there is one solid principle you can take from Apple's brand, products, webpage, everything, it is this: ***Consistency is central to good design.***





![A screenshot of Apple's design template for iOS 17 published on Figma](images/04/04-03-appleHomeScreens.png)
![A screenshot of Apple's design template published on Figma](images/04/04-03-apple-template.png)
Figure 4.3 A Figma design template published in the Apple Design Resources for iOS 17 and iPadOS 17 https://developer.apple.com/design/resources/ to help designers and developers ensure consistency with all Apple interfaces.



![Screenshot of the online game Kern Type.](images/04/04-02-kerntype.png)
Figure 4.2 Kern Type challenges players to adjust the kerning between letters so that the negative space between them is consistent. See https://type.method.ac 


![A four-column spread across two pages with illustrative flourishes in the gutter and margins on parchment.](images/04/04-05-Gutenburg.png)
Figure 4.5 A spread from the Gutenberg Bible, c.1450s.



### Exercise 4.0.2 Explore Style Guides
Explore style guides of organizations to see how they plan for design consistency.

![xxxxx](images/04/04-04-nasastandards.png)
Figure 4.4 The NASA Graphics Standards Manual (1976) shows how to produce consistent designs across everything that represents this iconic organization. ©Danne & Blackburn / NASA, Standards Manual.

1. In the 220 page [NASA Graphics Standards Manual](https://standardsmanual.com/products/nasa-graphics-standards-manual) (1976), Richard Danne and Bruce Blackburn show how the NASA logo, U.S. flag, and classic Helvetica typeface should be used on vans, confidential documents, and even the space shuttle (Figure 4.4).
2. The [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/charts) explains best practices across all their content. For example on the Charts page inside Content, they remind readers to "Establish a consistent visual hierarchy [to] help communicate the relative importance of various chart elements.
3. Continue exploring the above examples and find one more contemporary or past example using a search engine. Make notes about the system, including things that might not be evident at first glance.
	- [Firefox](https://acorn.firefox.com/)
	- [Uber](https://brand.uber.com/)
	- [Design Systems and How to Learn (and Steal) From Them](https://designerup.co/blog/10-best-design-systems-and-how-to-learn-and-steal-from-them/)








![Jan Robert Leegte](images/04/04-06-scrollbars-screenshot-win-win98.jpeg)
Figure 4.6 Internet artists have long embraced the grid as a defining feature for commentary and aesthetic disturbances. Jan Robert Leegte, Scrollbar Composition, 2000 website collection Stedelijk Museum Amsterdam http://www.scrollbarcomposition.com/ 

![Left aligned text](images/04/04-07-alignment.png)
Figure 4.7 Left aligned text has a straight edge and each line starts at the same horizontal origin. Center-aligned text has a ragged left edge and each line originates from a different location.

![An example of Swiss design with bold headings and organized columns.](images/04/04-08-swiss-design-stadttheater-comp.png)
Figure 4.8 The text and graphic elements of the grid form invisible “leading lines” that move viewers' eyes around the page in our reproduction of a poster by Josef Müller-Brockmann, 1959.



![DevTools revealing the underlying grid of HTML elements in the Apple Watch Ultra page.](images/04/04-09-applewatch-grids.png)
Figure 4.9 DevTools revealing the underlying grid of HTML elements in the Apple Watch Ultra page.


![Wireframes demonstrate changes, especially noticeable in column number and width, in a responsive layout across device sizes. ](images/04/04-10-responsive-breakpoints-color.png)
Figure 4.10 These wireframes show how a responsive layout changes across device sizes. 



![xxxxx](images/04/04-11-caseStudy-Lena-comp-1page.png)
Figure 4.11 Jan Diehm’s design for The Pudding’s “Does Data Die?” incorporates an interactive grid and explosive image boxes that follow the cursor as the viewer scrolls through the article. The text consistently flows in an easy to read, high contrast single column on the right while graphics animate throughout the page. Just as pixels combine to form an image, the reader combines these elements to understand the history of Lenna's image. Read and interact with this piece at https://pudding.cool/2021/10/lenna/ 


![xxxxx](images/04/04-13-caseStudy-waffleBoards.png)
Figure 4.13 Jan Diehm’s skateboard chart graphic for The Pudding’s “The Good, The Rad, and The Gnarly” appears in an evenly-spaced  8-column grid to visualize music genres that appear in skate company commercials. 
ALT: Screenshot of the article showing the data visualization as the primary page content. Article text appears below the chart, centered on the page in a single column.


![xxxxx](images/04/04-12-caseStudy-Kissed-comp-2pages.png)
Figure 4.12 Jan Diehm’s design for The Pudding’s “I Kissed a Girl to Call Me By Your Name” featuring Lil Nas X sliding down a pole as a scrolling interaction.
ALT: Screenshot of The Pudding with a yellow background and graphic scrolling vertically on the right side of the page. 










## 4.1 Responsive Design in Figma


![xxxxx](images/04/04-15-grid-figma.png)
Figure 4.15 Change the layout grid to a 12-column grid in Figrma using the layout grid settings. 
ALT Layout grid interface in Figma


### Exercise 4.1.1 Create a Grid-based Layout in Figma

1. Open our Figma file or create your own new design file in Figma. If you are making your own, select the Frame tool (it looks like a #) and choose Desktop from the panel on the right. This will create a new frame the size of a desktop display (1440 x 1024 pixels). If you are using ours, explore the file as you read each step in this exercise.
2. Select the new frame and in the panel on the right, click the plus sign (+) next to “Layout grid” to add a new grid. This will add a 10px grid.
3. Change the grid to columns by clicking the Layout grid settings icon to expand the options for the grid. Click on the pull-down menu set to “Grid” and change it to “Columns” then modify the grid so that it appears as 12 columns. Change the width of the grid to 73px and the gutters (the spaces between the columns) to 24px (visible in Figure 4.9 below). This matches the 12 columns in the Bootstrap CSS framework and will make it easy to later transfer your design to the coded version. 
4. Make a screenshot (see Common Key Commands table in the Introduction) of The New York Times home page and place it into your Figma file. Center the image across the 12 columns, with the left text box aligned along the edge of the first column. Note: If you need to scale images in Figma, press and hold the Shift key to constrain the image’s proportions, preventing it from stretching. (Figure 4.9)




![Screenshot of the New York Times website on a 12-column grid.](images/04/04-16-Desktop-12-grid-columns.png)
Figure 4.16 The New York Times home page screenshot scaled so the width matches the 12-column grid in Figma.



5. Similar to the mockup you created for the prompts in Chapter 3, use the screenshot as a reference, and begin laying out the wireframe of the page using the Rectangle (creating placeholders for images) and Text (using Lorem Ipsum for text) tools. The goal is to preserve the spirit of the design without trying to replicate their precise grid structure. The home page design of a news website changes often, and it is also possible they are not using a 12-column grid as their base structure. This is a work of interpretation.
6. When the desktop wireframe is complete, create a new frame based on the tablet grid and develop a wireframe for the tablet breakpoint. Start with either a twelve- or six-column grid. Then repeat for a mobile breakpoint. The grid you make for mobile can be four- or two-columns. You should have three wireframes when you are finished for the desktop, tablet, and mobile experience.

![xxxxx](images/04/04-17-figma-grid-settings.png)
Figure 4.17 The grid column settings for the Desktop (12), Tablet (6), and Phone (2 columns) that will match the Bootstrap grid system code used later in the chapter.






![xxxxx](images/04/04-18-colorpalette.jpg)
Figure 4.18 For this color palette generated on Coolors.co we chose a much lighter shade of the blue that was automatically generated to counterbalance the deep blue, bright pink, and vibrant green in the palette. Consider having two light and/or neutral shades in your palette so you can make contrast between your dark and light values in your design. 
ALT Screenshot of a color palette created on Coolors.co. 


![xxxxx](images/04/04-19-visualizeColors-needPermission.png)
Figure 4.19 See your color palette in action! The Visualize Colors button leads you to a new web page that applies your color palette to vector art, type, and information design. 
ALT: Screenshot of the results of pressing the “Visualize Colors” button.


![xxxxx](images/04/04-20-nyFelines.png)
Figure 4.20 Use the Text tool and replace images with a genre of your choice. Recreate the masthead with a Blackletter font such as UnifrakturMaguntia.
ALT: A screenshot of our New York Felines redesign.






## 4.2 Integrating Bootstrap







### The D.R.Y. Principle

One reason responsive CSS frameworks like Bootstrap are so widely used is that they help you adhere to a software principle called **DRY**. DRY, or “don't repeat yourself,” is aimed at reducing repetition to make writing and managing code easier. You have already been practicing DRY in this book:
- **More efficient coding** - Writing the same code over and over requires time and energy to keep consistent with previous code. You used CSS to define classes that can be reused across your site. For example, defining a typeface once for the whole site inside an html rule ensures you only need to write it once.
- **Easier maintenance** - While it makes perfect sense to copy code you've written from a previous project (e.g. to make a website responsive), what if you find a bug? Now you have to stop working on the current task to find and fix the issue in every project that uses that code. This is where Bootstrap helps, providing access to a huge amount of thoroughly-tested boilerplate code with standard features needed for every new site.
- **Avoiding errors** - Think of a program that changes a color on the page depending on user interaction. However, instead of adhering to DRY, the program updates the color from several different locations. This makes it difficult to find where the error originated. Writing code once will ensure a program does not conflict or cause unexpected behavior.
In short, when you write DRY code you will be more efficient and encounter fewer errors!














![xxxxx](images/04/04-21-bootstrapRoot.png)
Figure 4.21 Use DevTools to inspect the CSS breakpoint and color classes that Bootstrap adds to the root element
ALT: Using the styles tab in DevTools to inspect the CSS classes that Bootstrap adds


![xxxxx](images/04/04-22-bootsstrapPrimary.png)
Figure 4.2.2 Use DevTools to see Bootstrap’s btn-primary class custom properties.
ALT: Use DevTools to see Bootstrap's btn-primary class custom properties





### Exercise 4.2.3 Override Bootstrap Styles

There are generally two ways to override Bootstrap styles. The Bootstrap documentation suggestsusually shows customizations using Sass variables. As we discussed, this requires extra setup to recompile the CSS and is really more appropriate for large projects. The method we'll show below applies to the pre-compiled version we've been using so far from the CDN. You will use DevTools to identify the classes you want to override and simply add your own rules, just as you normally would with CSS.  

1. Open `on-the-grid/index.html` in Chrome. 
2. Add the following CSS rule to change the background color of all elements that use the `btn-primary` class from the default blue color to purple. The additional `!important` rule will add more importance than normal rules for that property on that element. 

```css
.btn-primary { background-color: purple !important; }
```

> **Best Practices: CSS coding** <br> Using CSS rules low in specificity will allow you to create reusable styles that are easy to override when needed. In addition to the methods we describe above, you can add `!important` to the end of a declaration to create the most specific rule of all. Update your code with this to see what we mean.
> `h1 { color: hotpink !important; } `


3. Thanks to the CSS cascade, the above method works as long as you add it *after* you incorporate the Bootstrap CSS file. But, as you can see, it doesn’t cover all the states of interaction (hover, active, focus, etc.). This is because you haven’t added rules for each of the interaction pseudo-classes. While you could do that, you would be creating repetitious code. Instead, you'll keep your code “DRY” by overriding the custom properties in the main `btn-primary` class. Start by commenting out the rule you just added, then save your work and refresh the page in Chrome.
4. As you did in the previous exercise, inspect the “primary” button and find the rule for the `btn-primary` class with the custom properties. Since your previous rule was removed it should be blue again. Copy/paste the rule from DevTools into your `<style>` element in index.html. 
5. To override the colors used by the button you simply need to update these colors. As a test, set `--bs-btn-bg` using any of the named web colors https://en.wikipedia.org/wiki/Web_colors (Figure 4.23). We assigned the color `slateblue`. Save and refresh your work. 

```css
.btn-primary {
    	--bs-btn-color: slateblue; 
}
```

![xxxxx](images/04/04-23-bootstrap-primary-slateblue.png)
Figure 4.23 The code and results from updating the background color of btn-primary.

6. This works, but you still have to enter the same color name several times because some of the color values in this rule are being reused. To avoid repetition and make the code easier to update let’s do this using the DRY principle. You’ll need to just define seven custom properties, several of which are reused across all the interaction states. Add a `:root` rule above the `.btn-primary` rule. Then type the following seven custom properties. These properties could be any name and color. We named them using a fruit followed by the name of the first time it was used in the class. The first two colors are for the text and the five following colors are variations of orange that are progressively darker to match how Bootstrap’s hover effect works on other button classes. It was easy to create these variations with the color picker tool in Visual Studio by adding the first orange color to all of them and then selecting and slightly dragging the color picker interface to find one just a tad darker in value each time (Figure 4.24). Experiment as needed.

![xxxxx](images/04/04-24-colorPicker.png)
Figure 4.24 You can select a color with a color picker tool in Visual Studio Code by clicking on the color chip next to its hex value or name in the stylesheet. 
ALT: A screenshot for the color picker tool in Visual Studio Code. 

```css
:root {
	--oranges-btn-color: #000;
	--oranges-btn-hover-color: #000;
	--oranges-btn-bg: #eeac20;
	--oranges-btn-hover-bg: #e6a61c;
	--oranges-btn-hover-border: #eaa91e;
	--oranges-btn-active-border: #ebaa1c;
	--oranges-btn-focus-shadow-rgb: 235, 170, 28;
}
```

7. Now that you’ve added these definitions you can override all the defaults for `.btn-primary` using the CSS `var()` function. Update the rule as we did below and in Figure 4.25 then save and refresh your page in Chrome. You should see the color has been updated for all of the different states of interaction, including focus, which you can check by clicking on the page and tabbing through the buttons. 

```css
.btn-primary {
    --bs-btn-color: var(--oranges-btn-color);
    --bs-btn-bg: var(--oranges-btn-bg);
    --bs-btn-border-color: var(--oranges-btn-bg);
    --bs-btn-hover-color: var(--oranges-btn-hover-color);
    --bs-btn-hover-bg: var(--oranges-btn-hover-bg);
    --bs-btn-hover-border-color: var(--oranges-btn-hover-border);
    --bs-btn-focus-shadow-rgb: var(--oranges-btn-focus-shadow-rgb);
    --bs-btn-active-color: var(--oranges-btn-hover-color);
    --bs-btn-active-bg: var(--oranges-btn-hover-border);
    --bs-btn-active-border-color: var(--oranges-btn-active-border);
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: var(--oranges-btn-hover-color);
    --bs-btn-disabled-bg: var(--oranges-btn-bg);
    --bs-btn-disabled-border-color: var(--oranges-btn-bg);
}
```

![xxxxx](images/04/04-25-bootstrap-colors-override.png)
Figure 4.2.5 This screenshot shows our custom properties in DevTools.
ALT: A screenshot of DevTools with custom properties in place.


> **⚠️Watch Out! Bootstrap Themes** <br> A **theme** is a collection of coded files that modify the appearance or behaviors of an interface. Themes can be installed in code editors, Wordpress websites, and even Bootstrap. For example, we have been using the one-dark theme in the graphics for the book as an homage to the Atom (R.I.P.) editor we used before VS Code. Bootstrap 5.3 has something like a theme in their in-progress color modes feature to let you select between light (default) or dark modes. 
> Color mode differs from the themes widely available online that vary in quality, support, and price. It goes without saying that *practicing design* yourself is the most important path toward becoming a designer. But we also recommend you avoid using "bootstrap themes" for now so you learn the foundational concepts we present and avoid getting stuck. While third-party themes appear to be fast solutions, they usually create more work due to little documentation or support. And, perhaps more importantly, they lock you into choices someone else is making. In *The Language of New Media* Lev Manovich describes this problem well, stating that the “interface shapes how the computer user conceives the computer itself.” In other words, the tools you use ultimately affect the choices you are able to make due to the limits imposed by their creators.



![xxxxx](images/04/04-26-bootstrap-headings.png)
Figure 4.26 The headings in the Bootstrap framework scale at consistent values.
ALT: An image showing the headings in the Bootstrap framework. 





## 4.3 The Bootstrap Grid System

Bootstrap demo https://codepen.io/owenmundy/pen/oNLZpWM


![xxxxx](images/04/04-27-coolors-export-comp.png)
Figure 4.27 [Coolors.co](https://coolors.co/) export options and CSS formats.
ALT: Coolors.co export options and CSS formats


![xxxxx](images/04/04-28-bootstrap-containers-w-text.png)
Figure 4.28 Bootstrap's container-fluid class always expands to the full width of the window, while the container class has a maximum width. The .col class will expand to fill the width of the row on that container.
ALT: Diagram showing the container and container-fluid classes.


![xxxxx](images/04/04-29-bootstrap-columns-w-text.png)
Figure 4.29 A design with Bootstrap grid system showing one, two, three, four, six, or twelve equally-sized columns per row. 
ALT: A design with Bootstrap grid system showing one, two, three, four, six, or twelve equally-sized columns per row.


![xxxxx](images/04/04-30-bootstrap-columns-mixed-w-text.png)
Figure 4.30 You can mix and match Bootstrap column sizes however you like, including the offset set class which can center the columns in a container. The only rule is that the column and offset spans together add up to 12. 

![xxxxx](images/04/04-31-VS%20Code%20auto%20complete.png)
Figure 4.31 The Emmet package in VS Code lets you type the beginning of an HTML element and press tab to add the open and close tag you want. This feature also lets you add HTML elements with their class names by typing the full name of the selector.
ALT A screenshot showing code autocompletion in VS Code.


![xxxxx](images/04/04-32-divs.png)
Figure 4.32 Your code should contain five divisions in total, as well as headers and an image. 
ALT A screenshot showing code completed so far.


![xxxxx](images/04/04-33-secondColumn.png)
Figure 4.33 The image in the second column is not scaling or reflowing like the text.
ALT A screenshot of the image in the second column.


![xxxxx](images/04/04-34-addedTopMargin.png)
Figure 4.34 Notice the difference in negative space before and after we added top margin to the heading.
ALT A screenshot showing before and after adding spacing above the heading


![xxxxx](images/04/04-35-final-exercise-mobile-comps-new.jpg)
Figure 4.35 Our final composition https://criticalwebdesign.github.io/book/04-on-the-grid/examples/the-new-york-felines/module4.3-finish.html for multiple breakpoints seen in the browser with DevTools. The Toggle Device Toolbar (see the cursor in the upper right corner of the top image) enables you to view your work across multiple devices in the Chrome browser.














## UX Design

- https://www.figma.com/resource-library/design-basics/
- https://uxtools.co/challenges/
- https://help.figma.com/hc/en-us
- [Figma template](https://www.figma.com/community/file/1248375255495415511) for [Apple Design Resources for iOS 17 and iPadOS 17](https://developer.apple.com/design/resources/)


## Bootstrap

- https://getbootstrap.com/
- https://www.w3schools.com/bootstrap5/index.php
- https://getbootstrap.com/docs/5.3/customize/sass/#color-contrast



