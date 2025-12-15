---
title: 1.3 Install Live Server
description: Use an extension to preview your pages in a new browser tab
layout: default
# draft: true
tags: ["install", "live server"]
---

<div class="callout-intro">
👉 Install a Live Server extension to preview and refresh your changes in the browser using either Codespaces or VS Code. 
</div>





## Using Live Server in Codespaces

Github Codespaces, like [github.dev](https://github.dev) or [vscode.dev](https://vscode.dev/) lets you edit your project in a web browser. But Codespaces lets you see changes immediately thanks to a virtual host it runs in the background. Create a new Codespace and install Live Server...

1. Go to https://github.com/codespaces
2. Click **New codespace**
3. On the page that opens, **Select a Repository** from the dropdown. 
4. Leave **Branch**, **Region**, and **Machine type** and click **Create codespace**
5. A new window will open with a VS Code-like editor. It looks like github.dev but thanks to a virtual machine running in the background you can install extensions and preview your work.
6. Select the Extension button (on the left) and search for Live Server. We installed [this one](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) with 60 million installs
7. Click **Install** and **Trust Publisher**
8. Back on the Explorer tab, right click on a file you want to preview and choose **Open with Live Server** to open a preview page in a new tab.



:::note
Verified [students](https://docs.github.com/en/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom) can use GitHub Codespaces for free, up to 180 core hours per month. 
:::

:::tip[Pro Tip]
It is also possible [to run an HTTP server](https://stackoverflow.com/a/75497415/441878) with Codespaces. 
:::







## Use Live Server with VS Code

Install a Live Server extension to preview and refresh your changes in the browser. 

:::caution
This exercise is for installing Live Server extension in VS Code on your own machine.
:::


When you view code stored on your computer with a browser it accesses your page using a `file:///` url. This is fine for basic websites, but presents issues when you want to do local accessibility testing with a browser extension or use data in your project (see CORS in Chapter 9). Alternately, it is time consuming to push each potential fix to Github Pages and wait to retest. 

1. In VS Code, go to View > Extensions
1. Search for "Live Server" (we like [one by Ritwick Dey](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), but they all generally offer the same functionality) and then click Install.
1. Right click on any HTML page and choose Open with **Live Server**. This will open your file using a temporary local server using a localhost address (127.0.0.1 is the address that a computer uses to communicate with itself).
1. As you edit and save your file the server will detect changes and automatically refresh your page!








