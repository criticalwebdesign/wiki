---
title: Chapter 8 Generative Design
description: Links, references, and footnotes
---

## Context 

In Chapter 8 we explore generative design, looking at the loop as a computational construct that evades the human condition. That is, the loop allows a viewer a never-ending and no-way-out experience. Works by Amy Alexander, Allison Parrish, and Lauren Lee McCarthy influence exercises in the modules as readers create a playful “Geneartive Arp” website, riffing on a series of paintings by DADA artist Jean Arp.



![xxxxx](images/08/08-01-jean-arp-moma.png)
Untitled (Collage with Squares Arranged according to the Law of Chance) on the Museum of Modern Art’s website: https://www.moma.org/collection/works/37013


![xxxxx](images/08/08-01-arp-controls.png)
Figure 8.1 A screenshot from our Generative Arp https://criticalwebdesign.github.io#8-2-live





![xxxxx](images/08/08-02-architecture.jpg)
Figure 8.2 Heydar Aliyev Centre by Zaha Hadid Architects. The studio for the late architect, Zaha Hadid, incorporates systems to produce outputs that are then filtered and improved by humans. The computer is not the producer of the design, but used to automate and save time in the iterative process. 


![xxxxx](images/08/08-03-regenerative-design-diagram.png)
Figure 8.3 Our version of a diagram showing the flow of the algorithmic project from concept to execution is inspired by Hartmut Bohnacker, Julia Laub, Benedikt Groß, and Claudius Lazzeroni’s 2009 infographic in Generative Gestaltung. Our version places the designer at the center of the process. None of the rules, code, or outputs would be initiated or further extended into action without the human putting the idea into play and making decisions following the iterative process.


![xxxxx](images/08/08-04-Web-Leegte-Superposition-comp.png)
Figure 8.4 Jan Robert Leegte and Superposition, Web, 2023. *Web* https://opensea.io/collection/web-2023, is a generative cross-linked network of 1000 web pages. The entire network of pages can be explored using the links on any page as a starting point. In addition to each unique generated composition, including its color palette, interface, and even favicon, each document is “on the chain”, making the code for the generated network accessible from any single blockchain record. 
ALT Four screenshots of Web by Leegte and Superposition


![xxxxx](images/08/cloudFlare.webp)
Figure 8.5 To be truly secure, the seed for a PRNG must use entropy, like the half-life of radioactive material, or some other unpredictable source. Cloudflare, a web performance and security company, uses pixel data from photographs of a wall of constantly flowing lava lamps to ensure their encryption algorithms cannot be reverse-engineered. Photo courtesy of Wiki author [HaeB](https://commons.wikimedia.org/wiki/File:Lava_lamp_wall_at_Cloudflare_office_-2.jpg).


![xxxxx](images/08/08-06-alexander.jpg)
Figure 8.6 Amy Alexander’s Deep Hysteria (2023) reveals gender bias in artificial intelligence by laying bare how AI describes, and therefore understands or “sees,” a series of neutral facial expressions. Alexander writes that the series “repurposes algorithmic bias in the service of unraveling a deep human bias” (https://amy-alexander.com/projects/deep-hysteria/). In conversation with historical renderings of female patients diagnosed with hysteria, Alexander created this AI rendering of “distressed women” using Stable Diffusion to illustrate reflective texts that accompany her project.
ALT Six portraits of women with distressed and contorted faces expressing the concept of hysteria.

![xxxxx](images/08/08-Aaronson-Oracle-comp.png)
Aaronson Oracle (2019) by Adam Pearce https://roadtolarissa.com/

![xxxxx](images/08/08-07-caseStudy-mccarthy.jpg)
Figure 8.7 Lauren Lee McCarthy, Autonomous, 2024. Photography by David Leonard.





## 8.1 Generative Arp Visualization



![xxxxx](images/08/08-08-visual-generative-arp-pseudo-code.png)
Figure 8.8 A visual flowchart showing the flow of the program described by the pseudocode.


![xxxxx](images/08/08-09-endlesshorse.png)
Figure 8.9 endless.horse (2015) by Colleen Josephson and Kyle Miller, created during the Stupid Shit No One Needs & Terrible Ideas Hackathon https://stupidhackathon.com, depicts an ASCII art horse with legs that automatically extend as users scroll. 
ALT ASCI art fills a browser with a horse with long legs


![xxxxx](images/08/08-10-randomOutputs.jpg)
Figure 8.10 Four examples of outputs producing a random number of divisions that would hold polygons in later exercises.
ALT 8.10 Four screenshots showing random numbers of boxes.


![xxxxx](images/08/08-11-boxes-2-red.png)
Figure 8.11 Two instances of Generative Arp show a random number of rectangles in red.
ALT Screenshots demonstrating Generative Arp so far.


![xxxxx](images/08/08-12-boxes-3-colors.png)
Figure 8.12 Two instances of Generative Arp with various colors and rotations.
ALT Side-by-side screenshots showing a random number of polygons filled with a variety of colors.


### Pro Tip: Functional Programming

The `randomInt` function in Exercise 8.2.2 is an example of a **pure function**. It is written to perform a single task, all information is encapsulated in the data you give it, and it produces no **side effects**. Given the same input information, it will always return the same values, which makes it simple to debug and copy and paste into new projects. For more on this subject, find articles on **functional programming** with Javascript, which emphasizes the use of pure functions, immutability, and higher-order functions so you can create code that is more predictable and easier to use. 

- JSDevJournal, “Functional Programming With JavaScript: A Deep Dive,” HackerNoon, accessed January 18, 2024, https://hackernoon.com/functional-programming-with-javascript-a-deep-dive
- Eric Elliott, “Master the JavaScript Interview: What Is Functional Programming?” JavaScript Scene (blog), accessed August 24, 2021, https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0




## 8.2 SVGs & Color Arrays


![xxxxx](images/08/08-13-svg-basic.png)
Figure 8.13 SVG images https://www.w3schools.com/graphics/svg_intro.asp are created using XML (eXtensible Markup Language), making their code easy to understand like HTML. 
ALT A cyan triangle, magenta square, and yellow circle next to the letters “svg” in black above a block of code that renders the image.


![xxxxx](images/08/08-14-svg-devTools.png)
Fig 8.14 The SVG appears as an image in the Chrome browser, but a closer look at its source code shows how this image is composed of coordinates between the open and close <svg> tags.
ALT Screenshot of an SVG in Chrome with DevTools showing its code.


![xxxxx](images/08/08-15-quadsInbrowser.png)
Figure 8.15 The polygons in the browser. Click or reload the page to see their color, size, and position change.
ALT Myriad shapes in a variety of colors, sizes, and positions on a dark background.


![xxxxx](images/08/08-16-svg-polygon-math.png)
Figure 8.16 This diagram illustrates how the polygon points are selected. Each magenta circle defines the area within which the x or y values could be created.

![xxxxx](images/08/08-17-polygonsInBrowser.png)
Figure 8.17 SVG Polygons generated for the browser. Click or refresh the page to see a new composition of polygons.
ALT Multi-colored polygons on a dark background.


![xxxxx](images/08/08-18-jevbratt-new.gif)
Figure 8.18 The colors in 1:1 (1999) by Lisa Jevbratt are based on rules she created using data collected via web crawlers. She assigned colors to groups of IP addresses that were accessible on the internet at the time, yet a degree of randomness exists in the outcome thanks to the many uncontrollable factors that contribute to the state of each address, such as dynamic software and databases, glitches and system errors, access to technology, and inclination to contribute to the growth by millions of people, to name a few. 


![xxxxx](images/08/08-19-coolors.png)
Figure 8.19 Export the code from a trending color palette on https://coolors.co/palettes/trending 
ALT Screenshot of the export interface on coolors.co. 



![xxxxx](images/08/08-20-random-color-values-from-array.png)
Figure 8.20 A diagram showing how a PRNG can be used to select random colors from an array. Each color is stored at an index number starting at 0. 

![xxxxx](images/08/08-21-boxes-5-svg-custom-palette.png)
Figure 8.21 Two palettes from Coolors.co in our Generative Arp project.
ALT Side-by-side screenshots of the project expressed with two color palettes: blue and purple hues on the left and orange and yellow hues on the right.




![xxxxx](images/08/08-24-boxes-6-inputs.png)
Figure 8.24 When you complete the exercises in 8.2 your version of the Generative Arp project will include controls for the number of polygons and their height values.







## 8.3 Survey of Generative Practices 




### Creative Coding Tools

In this book we prioritize foundational concepts in HTML, CSS, and JS which you can later apply to any project, regardless of what additional tool is trending. Still, we want to share a sample of the many powerful Javascript libraries and frameworks for creating generative design and art online. Many of these libraries were created by artists or designers, some of whom are featured in the book. We hope you experiment with these tools, and continue to seek out others that will advance your critical and creative coding experiences.

-   p5.js https://p5js.org (created by Lauren McCarthy, see the Case Study in this chapter), and the popular Processing programming environment https://processing.org (Ben Fry and Casey Reas) on which the Javascript version is based, have been instrumental in helping artists and designers learn programming concepts to create games, interactive experiences, and data visualizations.
-   SVG.js https://svgjs.dev (Wout Fierens) lets you dig deeper into SVG gradients, bezier curves, and animations. Its powerful functions make manipulating SVG files easier and enjoyable. Search for "SVG" on Codepen to see what other designers are doing with this versatile format.
-   Two.js https://two.js.org (Jonathan "Jono" Brandel) is a two-dimensional drawing library for the web that also lets you output graphics to the page using SVG, HTML Canvas, and WebGL. See his [codepen](https://codepen.io/jonobr1/) for [inspiring examples](https://codepen.io/jonobr1/pen/MWaeWRr) [created using two.js](https://codepen.io/jonobr1/pen/qBONdKX)
-   Paper.js http://paperjs.org (Jürg Lehni & Jonathan Puckey) is a vector graphics scripting framework that uses the HTML Canvas. As with others, check out the inspiring examples on their site.
-   Three.js https://threejs.org (Ricardo Cabello) is a 3D graphics library for the web using JS and WebGL. This framework, and Cabello's (“mrdoob”) personal work, is rooted in the early generative visualizations of the DemoScene and Flash. See his [work](https://mrdoob.com/#/117/fire) at https://mrdoob.com
-   D3.js https://d3js.org (Mike Bostock) is a multi-faceted visualization library popular among data journalists for telling stories with data.
-   Twine https://twinery.org (Chris Klimas) is a tool for telling interactive, nonlinear stories using HTML, CSS, and Javascript. Twine has a huge user base, especially for creating game-like narrative experiences https://itch.io/games/made-with-twine
-   The honorable mention goes to some of the popular UI frameworks we discussed in the introduction. "Reactive" tools like React, Angular, Vue, and Svelte can greatly simplify keeping your page content updated (in reaction to) changes to data in your code. While we considered incorporating them in the exercises (see our experiment with the Svelte UI Framework here https://criticalwebdesign.github.io#string-art-generator), their setup, complexity, and special syntax can add a lot of overhead, making them only helpful for creating large websites.

### Flash

Macromedia’s Flash was a software tool that combined an animation timeline, a highly intuitive vector drawing and tweening tool, and a script editor which allowed creators to attach scripts to keyframes, objects, or events. Flash files could be exported in SWF format and then embedded in HTML. Flash was widespread, inspiring international conferences, and artists, designers, game developers across the web. Adobe, who purchased Macromedia, has mostly discontinued Flash today due to performance, accessibility, and security issues on mobile devices. While publishing Flash projects online is no longer possible one can still find evidence of its impact on generative design:

-   Flash Math Creativity (see photos http://levitated.net/bones/flashmath/photos.html) with interviews and sample code from generative artists and designers
-   Jared Tarbell https://www.artnome.com/news/2020/8/24/interview-with-generative-artist-jared-tarbell
-   Paul Prudence https://www.transphormetic.com/
-   Manny Tan https://experiments.withgoogle.com/search?q=Manny%20Tan
-   The New York Times has recently made it possible to view all their interactive reporting built using Flash in their archives. See: Robert Kosara, “The New York Times Now Has a Web Flash Player,” (January 8, 2024) https://eagereyes.org/blog/2024/nytimes-web-flash-player.





### P5 Intro

<!-- Formerly:
Exercise 8.3.1 Create Generative Arp with p5.js -->

In this introduction to p5.js you’ll recreate a basic version of Generative Arp. As with other libraries, you can use p5.js by downloading or hotlinking to the Javascript file on a CDN. To minimize setup, we use the p5.js editor in the browser.

1. Open the p5.js Web Editor https://editor.p5js.org which will show a new file (a “Sketch”) where you can immediately start coding.

> **Author’s Note: P5 Editor** <br>
> Like other code playgrounds, you can sign up and log into the p5.js editor so that you can save your sketches in a personal library.

2. p5.js contains two default functions in the main Sketch file. The `setup()` function is called once, when the program starts, to define key properties of the coded environment (like background size and color). The `draw()` function runs directly after, continuously executing the lines of code contained inside its block until the program is stopped. Update your `draw()` function to match ours below and press the play button at the top left corner in the web editor interface. You should see a line that extends diagonally from the top left corner `(0,0)` towards the middle of the canvas `(100,100)` (Figure 8.32).

```js
function draw() {
	background(220);
	line(0, 0, 100, 100);
}
```

![xxxxx](images/08/08-32-p5-line-segment.png)
Figure 8.32 The line() function accepts four parameters representing numeric coordinates of the starting and ending x and y positions in the canvas.
ALT Screenshot of the P5.js editor showing a black line drawn from the top left corner towards the middle of the canvas.

3. When you use `createCanvas()` it sets the values of built-in system variables, including `width` and `height`, that you can use throughout your sketch. (see Daniel Shiffman, “System Variables,” Learning Processing 2nd Edition, accessed April 9, 2024, http://learningprocessing.com/examples/chp04/example-04-05-systemvars) Update your line function to match our code below and press Play (Figure 8.33).

```js
function draw() {
	background(220);
	line(0, 0, width, height);
}
```

![xxxxx](images/08/08-33-p5-line-width-height.png)
Figure 8.33 Use the `width` and `height` variables to extend the line from the first position `(0,0)` to the opposing corner `(400, 400)`.
ALT Screenshot of the p5.js editor using width and height variables in the line function.

4. The `createCanvas()` function adds an HTML5 Canvas element in the page on which to draw graphics. If you inspect the contents of a Canvas element with DevTools you will only see the parent Canvas element because the graphics it renders are only pixels on the screen. Unlike other HTML elements, graphics on a Canvas element are more like a real life painting in which every brush stroke the artist draws appears on top of previous strokes, until they paint over everything and start again. Of course drawing on the Canvas with p5.js is a little different, because you can create 2D or 3D graphics, and even use shaders and lighting to render interactive game worlds. You can also easily create animations by using the `background()` function to cover everything that was added on a previous frame, then make the drawing appear in a new location on the canvas, before repeating the process. Change your code to match ours to see this in action. Start by deleting the line function we added previously. The `draw()` loop now resets the canvas on each frame and then uses the current seconds on your computer to change the position of the line to suggest a makeshift clock.

> **Author’s Note**: Line position <br>
> To position the line relative to the current second, we multiplied the value returned from seconds() (0-59) by a percentage resulting from the width (400) of the canvas divided by the number of possible seconds (60). This means the range of x values will be 0 to 400, enabling our animation to span the width of the canvas. You could write 6.6 in your code but avoiding such magic numbers and letting p5.js do the math will ensure your equation will always work even if you change the width later.

```js
function draw() {
	background(220);
	strokeWeight(3);
	let x = second() * (width / 60);
	line(x, 0, x, height);
}
```

5. To create the four-sided polygons in Generative Arp you can use the p5.js quad() function. The shape is defined by four sets of coordinates,` x1,y1,x2,y2,x3,` and so on, placed clockwise. The random() function in p5.js is quite advanced, and includes the ability to return a random number within a range. Update your code as follows to draw a quadrilateral and fill it with a random color. Notice we use the `frameRate()` method to update our drawing every two seconds, during which the background is redrawn and a new random color fills the quadrilateral (Figure 8.34).

```js
function draw() {
	background(220);
	frameRate(2);
	noStroke();
	fill(random(255), random(255), random(255));
	quad(20, 50, 280, 30, 380, 70, 20, 270);
}
```

![xxxxx](images/08/08-34-quad.png)
Figure 8.34 A new quadrilateral is redrawn with a random fill color every two seconds.
ALT Screenshot of the p5.js editor with the quad method.

6. The `draw()` function now creates a new quadrilateral with a random color each loop of the `draw()` function. To generate multiple quadrilaterals of various shapes we will need to add a loop that randomizes the coordinates of its vertices. Add the following `for` loop to your code, and move the fill and quad function into it. We only changed the first two parameters (`x1` and `y1`) in this step (Figure 8.35) to a random number between `0` and the `width` and `height` to show how it affects the quads. Run your code to see that on each loop, the `draw()` function “paints” over the canvas with `background()`, then the `for` loop draws 30 unique quadrilaterals, and then the `draw()` function loops and starts the process again.

```js
function draw() {
	background(220);
	frameRate(2);
	noStroke();
	for (let i = 0; i < 30; i++) {
		fill(random(255), random(255), random(255));
		quad(random(0, width), random(0, height), 280, 30, 380, 70, 20, 270);
	}
}
```

![xxxxx](images/08/08-35-for-loop.png)
Figure 8.35 Our code includes a for loop where a quadrilateral is drawn with a randomized fill color.
ALT Screenshot of p5.js code with for loop.

7. With the quadrilaterals changing shape, we will return to the ideas presented in Figure 8.23, which govern how the vertices of the quadrilaterals will match those created by Jean Arp. We will use the same strategy here, constraining their potential values to ensure the polygons appear like Arp’s hand-cut rectangles dropped onto random positions. In Exercise 8.2.2 we used the CSS transform rule with the `translate()` and `rotate()` functions. We will do something similar in p5.js using three variables: a width (`w`) and height (`h`) variable for the `x` and `y` coordinates at each vertice, and a delta (`d`) variable. Delta is often used in math, logic, or programming to suggest “change.” You will notice that we have a pseudorandomized range for width and height, and then we again implement the random function using these variables. This enables us to draw the vertices in a “slightly random” format (Figure 8.36). The `translate()` function moves the polygons around the canvas. If you comment out the `translate()` function you will see how the polygons are drawn on top of each other, in the same position, on the canvas (Figure 8.37).

```js
for (let i = 0; i < 30; i++) {
	fill(random(255), random(255), random(255));
	let d = random(0, 5); // delta or change in position
	let w = random(50, 80);
	let h = random(50, 80);
	translate(random(0, width), random(0, height));
	quad(
		random(-d, d),
		random(-d, d),
		random(w - d, w + d),
		random(-d, d),
		random(w - d, w + d),
		random(h - d, h + d),
		random(-d, d),
		random(h - d, h + d)
	);
}
```

![xxxxx](images/08/08-36-quads-parameters.png)
Figure 8.36 Quadrilaterals using several random parameters to match Jean Arp’s using a variable d, which constrains the amount of change to the position of the vertices.

![xxxxx](images/08/08-37-p5-translate-commented.png)
Figure 8.37 Comment out the translate function to see how the polygons are drawn on top of each other, in the same canvas position without the aid of translate(). Then, don’t forget to remove your comment slashes!
ALT Screenshot of p5.js editor with comments removing the translate function.

8. Finally, add multiple polygons like our pure JS Generative Arp. However, when drawing to the HTML5 Canvas with p5.js, each time you call `translate()` it adds a new offset value to a global state. Over time the translations add up and push the elements off the screen. If you change your `w` and `h` maximum value to a smaller number (Figure 8.38) you can see what this looks like. So, we need to implement two p5.js methods called `push()` and `pop()`. “The `push()` function saves the current drawing style settings and transformations, while `pop()` restores these settings.” In other words, these functions, which are always used in tandem, allow us to preserve the blank slate (“push”) at the beginning of every iteration of the for loop, and then return to it (“pop”) at the end of each loop, instead of adding up. So, add `push()` to the first line of the for loop and `pop()` to the last line and test your code. You will see multiple polygons.

```js
for (let i = 0; i < 30; i++) {
	push();
	fill(random(255), random(255), random(255));
	let d = random(0, 5); // delta or change in position
	let w = random(50, 80);
	let h = random(50, 80);
	translate(random(0, width), random(0, height));
	quad(
		random(-d, d),
		random(-d, d),
		random(w - d, w + d),
		random(-d, d),
		random(w - d, w + d),
		random(h - d, h + d),
		random(-d, d),
		random(h - d, h + d)
	);
	pop();
}
```

![xxxxx](images/08/08-39-p5-final-gen-arp.png)
Figure 8.38 We replaced the max value of w and h with 55 to show how transformations add up in p5.js.
ALT Screenshot of p5.js editor and preview window displaying stacks of quadrilaterals in various colors.

The components of this basic generative page can be used in any of the above frameworks we mention above. And while we think they are great, and encourage you to experiment with them, keep in mind that you don’t need to be dependent upon any specific tool. Instead, the idea should dictate the methods you choose to use. However you continue to add to and customize your project, keep experimenting!

More info

-   https://p5js.org/
-   https://www.w3schools.com/graphics/canvas_intro.asp
-   Check out Kate Compton's [So you want to build a generator...](https://galaxykate0.tumblr.com/post/139774965871/so-you-want-to-build-a-generator) tutorial






### Generative Art and Design


![xxxxx](images/08/08-25-schwartz.png)
Figure 8.25 Lillian Schwartz & Kenneth Knowlton, Pixillation HD, 1970. In this film, Schwartz developed an editing technique that synthesized computer code, black and white pixels, and hand-drawn colored animation to create abstracted pixel-like movement with a seemingly saturated color palette. See https://archive.org/details/1970LillianSchwartzPixillation.

![xxxxx](images/08/08-26-nake.png)
Figure 8.26 Frieder Nake, 13/9/65 Nr. 2 (“Homage to Paul Klee”), 1965.


![xxxxx](images/08/08-27-reas.png)
Figure 8.27 Casey Reas created 923 EMPTY ROOMS #874 using P5.js, see https://arttab.xyz/?id=114. 
ALT Screenshot of an artful browser filled with patterning, contrasting colors, and fluid, organic shapes.


More inspiring examples of generative art and design

-   A browser extension that shows curated generative works when you open a new tab https://arttab.xyz/
-   A selection of generative projects https://www.artblocks.io/
-   Generative Design: Visualize, Program, and Create with JavaScript in p5.js, 2nd Edition (2018) https://generative-gestaltung.de
-   Form+Code in Design, Art, and Architecture (2010) https://formandcode.com
-   Generative design tutorials and examples https://generativeartistry.com/
-   Google Experiments https://experiments.withgoogle.com/
-   https://www.rightclicksave.com/article/an-interview-with-frieder-nake

![xxxxx](images/08/arttab-asendorf-4.png)
Work by Kim Asendorf https://naz.cx/ available in ArtTab https://arttab.xyz/ a chrome extension that features a vast collection of dynamic artworks https://arttab.xyz/explore




### Electronic and Generative Literature

Examples related to computational, electronic, or generative literature/poetry

-   The Electronic Literature Archives https://eliterature.org/electronic-literature-archives/
-   The Electronic Literature Organization https://eliterature.org/
-   The New Media Writing Prize https://newmediawritingprize.co.uk/
-   The New River: A Journal of Digital Art & Literature https://thenewriver.us/
-   The School for Poetic Computation https://sfpc.study/
-   Taper https://taper.badquar.to/

<table>
<tr>
<td valign="top"><a href="images/08/sample-two-moji-1.png"><img src="images/08/sample-two-moji-1.png" alt="ALT"></a>
</td>
<td valign="top"><a href="images/08/sample-two-moji-2.png"><img src="images/08/sample-two-moji-2.png" alt="ALT"></a>
</td>
</tr>
<tr>
<td valign="top"><a href="images/08/sample-two-moji-3.png"><img src="images/08/sample-two-moji-3.png" alt="ALT"></a>
</td>
<td valign="top"><a href="images/08/sample-two-moji-4.png"><img src="images/08/sample-two-moji-4.png" alt="ALT"></a>
</td>
</tr>
</table>
Two Moji: A Modern Epic of Love and Betrayal https://taper.badquar.to/2/two_moji.html (2018) by Mark Sample generates infinite dramatic stories depicting guilty pleasure, forbidden romance, and crimes of passion using only emoji and Javascript.



![xxxxx](images/08/08-28-nonsenseLabComp.png)
Figure 8.28 Allison Parrish, The Nonsense Laboratory, 2021, https://experiments.withgoogle.com/nonsense-laboratory. 
ALT: Two screenshots of Parrish’s The Nonsense Laboratory displays the Mixer and Explorer portions of the Laboratory’s interface. 



<table>
<tr>
<td valign="top"><a href="images/08/08-storyland1.png"><img src="images/08/08-storyland1.png" alt="ALT"></a>

</td>
<td valign="top"><a href="images/08/08-storyland2.png"><img src="images/08/08-storyland2.png" alt="ALT"></a>
</td>
</tr>
</table>
A pioneering work demonstrating these connections is Nanette Wylde’s [Storyland](https://collection.eliterature.org/1/works/wylde__storyland.html ). Wylde describes the project as “a randomly created narrative which plays with social stereotypes and elements of popular culture.” This work was developed in 2002, revised for a second version in 2004 with the now outdated application and web format Flash, and recently preserved for viewers with [Ruffle](https://github.com/ruffle-rs/ruffle) (a Flash Player emulator written in Rust) by the Electronic Literature Lab in 2023. It is archived in [Volume 1 of the Electronic Literature Archive](https://collection.eliterature.org/1/index.html).








### Generative Design in Games


![xxxxx](images/08/Fractal_weeds.jpg)
Figure 8.10 An example of procedural generation using the symbols, rules, and recursive nature (fractals) of an L-system to “grow” 3D models of weeds. Image uploaded to Wikipedia by user [Solkoll](https://en.m.wikipedia.org/wiki/File:Fractal_weeds.jpg). 


![xxxxx](images/08/08-29-no-mans-sky.png)
Figure 8.29 Four screenshots from No Man’s Sky (2016) which used procedural generation to create over 18 quintillion planets, each with their own ecosystem and unique flora, fauna, and alien species.

Related examples found in video games

-   https://gigl.scs.carleton.ca/sites/default/files/ling_xu/treemodelingwithguidingvectors.pdf
-   https://www.google.com/search?q=procedural+generation&tbm=isch
-   https://taper.badquar.to/2/tty.html
-   https://en.wikipedia.org/wiki/Development_of_No_Man%27s_Sky
-   https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
-   https://en.wikipedia.org/wiki/Boids

### Demoscene

Another important influence on the history and practice of generative art is the demoscene, a subculture of hackers, clubs, and competitions (a.k.a. demoparties) (Figure 8.x) that blended creativity, hacking, and hardware testing. Emerging in Europe during the 1980s, demos were small self-contained computer programs written to test computer hardware capabilities using the most intense algorithmically-generated graphics and audio effects of the time. Typical competition categories restricted the size of the demo's executable, the compiled code packaged into a single file, by overall size (e.g. 1k, 4k, or 64k), and platform (8-bit like Atari or Commodore 64 or 16 bit Amiga). While the results (like "[PC DOS Demoscene mix](https://www.youtube.com/watch?v=O4T7pIs--LA)" or "[Hologon by The Electronic Knights [Amiga 500]](https://www.youtube.com/watch?v=pYtleuGV7ok)") might appear simplistic today, their output can be appreciated for their technical and artistic constraints when considering the abundant limitations on their hardware and access to programming resources (Stinson, Liz. “[The Ever-Changing Art of the Screensaver.](https://eyeondesign.aiga.org/the-ever-changing-art-of-the-screensaver/)” in Eye on Design).

<a href="https://upload.wikimedia.org/wikipedia/commons/e/ea/Assembly2004-areena01.jpg" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Assembly2004-areena01.jpg" width="600"></a>

Caption: Hackers gathered in an ice rink during the 2004 Assembly demoscene party in Finland

### Generative Interfaces

Example generative art and design web interfaces

-   The NSynth Sound Maker (2017) by Yotam Mann https://experiments.withgoogle.com/sound-maker
-   Pixeldudesmaker by 0x72 https://0x72.itch.io/pixeldudesmaker
-   itch.io is popular for publishing indie games, but also showcases an impressive collection of procedural generators https://itch.io/tools/tag-procedural
-   Pippen Barr https://pippinbarr.com/itisasifyouweredoingwork/
-   https://galaxykate0.tumblr.com/post/139774965871/so-you-want-to-build-a-generator


![xxxxx](images/08/08-30-emoji-simulator-3.png)
Figure 8.30 Nicky Case’s Emoji Simulator https://ncase.me/sim/ creates generative emoji “worlds” using Conway’s Game of Life and other systems. 

![xxxxx](images/08/08-22-NSynth-2017-Yotam-Mann.png)
Figure 8.22 The NSynth Sound Maker (2017) https://experiments.withgoogle.com/sound-maker by Yotam Mann uses machine learning trained with a neural network of over 300,000 instrument sounds. 

![xxxxx](images/08/08-23-pixel-dudes.png)
Figure 8.23 Pixeldudesmaker by 0x72 https://0x72.itch.io/pixeldudesmaker lets you modify your preferences after an initial completely random output. See other procedural generator interfaces on the Chapter 8 wiki.





