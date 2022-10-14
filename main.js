const input = document.querySelector('#videoID')
const btn = document.querySelector('#btn')

let videoInitialized = false

btn.addEventListener('click', () => {

    if (videoInitialized) {
        console.log(2)
        player.loadVideoById(input.value, 0)
    } else {
        initializeVideo()
        console.log(1)
    }
});

// sample id: 'M7lc1UVf-VE'
function initializeVideo() {
    console.log(4)
    videoInitialized = true

    let tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onPlayerReady(event) {
    event.target.playVideo();
}

let done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function onPlayerError(event) {
    // alert('Podaj prawidłowy ID filmu')
    console.log('Error: ' + event.data)
}

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: input.value,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError
        }
    });
}


function stopVideo() {
    player.stopVideo();
}

// M7lc1UVf-VE

// regex 
// function youtube_parser(url) {
//     let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
//     let match = url.match(regExp);
//     if (match && match[7].length == 11) {
//         let b = match[7];
//         alert(b);
//         console.log(b)
//     } else {
//         alert("Url jest błedny");
//     }
// }

// const checkURL = youtube_parser(input.value)