---
title: What Is the Easiest Way to Add Dark Mode to a Website? Part 2
date: 2022-02-07 00:00:00 Z
layout: post
excerpt: Saving eyes with one CSS file at a time.
mytags:
- CSS
- HTML
- JavaScript
project: Personal Website
---

In a previous post, I mentioned how to add dark mode to a website. Let's take this one step further by letting users choose the color pallete they prefer in spite of the default browser color scheme.

Be warned JavaScript ahead. 

The first step is to create a function that will detect the loaded color scheme and sets the opposite color scheme with placeholders for setting functions setting the colors.

<div class="grid-container">
    <div class="grid-item actions">
        <button  class="clickable button" onclick="select(this)">Select</button> 
        <button  class="clickable button" onclick="copy(this)"><i class="fa fa-clipboard" aria-hidden="true"></i> Copy</button>
    </div>
    <div class="grid-item codesnippet">
        {% highlight javascript %}
        function toggleTheme() {
            var style = getComputedStyle(document.body);
            var bg = style.getPropertyValue('--main-bg-color');
            
            if(bg == "#f7f7f7"){
                setDarkTheme();
            }
            else{
                setWhiteTheme();
            }
        }
        {% endhighlight %}
    </div>
</div>

This function will load my style sheet from the document and gets the --main-bg-color variable. 
As according to my stylesheet if the variable is set to #f7f7f7, then the user is being served the light theme or else they are served the dark theme.



To put it all together here is what I use. 
<div class="grid-container">
    <div class="grid-item actions">
        <button  class="clickable button" onclick="select(this)">Select</button> 
        <p>themeChange.js</p>
        <button  class="clickable button" onclick="copy(this)"><i class="fa fa-clipboard" aria-hidden="true"></i> Copy</button>
    </div>
    <div class="grid-item codesnippet">
        {% highlight javascript linenos %}
        function setWhiteTheme(){
            document.body.style.setProperty('--main-bg-color', '#f7f7f7');
            document.body.style.setProperty('--secondary-bg-color', 'rgb(245, 245, 245)');
            document.body.style.setProperty('--tertiary-bg-color', '#f0f0f0');
            document.body.style.setProperty('--main-text-color', '#000000FF');
            document.body.style.setProperty('--secondary-text-color', '#3C3C4399');
            document.body.style.setProperty('--tertiary-text-color', '#3C3C434D');
            document.body.style.setProperty('--separator-color', '#3C3C434A');
            document.body.style.setProperty('--shadow-colors', '0, 0, 0');
            localStorage.setItem("theme", "white");
        }

        function setDarkTheme(){
            document.body.style.setProperty('--main-bg-color', '#000000FF');
            document.body.style.setProperty('--secondary-bg-color', '#1C1C1EFF');
            document.body.style.setProperty('--tertiary-bg-color', '#2C2C2EFF');
            document.body.style.setProperty('--main-text-color', '#FFFFFFFF');
            document.body.style.setProperty('--secondary-text-color', '#EBEBF599');
            document.body.style.setProperty('--tertiary-text-color', '#EBEBF54D');
            document.body.style.setProperty('--separator-color', '#54545899');
            document.body.style.setProperty('--shadow-colors', ' 83, 83, 83');
            
            localStorage.setItem("theme", "dark");
        }

        function toggleTheme() {
            var style = getComputedStyle(document.body);
            var bg = style.getPropertyValue('--main-bg-color');
            
            if(bg == "#f7f7f7"){
                setDarkTheme();
            }
            else{
                setWhiteTheme();
            }
        }
        {% endhighlight %}
    </div>
</div>