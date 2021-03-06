---
layout: post
title: MDL capabilities and weaknesses
date:   2016-11-24 10:45:26 +0300
category: programming
tags: web 
author: Georgiana Mania
images: 
  - url: /images/posts/mdl.jpg
    alt: MDL's capabilities and weaknesses
    title: mdl.jpg
---

<div class="ui container">
  <img class="ui small left floated image" src="/images/posts/mdl.jpg">
  <p>When choosing the technology stack for building the presentation site for <a href="http://www.icslab.eu/intolambda/index.html"> into lambda event</a>, we had some clear objectives in mind:</p>
  <div class="ui hidden divider"></div>
</div>  

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>
1. use the power of <b>functional programming</b> as much as possible - this is how picking Clojure (for the back-end) and ClojureScript (for UI/UX) came naturally

2. work with at least one new library/API that we haven't used before - so we chosen:
- [boot](https://github.com/boot-clj/boot) over the commonly used [leiningen](http://leiningen.org/);
- [MDL](https://getmdl.io/) with the JS support from [cljsjs](https://github.com/cljsjs/packages/tree/master/material);

3. be efficient with respect to implementation time - we used a ClojureScript application template generated [here](https://github.com/martinklepsch/tenzing).

This post focuses on MDL v1.2.1 and my interaction with it. The full implementation of this project is available [here](https://github.com/georgi-mania/intolambda).

<h3> So.. what is MDL? </h3>

In July 2015, Google launched [Material Design Lite](https://getmdl.io/). Its purpose was to bring a material design look and feel to websites and apps running on different platforms. It is called "lite" because it is a framework agnostic library with low code overhead and fewer dependencies than other similar products.

The current version is 1.2.1 but they announced that version 2.0 would be launched soon. Check their [release page](https://github.com/google/material-design-lite/releases) for more information.


<h3> How to get started? </h3>

To be able to use it, there are some stylesheets (regarding the fonts, themes and icons) and a script that should be imported in the "<head>" section of the html. For example:

{% highlight html %}
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.blue_grey-amber.css">
<script defer src="https://code.getmdl.io/1.2.1/material.min.js"></script>
{% endhighlight html %}

See the [getting started reference](https://getmdl.io/started/index.html) for more details about them.

When deciding a color palette, one can use the support available [here](https://www.materialpalette.com/). Just choose your favorite colors and the appropriate stylesheet is generated for you. It can be either <b>(a) imported as link to an external file</b>: 

{% highlight html %}
<link rel="stylesheet" href="//code.getmdl.io/1.2.1/material.blue_grey-amber.min.css" />
{% endhighlight html %}

or <b>(b) download the associated CSS and import it</b>:

{% highlight html %}
<link rel="stylesheet" type="text/css" href="css/palette.css"> 
{% endhighlight html %}

The advantage of using the CSS file is that you have access to the configurations (i.e. color hex code). This might come in handy later if you want to use the same color elsewhere or if you want to change it.

These colors are used by MDL in a predefined behavior. In the above example, we chosen blue-grey as main color and amber as accent color. This means that all the text will be written using a darker grey, all the links will be amber, all the dividers will be a lighter grey, and so on. If you want a different behavior, you must configure it using CSS.

<h3> Which components are available? </h3>

The full list of predefined components is [here](https://getmdl.io/components/index.html). Each one of them comes with some implementation and configuration examples so one can see the final results. Unfortunately MDL provides only very basic components like header, footer, textfield, etc. in comparison to [Semantic-UI](http://semantic-ui.com/) which provides a lot more ready-to-use UI objects.

Moreover, the existing ones have some issues. For example the dialog - which is a very common UI component in websites nowadays - has very limited cross-browser support. A [polyfill](https://en.wikipedia.org/wiki/Polyfill) must be used to ensure the compatibility with all the browsers. MDL does not include any polyfill in its library, but there are some recommended links in the documentation.

Another surprise was the navigation drawer. Although it is easy to set in place, it does not close by default when the user clicks on it or on the area around it. You need to write some code for this behavior to happen. Also, the style for drawer's mobile icon is not easy to alter, like setting a parameter when loading it. Practically, the component's CSS must be overriden in a classical way. 

Also, there isn't a way in which you can easily set the style of an image. Rounded-corner images are very used in today's online environment. And yet there is no support for displaying it like this, other except the good-old CSS style: <code>border-radius: 50%;</code>. While other libraries have a "rounded" or "circular" style class, MDL doesn't. Or maybe it does, but there is no documentation about it.

But there are some nice features: 

- predefined themes and layouts (for websites, blogs or apps) which can be very useful at least as a starting point for building your own design;
- the ui grid is easy to configure for ensuring a good layout on each device type (web browser, phone, tablet).


<h3> What's the overall feedback? </h3> 

In my opinion, MDL provides little functionality, basic and not very robust components and not enough overview documentation. In the future, I would use it for small/trivial projects (websites or apps) which need little to no particular design. For a more complex project, I would go with a different JS library. Maybe just try a new one for the next challenge :).

   