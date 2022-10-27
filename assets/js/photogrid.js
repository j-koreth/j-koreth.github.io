class PhotoGrid {
    photoarray = [];
    index = 0;
    id = null;

    constructor(id, p1){
        this.id = id;
        this.photoarray.push(p1);
        this.photoarray = this.photoarray.flat();
        let photogrid = document.getElementById(this.id);
        let image = photogrid.querySelector('div:nth-child(2) > img');
        image.src = p1[0];

        let fullscreenimage = photogrid.querySelector('.f > img:nth-child(1)');
        fullscreenimage.src = p1[0];
        
        let open = photogrid.querySelector('#open');
        open.href = p1[0];
        let download = photogrid.querySelector('#download');
        download.href = p1[0];

        let pagenumber = photogrid.querySelector('#page_num')
        pagenumber.innerHTML = this.index + 1;

        let pagecount = photogrid.querySelector('#page_count')
        pagecount.innerHTML = this.photoarray.length;
    }

    nextphoto(){
        let photogrid = document.getElementById(this.id);
        let image = photogrid.querySelector('div.grid-item:nth-child(2) > img:nth-child(1)');
        let open = photogrid.querySelector('#open');
        let download = photogrid.querySelector('#download');
        let fullscreenimage = photogrid.querySelector('.f > img:nth-child(1)');

        this.index++;
        image.src = this.photoarray[(this.index % this.photoarray.length + this.photoarray.length) % this.photoarray.length];
        fullscreenimage.src = this.photoarray[(this.index % this.photoarray.length + this.photoarray.length) % this.photoarray.length];
        open.href = this.photoarray[(this.index % this.photoarray.length + this.photoarray.length) % this.photoarray.length];
        download.href = this.photoarray[(this.index % this.photoarray.length + this.photoarray.length) % this.photoarray.length];

        let pagenumber = photogrid.querySelector('#page_num')
        pagenumber.innerHTML = (this.index % this.photoarray.length + this.photoarray.length) % this.photoarray.length + 1;
    }

    prevphoto(){
        let photogrid = document.getElementById(this.id);
        let image = photogrid.querySelector('div.grid-item:nth-child(2) > img:nth-child(1)');
        let open = photogrid.querySelector('div.grid-item:nth-child(1) > a.clickable:nth-child(1)');
        let download = photogrid.querySelector('div.grid-item:nth-child(1) > a.clickable:nth-child(3)');
        let fullscreenimage = photogrid.querySelector('.f > img:nth-child(1)');

        this.index--;
        image.src = this.photoarray[(this.index % this.photoarray.length + this.photoarray.length) % this.photoarray.length];
        open.href = this.photoarray[(this.index % this.photoarray.length + this.photoarray.length) % this.photoarray.length];
        download.href = this.photoarray[(this.index % this.photoarray.length + this.photoarray.length) % this.photoarray.length];
        fullscreenimage.src = this.photoarray[(this.index % this.photoarray.length + this.photoarray.length) % this.photoarray.length];

        let pagenumber = photogrid.querySelector('#page_num')
        pagenumber.innerHTML = (this.index % this.photoarray.length + this.photoarray.length) % this.photoarray.length + 1;
    }
}