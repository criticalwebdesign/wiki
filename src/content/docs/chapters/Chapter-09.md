---
title: Chapter 9 Data Tracking
description: Links, references, and footnotes
---




## Context 

Chapter 9 focuses on data as part of the networked landscape that is surveilled, bought, and sold, including a discussion of cookies, browser fingerprinting, and advertising business models. 


![xxxxx](images/09/09-01-termsandconditions.png)
Figure 9.1 Terms and Conditions Apply was created by Wieden+Kennedy, Jon Plackett, Alex Bellos, Adam Says, https://www.termsandconditions.game/ 

![Five main components of behavioral tracking](images/09/09-02-behavioral-targeting-tech-stack.png)
Figure 9.2 This flowchart shows how behavioral targeting starts with data capture and results in behavioral change.

![xxxxx](images/09/09-03-whitecat.jpg)
Figure 9.3 Owen Mundy, I Know Where Your Cat Lives, 2014. https://iknowwhereyourcatlives.com

![xxxxx](images/09/09-04-ikwycl-map.png)
Figure 9.3 Owen Mundy, I Know Where Your Cat Lives, 2014. https://iknowwhereyourcatlives.com


![xxxxx](images/09/09-05-tally.jpg)
Figure 9.5 Joelle Dietrick and Owen Mundy, Tally Saves the Internet, 2021. https://tallysavestheinternet.com



## 9.1 DevTools & Data


- Ghostery Browser https://www.ghostery.com
- Tor Project https://www.torproject.org/
- https://geokitten.com
- https://stickyscreen.org
- https://www.nytimes.com/games/wordle/
- https://amiunique.org
- https://coveryourtracks.eff.org/


![Diagram showing the web browser, or client and its requests and responses to and from the server](images/09/09-06-request-response.png)
Figure 9.6 Diagram showing just a few of the many requests and responses between client and server when a page loads.


![Access log information in white on a black screen.](images/09)
Figure 9.7 Example server access logs from https://iknowwhereyourcatlives.com showing IP addresses, dates, and files requested.
ALT 9.7 


<!-- 

### Activity: View Requests & Server Logs

> Note: While the information in this tutorial generally still holds true, [Glitch has moved on.](https://www.theverge.com/news/673457/glitch-coding-platform-shutting-down) [😢](https://blog.glitch.com/post/changes-are-coming-to-glitch/)

View a server log file and the corresponding response and request headers inside DevTools to learn how data is captured for analytics.

1. Open Glitch's “Hello World” site https://glitch.com/edit/#!/remix/glitch-hello-website 
1. At the bottom, click Preview and choose "Preview in a new window"
1. Arrange (detach the tab if necessary) and resize these two browser windows so you can see the Glitch editor and preview simultaneously.
1. In the Glitch editor window, click LOGS to open the server logs.
1. In the Glitch preview window, open DevTools and select the Network tab.
1. Reload the preview window and watch as the browser sends a request to the Glitch server, which logs the date, time, and type of the request, along with the filename, response code, and details about the client. In Figure 9.8 you can see we are using Chrome on MacOS 10.15. Note that Glitch's server operates using a software proxy, so instead of displaying your IP address as it does in most logs (Figure 9.7), it shows the request coming from `127.0.0.1` or `localhost` which is the address computers use to refer to themselves. 
1. Look at the DevTools in the preview window and find the waterfall graphic showing all the responses and how long each took from the request until they were received. Make sure "All" is checked in the filtering method or reload the page if you don't see them. 
1. Select one of the files from the response list and examine the metadata that appears under the Headers tab on the right. The request headers include the URL, method, status code, and other information, while the response headers tell you the content type, server, and more.


![xxxxx](images/09/09-08-glitch-server-logs.png)
Figure 9.8 The Glitch server logs (left) and site preview(right) with DevTools showing the server request and response for all the files of the web page. 

-->





![Tan map on a blue background showing statistics about users at each location.](images/09/09-09-statcountermap.png)
Figure 9.9 User information shown on a map at Statcounter.com.



![Screenshot of Clickclickclick.click reporting back to the user all of the choices they made.](images/09/09-10-clickclickclick-comp.png)
Figure 9.10 A wealth of information about users is displayed on the Achievements page of the https://clickclickclick.click website. 



![Screenshot of Data Dealer website.](images/09/09-11-datadealer_screenshot01_empire.jpg)
Figure 9.11 Data Dealer was a web-based game created by Ivan Averintsev, Wolfie Christl, Pascale Osterwalder, and Ralf Traunsteiner that explored the myriad ways that such companies harvest and sell user information.


![xxxxx](images/09/09-12-safebook-index-2880x1510.png)
Figure 9.12 Ben Grosser's browser extensions modify the content users see on social media to question their influence. His Safebook extension removes all content from Facebook, reminding users of the importance of their free labor to the company's bottom line. Grosser’s Facebook Demetricator extension removes the metrics on posts that gamify interpersonal communication to drive engagement (and thus ad views). As with all browser extensions, these modifications are performed using Javascript, but only in the browsers (clients) of users who install it.


![Screenshot of Google Analytics for Owen’s I Know Where Your Cat Lives page.](images/09/09-13-google-analytics-setup-assistant.png)
Figure 9.13 Google Analytics (GA) is so much more than website feedback, as can be seen in this figure of the Setup Assistant. Unfortunately, Owen is not an ideal user of Google Analytics and has not completed all the prompts that GA wishes he would have.


![Diagram showing a behavioral funnel.](images/09/09-14-behavioral-funnel.png)
Figure 9.14 A typical behavioral funnel converting your online clicks to sales.

![Network diagram with colored circles and gray connectors on a white background.](images/09/09-15-trackermap-2014_09_17.jpg)
Figure 9.15 The Ghostery Trackermap is a directed network graph representing how embedded scripts transmit user data for ad auctions that determine which targeted messages are shown to each user. The Trackermap was originally created  to identify and reduce latency and security issues, and has gone through many iterations, including this version by designer Joey Kilrain. https://kilrain.com   


![xxxxx](images/09/09-16-surveillance-fonts.png)
Figure 9.16 Two typographic projects that explore surveillance. The type specimen poster at the top shows ZXX (2012), a typeface by Sang Mun designed to increase privacy through thwarting Optical Character Recognition (OCR) and automated machine intelligence methods. Project Seen (2015) by Emil Kozole is a typeface that points out content prone to surveillance by automatically striking through trigger words targeted by government agencies. Install the font or use the bookmarklet to explore the project, http://projectseen.com. 
ALT 9.16 Two custom typefaces presented in black and white.








## 9.2 JSON Data & APIs 

- Tracking the Trackers https://criticalwebdesign.github.io/book/09-data-tracking/examples/trackers.html
- JS Objects https://codepen.io/owenmundy/pen/OJGWyvL?editors=1011 
- https://github.com/criticalwebdesign/book/tree/main/09-data-tracking/examples/data-examples

### APIs


Examples

- https://github.com/public-apis/public-apis
- https://catfact.ninja/fact
- https://jsonplaceholder.typicode.com/
- https://restful-api.dev/
	- https://api.restful-api.dev/objects?id=ff8081818e21ce2d018e58d462663da1



API Tools

- https://reqbin.com
- JSON Formatter Chrome Extension https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa
- https://www.postman.com



### Exercise 9.2.1 Test an API 

In this exercise you’ll learn to test APIs. There are hundreds of free APIs that offer a wealth of functionality and data for you to use in your projects. Some APIs require you to register and send requests along with a special key to prevent abuse, but there are plenty of public APIs you can use as well.

1. We will use this free API that offers facts about cats. You should always refer to an API's documentation, in this case [catfact.ninja](https://catfact.ninja), to learn about the **endpoints**, or specific URLs used to access particular information. Open the following link in a web browser and you should see a simple JSON document, organized by `key:value` relationships: [catfact.ninja/fact](https://catfact.ninja/fact)
2. Install the [JSON Formatter extension](http://criticalwebdesign.github.io#json-formatter) for Chrome criticalwebdesign.github.io#json-formatter to make it easier to read JSON data in the browser, and reload the cat fact API (Figure 9.17).


![xxxxx](images/09/09-17-cat-fact-api-1.png)
Figure 9.17 A cat fact in JSON formatted with JSON Formatter. Fascinating.

3. {JSON} Placeholder is a free "realistic" API for testing. For example, access the “users” endpoint to get a list of fake users: [jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
4. While basic API testing can be as simple as viewing a web page, sometimes you may need special tools to send data or authenticate. For the next API we'll use a tool called REQBIN to send information with the API request that lets you mimic a web form’s POST request. The “Real REST API” [restful-api.dev](https://restful-api.dev/) we will use features endpoints that operate differently, depending on the HTTP verb you use in the request. Go to [reqbin.com](https://reqbin.com) and add the following URL in the field—watch out for errant spaces at the end of the URL. Send the request with GET selected in the dropdown and you'll see a list of devices.

[`https://api.restful-api.dev/objects`](https://api.restful-api.dev/objects)

5. Change the dropdown to POST, and then under content tab type or paste the following JSON data. Feel free to change the value of any property. Press Send and your data will be sent to the API and then returned with an additional id property. Copy the value of the id.

```json
{
   "name": "Owen's Computer",
   "data": {
      "year": 2024,
      "color": "Sparkleberry"
   }
}
```

6. Open a new browser tab and add the id you copied to the end of the following URL after the equal sign and press return. You should see the data you sent with the first request. Here is the one we sent: [criticalwebdesign.github.io#restful-api](http://criticalwebdesign.github.io#restful-api) (Figure 9.18).

```
https://api.restful-api.dev/objects?id=
```



![xxxxx](images/09/09-18-reqbin.png)
Figure 9.18 Using the POST method we added an entry to the dataset by following the  JSON formatting rules to specify keys and values. In the result, our entry includes a new key for id.
ALT Screenshot of POST results include an id.


![xxxxx](images/09/09-19-paris-schwartz.png)
Figure 9.19 Tim Schwartz created Paris by writing a data scraper that monitored news and search engines for “paris hilton” and “paris france” and displayed the results in real time.

![xxxxx](images/09/09-20-static-vs-dynamic-v4.png)
Figure 9.20 Static vs. dynamic web page diagram.
ALT A diagram showing how the contents of a dynamic website arrive in the browser.





## 9.3 Async Javascript & Node.js








### Data Privacy

- Jamie Wilkinson and Greg Leuch (fffff.at) [Google Alarm extension](https://fffff.at/google-alarm/) 
- Ben Grosser [Facebook Demetricator](https://bengrosser.com/projects/facebook-demetricator/)
- Tim Schwartz [Resistant Systems](https://www.timschwartz.org/resistant-systems-spring-2022/), [Digital Resistance Kit](https://www.timschwartz.org/digital-resistance-kit/), [Password Cleanse](https://www.timschwartz.org/password-cleanse/) 
- https://themarkup.org/series/blacklight
- https://datadetoxkit.org/
- https://clickclickclick.click/ 
- https://pointerpointer.com/ 


### Javascript Prototype

Objects are commonly used to represent the properties and behaviors of entities in a programming model called **Object Oriented Programming (OOP)**. OOP languages use predefined classes and inheritance to derive behavior. For example, all objects of a car class will have wheels and headlights that turn on, which are inherited by its child classes that define more specific properties. 

Javascript uses a(n arguably simpler) **prototype** pattern to define objects. When you create a new variable in Javascript it creates a new copy of the object prototype, cloning all its functionality and data. Javascript's prototype shares many of the OOP's benefits. For example, Javascript objects use **encapsulation** to group and identify similar information inside a single container (like formats for a color), and standardizes access to their properties. 

Type an open and close curly brace in the DevTools Console to see the properties all objects receive from the prototype:

```js
{} 
// -> [[Prototype]]: Object
    constructor: ƒ Date()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    ...
```

In the console, create a new object: 

```js
let color = {
    name: "red",
}
```

If you log the color value you can see the `name` property you creaded, as well as the constructor from the prototype:

```js
color
// -> {name: "red"}
    [[Prototype]]: Object
        constructor: ƒ Date()
        hasOwnProperty: ƒ hasOwnProperty()
        isPrototypeOf: ƒ isPrototypeOf()
        ...
```

If you type the constructor (the method in each object that creates itself) of any data type based on the object, like Date, you will again see the prototype functions listed below the functions (ƒ) specific to that object.

```js
new Date()
    // -> constructor: ƒ Date()
    getDate: ƒ getDate()
    getDay: ƒ getDay()
    getFullYear: ƒ getFullYear()
    ...
    [[Prototype]]: Object
        constructor: ƒ Date()
        ...
```




## 9.4 Create a Bad Password API



### Bad Password API

![Screenshot of the Bad Password API web page.](images/09/09-24-bad-password-api-finished-1.png)
Figure 9.24 By completing the modules in Chapter 9 you will produce a Bad Password API.

- Async Javascript https://codepen.io/owenmundy/pen/MWRJxjK
- https://bad-password-api.vercel.app/api
- https://github.com/omundy/bad-password-api-starter
- https://bad-password-api.vercel.app/api/common
- https://bad-password-api.vercel.app/api/custom?params=pets,dates










### Prompt 9.3 (needs to change)

If you inspect the contents of api/data.js you can see how the project uses comma-separated lists of words. Following methods used in the project, incorporate the list you created in Prompt 9.1 into the interface. Explore the articles linked there and experiment with new parameters. Or, make a fork of the project and create an entirely new generator!




### Full-stack instructions

1. Now that you are getting data from an API into the web page, add a new endpoint to return a common password. In `routes.js` you'll notice we are importing data and functions from a file called `data.js`. If you look at `data.js` you'll see it contains lists of potential words to use in new custom passwords. The property named common is a list of the most `common` passwords that have been hacked. Add this new endpoint to return data from this list inside `routes.js` under the previous route.

```js
const routes = async (server, options) => {
    server.get("/api", function (request, reply) {
        reply.send({ message: 123 });
    });
    server.get("/api/common", async function (request, reply) {
    reply.send({ message: functions.randomFromArray(data.common) }); 
};
```

2. Test this endpoint by viewing your project `URL + /common`. You can see our example here: https://bad-password-api.vercel.app/ Refreshing the page returns a new, terrible password.
3. In `data.js` you saw other collections of popular terms used in easy-to-hack passwords. Let's add an endpoint that uses them. Add the following code beneath the other endpoints inside routes. This will use the existing `returnPassword()` function to check the parameters and return appropriate random phrases from the hacked passwords list.

```js
server.get("/api/custom", async function (request, reply) {
    reply.send({ message: returnPassword(request.query.params) });
});  
```  

4. In a new tab, visit your `URL + /api/custom?params=pets,dates` (or any other combination of these parameters) to see the new passwords. For example: https://bad-password-api.vercel.app/api/custom?params=pets,dates 














### Install Node

A basic install process for Node.js. While you can download and run a [prebuilt installer](https://nodejs.org/en/download) we prefer using NVM (Node Version Manager) to let you manage and upgrade your installation later:

1. Install NVM with Homebrew (Mac only) or run the [Node NVM install scripts](https://nodejs.org/en/download/package-manager) (all platforms) one line at a time on the command line.

```bash
# installs NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

2. Use NVM to install Node

```bash
# download and install Node.js
nvm install 20
# verifies the right Node.js version is in the environment
node -v # should print `v20.11.1`
# verifies the right NPM version is in the environment
npm -v # should print `10.2.4`
```

3. Create a project directory and change to it: 

```bash
mkdir hello-node & cd hello-node
```

4. Create a file in this folder named `index.js` and paste the below code.

```js
let greeting = "Hello, from Node";
console.log(greeting);
```

5. In the Terminal, run the script with: 

```bash
node index.js
```





6. To make Node run continuously, listening for requests to the API, you'll need to install additional code. Click on the file called `package.json` and find the property named **dependencies**. Every Node.js project has a package.json which lists the libraries the project uses, as well as other metadata. 


> **Pro Tip: NPM Install**
If you are following along on your own computer, you would run `npm install` in the Terminal to install package.json dependencies. NPM will download and install the packages into a specially-named folder called `node_modules`, which Node can access simply with the `import` command. Note that there are several Node package managers, but NPM is a popular choice. 


7. Also note that package.json has a "main" property which tells NPM the default file to run for this project. Click on that file. While Node can be used for many purposes, `server.js` imports and uses a web framework (that you just installed with NPM) called [Fastify](https://fastify.dev) that will run continuously, accepting requests to the API and returning new data. The code in this file is boilerplate language required to start the application server but we added comments to explain what is happening. Notice the line that imports another Javascript file called routes.js that contains all the routes (the URLs for the API endpoints) that you will create.

8. Open the `routes.js` file and you will see the following code. This is a function expression (see Chapter 6 on the wiki) that uses the async declaration (which we describe in next section) and a "fat arrow" syntax. As you saw in server.js this function is imported from the `routes.js` file (`import routes from "./routes.js"`) and used to define the endpoints for the API. The second line, that exports the routes function, makes that possible.

```js
const routes = async (server, options) => {
};
export default routes;
```

9. Add this code to create your first endpoint. It will accept `GET` requests to the URL "/api" (the domain name + "/api"). The callback function uses the `server` parameter to send a simple reply, the number `123`. 

```js
const routes = async (server, options) => {
    server.get("/api", function (request, reply) {
        reply.send(123);
    });
};
export default routes;
```

> **Author Note** You can always compare your API endpoint values with our original https://bad-password-api.vercel.app/api 


10. If you open a new browser window and type the custom name that Glitch gave your project and "/api" you should see that the server is accepting requests to that endpoint. 
11. To make Fastify return a JSON file, simply restructure the value so it's wrapped in curly braces and assigned to a property (Figure 9.21). In the next exercise you will modify the client side code to get the data from this test API endpoint.

```js
server.get("/api", function (request, reply) {
  reply.send({ message: 123 });
});
```


![Screenshot showing the returned message in JSON format.](images/09/09-21-test-api.png)
Figure 9.21 Our project returns JSON data from the API.
 


![Charts showing synchronous vs. asynchronous wait times in bright hues on a black background.](images/09/09-22-sync-async-compared.png)
Figure 9.22 The performance benefits from using asynchronous code are visible on these side-by-side charts.
 


![Chart showing the concept of a promise chain in planning a meet-up to ride bikes.](images/09/09-23-request-response.png)
Figure 9.23 The work day is almost over and you want to go ride bikes with your friends. You reach out to see who is available (three requests) and wait for a reply. Of the three you ask, Sam cannot ride (promise rejected), Letícia can go at 3:45pm, and Angel can meet at 4:30pm (two promises pending). You do other work while you wait, perhaps finishing the section of a chapter you are writing, and then head out to meet each friend who resolves their promise by arriving at the trailhead.











### Vercel Instructions

See also: [Using Express.js with Vercel](https://vercel.com/guides/using-express-with-vercel#6.-run-your-application-locally)

#### Test locally

1. Clone the repo from Github
1. Run `npm install`
1. Start the app using `nodemon`

#### Connect to Vercel

1. Quit the app (if still running) `CTL + C`
1. Login to Vercel. Run `vercel login` and choose the method to login with arrow keys + return. It will complete in the browser. Return to the console and you will see `Congratulations! You are now logged in.`
1. Create a new Vercel project `vercel dev` and answer prompts
    1. Set up and develop? `Yes`
    1. Which scope... `default`
    1. Link to existing project `no` (unless you already set one up)
    1. What's your project's name? `bad-password-api`
    1. In which directory is your code located? `./`


#### Deploy on Vercel


1. Upload your project to Vercel `vercel` - This will create a private build you can access 
1. Make it live `vercel --prod`





#### TO ADD

https://vercel.com/docs/environment-variables


