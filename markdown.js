function showCanonicalImages() {var images = document.getElementsByTagName('img');if (!images) {return;}
for (var index = 0; index < images.length; index++) {var image = images[index];if (image.getAttribute('data-canonical-src') && image.src !== image.getAttribute('data-canonical-src')) {image.src = image.getAttribute('data-canonical-src');} }}
function scrollToHash() { if (location.hash && !document.querySelector(':target')) {var element = document.getElementById('user-content-' + location.hash.slice(1));if (element) {   element.scrollIntoView();}}}
function autorefreshContent(eventSourceUrl) {var initialTitle = document.title;  var contentElement = document.getElementById('grip-content');  var source = new EventSource(eventSourceUrl);  var isRendering = false;  source.onmessage = function(ev) {var msg = JSON.parse(ev.data);if (msg.updating) {  isRendering = true;  document.title = '(Rendering) ' + document.title;} else {  isRendering = false;  document.title = initialTitle;  contentElement.innerHTML = msg.content;showCanonicalImages();} } source.onerror = function(e) {if (e.readyState === EventSource.CLOSED && isRendering) {  isRendering = false;  document.title = initialTitle;} }}
window.onhashchange = function() {scrollToHash();}
window.onload = function() { scrollToHash();}
showCanonicalImages();
var autorefreshUrl = document.getElementById('preview-page').getAttribute('data-autorefresh-url');
if (autorefreshUrl) { autorefreshContent(autorefreshUrl);}