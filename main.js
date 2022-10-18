let input = document.querySelector('input[type="text"]');
let button = document.querySelector('input[type="button"]');
let output = document.querySelector('output');
let figure = document.querySelector('figure');

function youtubeUrlParser(url) {
    let videoId = /^https?\:\/\/(www\.)?youtu\.be/.test(url) ? url.replace(/^https?\:\/\/(www\.)?youtu\.be\/([\w-]{11}).*/, "$2") : url.replace(/.*\?v\=([\w-]{11}).*/, "$1");
    return {
        id: videoId
    };

}; // youtubeParser();


let outputResult = function () {
    let video = youtubeUrlParser(input.value);
    figure.innerHTML = '<iframe src="https://www.youtube.com/embed/' + video.id + '?' + (video.startSeconds ? 'start=' + video.startSeconds + '&amp;' : '') + 'enablejsapi=1&amp;autohide=1&amp;color=white&amp;controls=1&amp;playsinline=1&amp;rel=' + video.showRelated + '&amp;autoplay=true&amp;showinfo=0&amp;theme=light&amp;wmode=transparent" width="900" height="600" allowfullscreen></iframe>';
    output.textContent = 'ID: ' + video.id + (video.startString ? ' | Start @ ' + video.startString.replace(/t\=/, '').replace(/[a-z]/g, ':').replace(/\:$/, '') : '');
};

button.addEventListener('click', outputResult);