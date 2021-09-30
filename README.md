# 05-Third-Party-APIs-Work-Day-Scheduler

## Description

This project is about create an application that allows a user to save events for each hour of the day. This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The daily planner has the current date displayed at the top of the calendar. The timeblocks for standard business hours are from 9AM to 5PM. Each timeblock is color coded to indicate whether the timeblocks in the past, present, or future. For each timeblock, there's a text area and a save button to enter and save an event. The text is saved in local storage after that. If the user refreshes the page or closes the browser and reopens it, the saved events are still shown on the page.

What I've learned:

* Link HTML to bootstrap, jQuery, fontawesome, and momentjs.
* Add bootstrap and CSS styling in element class in HTML to present.
* I set up each hour number as their id to us them as index in JavaScript.
* Use moment().format() to display the current date on the top of the calendar. 
* Use $.each(function()){} to loop the whole calendar with jQuery.
* Use .siblings();.parent();.eq() to manipulate the div.
* Use localStorage.setItem(),and .getItem() to store and display the localStorage.
* Use JSON.stringify(), and JSON.parse() to store and take the array in localStorage.
* Use function init() to express the page after refresh.


## Installation
* Log in GitHub Account
* This GitHub URL is : https://github.com/lijing-code/03-JS-Password-Generator
* The live URL is : https://lijing-code.github.io/03-JS-Password-Generator/

## Usage


* Open the live URL:  https://lijing-code.github.io/05-Third-Party-APIs-Work-Day-Scheduler/
* Enter the work schedule content for each hour.
* Press the button for each line to save the content.
* When you finish the task, delete it and save again.

## License
MIT License

Copyright (c) [2021] [Jing Li]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 
