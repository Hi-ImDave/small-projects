# Scroll Animation

This is a CSS animation that brings images into view as the page scrolls down, and back out of view as it scrolls up. This project can be used for anything that you want to display on the page only as the viewport has room to fit.

## How It's Made:

Primarily uses CSS transitions with an event listener on scroll that adds a class to parent div to bring image on screen. Also has an initial event listener on load to prevent empty screen prior to scroll.

**Tech used:**
HTML, CSS, JavaScript

**Preview:**

<div align="center">
  <img src="./assets/scrollAnimation.gif" alt="scrolling page" />  
</div>

## Optimizations:

I would probably change the layout to include another row or two so the rest of the page doesnt look so empty if the images are the only thing to be displayed.

## Lessons Learned:

Learned a bit more about translateX in CSS and how to manipulate items using pseude selectors.
