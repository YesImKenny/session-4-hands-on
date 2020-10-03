// Get the id from the video URL in constants.js
export var getVideoIdFromPageUrl = (url) => {
    var testString = 'vimeo.com/';
    var testStringStart = url.indexOf(testString);
    var idStart = testStringStart + testString.length;
    var idEnd = Math.max(0, url.indexOf('/', idStart)) || url.length;
    var id = url.slice(idStart, idEnd);
    if (testStringStart === -1 || idStart === url.length || isNaN(Number(id))) {
        return '';
    }
    return id;
};