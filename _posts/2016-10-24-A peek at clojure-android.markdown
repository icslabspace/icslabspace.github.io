---
layout: post
title: A peek at clojure-android
date:   2016-10-24 10:45:26 +0300
category: programming
tags: clojure android 
author: avr.PhD. Alex Gherega 
---

<h1><img src="/images/posts/clojure-android.png"/>
<font color="orange"><font color="green">(peek </font>@<font color="grey">clojure-android</font><font color="green">)</font></font></h1>
This article covers a Clojure for Android technology stack review with various juicy hints on what you can expect from it, where can you use it successfully and what's the future of all this. 

Also I'll say it from the get go: I'm not an Android expert nor a Clojure-on-android one – so, if like me, you want to dip your toes and wet your appetite into building Android app using Clojure this might give some good guidelines.

Spurred by this [2010's add](https://www.youtube.com/watch?v=urv7C2RlgcU) (and when I say spurred I mean heavily amused and laughing out loud) I've decided to postpone my idea implementation no longer.

What's it all about? Well, in a nutshell, I've wanted something that acts both as memory training exercise and as a tool for improving self-organizing and productivity.

We all wriPe and use todo LisPs – and yes there is a clue in there – under the assumption that it helps us be more productive and more focused by having a timebox-ish plan (we're not talking about bucket lists here or long life dreams and plans) which we express as a simple list of actions to be done in the course of a clear interval. (I myself usually use todos on a daily basis). 
However, using a todo also gives a false sense of comfort and we usually don't exercise our memory enough -why? because we've written it down on a todo, right? why should one bother to remember the details? 

So this is the idea behind this simple app: instead of having a full fledged todo – checkbox and todo item description we can have colored checkboxes, have the details stored but not displayed, use your associative memory to know what each item on the list is about only by seeing a border-colored checkbox. You can check out more about the app [here](https://play.google.com/store/apps/details?id=eu.icslab.gherega.alex.codo).

Now, although here at [icslab.eu](www.icslab.eu), we usually have a nervous twitch when we here the words Android/iOS API, we do actually enjoy and appreciate having a small personal – quite powerful – computer at our fingertips' disposal just by reaching into our pockets.

It's settled then: I'll an Android based app for having colorful todos that also help our brains.

<h2><font color="purple">Design – Standalone, Android and Clojure</font></h2>

__My first design decision: a standalone app.__

Although nowadays most sensible mobile app developers will tell you that writing a web mobile app is far better to write and is more flexible, extendable and scalable, there are some reasons why I've wanted to have my small app as a standalone one:

*  first: I've wanted an app that needs no data connectivity whatsoever
*  next: I've wanted to have full access to my device
*  third: you are actually walking around with quite a bit of computing power dispensed by your smart phone; why not use it? Why induce load/costs/congestion on other machines and networks when it is not needed (I know what you're thinking, it's either gonna be: economy is a bitch OR this guy is way way way to confident in his app future ratings) 
*  and last – it's always annoying to rely on online microservices and whatnot; I don't know about your feel but I actually like some privacy from time to time :)

__My second design decision: Android.__

“Why Android?” I hear you cry? several reasons: it's a tested and well documented API (although I personally get food poisoning just thinking about it), it's a bit more flexible then iOS, you get a larger variety of devices (and for less money), Google Play platform for deploying is quite good lately.

__And my last design decision: Clojure as the way to build things.__

Well this one shouldn't be that surprising – just a glance at my profile and you'll see why this subjective call.

<h2><font color="purple">Clojure for Android</font></h2>

The Clojure tech stack for one to use in symbiosis with Android is not that vast. 

You can actually rely on just a small kit of APIs and these are:

*  [Lein-droid](https://github.com/clojure-android/lein-droid)
*  [Neko](https://github.com/clojure-android/neko)
*  [Emacs & CIDER](https://github.com/clojure-emacs/cider)

Yes! That's about it. The rest of things you'll find mostly rely on the above.

#### Lein-droid

Lein-droid is a plugin for [Leiningen](http://leiningen.org/).

And leiningen is a Clojure project management tool which allows you quickly generate, build and deploy your projects.
Make sure you have the latest leiningen installed when working with lein-droid as it wasn't at all times stable. 

Using Lein-droid is fairly simple and quite enjoyable: you create a new project with: 

<pre><code>lein new droid project-name package-name [optional-args]</code></pre>

The template will be downloaded automatically, and inside the project folder lein-droid will be already available.
You build your Android app and install it on a real/emulated device (I've always worked with a real connected device as it is sooo much faster) using:

<pre><code>lein droid doall</code></pre>

You do need to setup the Android SDK path by hand in the generated project.clj (after the lein new..  command).

#### Emacs & CIDER

If you've never used Clojure before (or if you only used IntelliJ) then you should know that usually emacs is the defacto Clojure editor amongst clojurians. More so, CIDER is one of the most used (not necessarily loved) Clojure IDE and REPL for emacs – it gives you syntax highlight, nice shortcuts for developing, integration with the Read-Print-EvalLoop, pleasant-ish navigation shortcuts.

If you already have CIDER setup for your emacs Clojure development environment then all that's left to do is to add the following to your profiles.clj 

{% highlight clojure %}
:android-user {:dependencies [[cider/cider-nrepl "0.9.1"]]
               :android {:aot-exclude-ns ["cider.nrepl.middleware.util.java.parser"
                                 "cider.nrepl" "cider-nrepl.plugin"]}}
{% endhighlight clojure %}                                 
                        

Otherwise you're in for a bit of pain but still better than lots of other IDEs I've been using – don't worry it's all very well and nice documented [here](https://github.com/clojure-emacs/cider).

#### Neko

This will be the foundation for all your Clojure-on-Android projects and it has some nice, well mannered features and some things still to work/add on.

After setting-up your env, [here's](https://github.com/alexander-yakushev/events/blob/master/tutorial.md) a nice start off tutorial to get your juices going.

And [here's](https://github.com/clojure-android/neko/wiki) the full proper documentation for the Neko API.
What I'll go through next is: a short survey of the current API, some of the pitfalls and finally where should we improve next.

<h2><font color="purple">Neko namespaces</font></h2>

The Neko [namespaces](https://github.com/clojure-android/neko/wiki/Namespaces) are your map to what this compact API can do for you while developing your Android app.

First of all you'll be able to write most of your Android app using the Clojure language and some form of DSL instead of those ugly XMLs in Android. Clojure is very expressive and allows you to quickly focus on WHAT needs to be implemented rather than HOW it needs to be implemented.

You can easily create an activity: we use the functions from 

#### neko.activity 

namespace for that like in the following example.

![pic](/images/posts/activity-creation.png)

This is basically how your code will start to look in terms of UI trees. You basically generate a valid  Android UI component by using set-content-view! for an activity or make-ui anywhere else. There is also support for fragments in the same namespace.

You can break-up and design your Clojure code as for any Clojure project (make you own namespaces, use higher order functions and compositions to generate logic and even UI and so on).

#### neko.ui

The main building block of neko.ui is a UI tree as you've seen above:

<pre><code>[element-type attributes-map & inside-elements]</code></pre>

neko.ui provides the make-ui functions which given such a tree, will produce the Android relevant objects and data-structures, and usually it works out pretty good.

However don't expect it to be all candy. The final goal for neko.ui is to allow you to create all of your Android UI components using such Clojure constructs and forget about XML or Java. However this only holds for simple enough UIs. If you want/need some complete component with dynamic manipulation and so on: you'll end up with Android Java calls in your Clojure code.

For example: if you want to add a custom image to a button and want it centered in the middle of it, you'll have to call something like this:

{% highlight clojure %}
(.setCompoundDrawablesWithIntrinsicBounds ^Button 
	(find-view (*a) ::menu) 
	0 0 0 R$drawable/menuicon)
{% endhighlight clojure %}

Also, don't expect never to use or see XML files as well. If you need borders to your TextView you'll have to have some sort of *shape*.xml file and then use reflection to add. Which brings us to our next interesting namespace of neko.

#### neko.resource

This namespace is a God-sent! It will easily give you access to the <code>R$*[anim drawable …]</code> resources of your Android app. During my experience developing [this brain training/self-organizing tool](https://github.com/alex-gherega/colored-todo/wiki), I've needed this a lot. This combined with the code-as-data power of Clojure allowed me something which I could never do in Android: __dynamically walk through the drawables without actually store them in memory__ (e.g. I have <code>R$drawable/border1</code>, <code>R$drawable/border2</code>, ...  <code>R$drawable/borderN</code>; I can then generate programatically TextViews with specific ids based on index and assign drawables based on that id; even more so I can then use the string <code>R$drawable/borderN</code>, concatenate it to <code>R$drawable/checked_borderN</code> and use this value to actually invoke the resource).

#### neko.*

Other cool namespaces are:

*  __neko.debug__ – it allows you to obtain the main activity ANYWHERE (just a simple call <code>(*a ::main)</code>)
*  __neko.threading__ – you can use it to run the ui on various threads
*  __neko.dialog__ – generate useful dialogs (and quite easily); and best of all easily adjustable
*  __neko.notify__ – the older toast of Android: there is currently no support for the Snackbar Android API
*  __neko.action-bar__ – this one is a bit disappointing: it will give you an action-bar, you can even add menus to it but it only works well with tabbed menus (if you need a drop down list don't hope for much); I've actually given up in my up on this one and made my own custom layout for a menu/action-bar to make it look from this century.

I haven't really touched on the following important elements for Android while using Neko (so I can't really provide a good feedback on them): intents, fragments, data and shared preferences and lastly creating an Android service.

<h2><font color="purple">Neko's pros and cons</font></h2>

#### Documentation

This is definitely a plus for all of the above: they are nicely documented although some digging around might be required.

#### Java interop

Although not yet mature enough for my taste, neko has a very good extensibility system in place so you could write some of the new namespaces yourself. With respect to that: yes! you'll write Clojure and Java-interop code while wrapping new Android functionality into neko's namespaces, but after that think of the rewards?

For this take a look at neko.traits and also to how some of the above namespaces are actually implemented. If anything it will give you more insight into Clojure's power.

#### XML

While you can add new stuff to neko and in the future to get things done without XML, if you're like me and what to implement a small app fast to see its potential, you'll most likely have to write some XML (unless you're happy with the default look and feels and functionalities).

#### Android knowledge

Neko falls into the Android philosophy followers where it basically mostly just wraps over the Android API. I was actually hoping1 to have middleware level over the Android API and thus get a new consistent language for developing mobile apps. But no :) You still need to know your way around Android – and quite at a high level I might add, otherwise you'll end up really frustrated.

#### REPL

This is the absolute my favorite thing in the world – when it works! (however this is not Neko's work but I've figured to stick in the same pros-cons hash-bucket).

For some reason Cider's REPL is sometimes quite slow and unresponsive but you can forgive him for that on account of what it delivers.

Somehow I've always wanted that when I do a minor change in my code to see it instantly on my phone. I've never managed to get my Android Studio to do that out of the box, but somehow with Cider it magically *works.

<h6>*When you deploy your Android app to your phone using </h6>

<code>lein droid doall</code>

<h6>(if you specify that you want if for debugging in you manifest.xml) you'll have also a nREPL server running on your phone. Using the CIDER plug-in you connect to it (M-x cider-connect) and then you just compile your code on the fly (C-c C-k) and “refresh” you app with the new code by compiling/deploying (just hit C-x C-e at the end of your on-ui call).</h6>

<h6>This sort of running small tests quickly to see how it all comes together is worth the effort of setting up emacs with Cider. In my case I feel this continuous feedback allows me to get new ideas quicker, iron out bugs from the get go, be more creative with my designs, explore new concepts without fearing that I'll waste time and finally that vibe that you're actually connected to your gadget/hardware platform processing power. </h6>

#### Deployment

Although the REPL hot deployment works most of the time it doesn't absolve you from never running a <code>lein droid compile</code> or <code>lein droid doall</code> command. If you add new resource files, or if you are using macros to manipulate your code then you'll be in that unfortunate case where just C-x-ing away from emacs won't do much good into seeing the results on your phone. You'll HAVE to recompile and redeploy.

<h2><font color="purple">What's next?</font></h2>

While all the ecosystem described above has a lot of nice features and will allow you to quickly test out what you want and need from your Android design and app, there is still some room from improvement.

The most important new features I'd like to see are: have a way to consistently avoid XML through a nicely designed architecture, extend the set of namespaces' set with all the current new features of Android stack, some app management API (more expressive events than intents), a better debug environment.

I also think that an ever lighter and more stable repl plug-in for emacs is required.

Finally and something you don't really get out-of-the-box is a performance monitoring system with all of the above. If this would be included together with the hot-deployment without making it bulgy and slow then I'd see no point in ever writing anything else but Clojure for Android.

My final thought is that one never really gets away from the Android vibe and that's what I hope to really see come to light (without going the web-based development way) in the future – a more Clojure/FP feel of writing mobile apps.

For now Clojure-on-Android or more Clojure-wrapping-Android is the best we have using the good and great work from [Clojure](http://clojure.org/), [Cider](https://github.com/clojure-emacs/cider), [Neko](https://github.com/clojure-android/neko) and [Leiningen](http://leiningen.org/).
   