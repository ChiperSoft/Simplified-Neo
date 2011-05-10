#Simplified Neo
###A Linkinus 2 Style

Simplified Neo is a partial rewrite of the Simplified style, ported to use the Prototype.js class.  Rather then have a collection of functions called by the API, the API calls are translated into custom events on the document object.  Individual modules then listen for these events and interact with the page on their own.

This was a proof of concept done to learn the Linkinus API and to make my own adjustments to Style that was closest to my desired output.