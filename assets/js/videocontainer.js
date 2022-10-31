class VideoContainer {
    index = 0;
    id = null;

    constructor(id, v){
        this.id = id;
        let videocontainer = document.getElementById(this.id);
        let video = videocontainer.querySelector('div:nth-child(2) > video');
        video.src = v;
        
        // let playpause = videocontainer.querySelector('#playpause');
        // playpause.addEventListener('click', () => {
        //     let icon = playpause.querySelector('i');

        //     if (video.paused) { 
        //         video.play();
        //         icon.classList.remove('fa-play');
        //         icon.classList.add('fa-pause');
        //     } else {
        //         video.pause();
        //         icon.classList.remove('fa-pause');
        //         icon.classList.add('fa-play');
        //     }
        // });

        let download = videocontainer.querySelector('#download');
        download.href = v;
    }
}