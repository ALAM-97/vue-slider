const app = new Vue({
    el: '#root',
    data: {
        images: 
        [
            {
                img: "img/slider-discord.png",
                url: "https://alam-97-boolean-discord.netlify.app/"
            },
            {
                img: "img/slider-dropbox.png",
                url: "https://alam-97-boolean-dropbox.netlify.app/"
            },
            {
                img: "img/slider-ps.png",
                url: "https://alam-97-boolean-40-ps-store.netlify.app/"
            },
            {
                img: "img/slider-spotify.png",
                url: "https://alam-97-boolean-spotify.netlify.app/"
            },
            {
                img: "img/slider-zoom.png",
                url: "https://alam-97-boolean-zoom.netlify.app/"
            }
        ],
        imageIndex: 0
    },
    methods: {
        nextImage: function() {
            this.imageIndex++
            if (this.imageIndex >= this.images.length) {
                this.imageIndex = 0;
            }
        },
        previousImage: function() {
            this.imageIndex--
            if (this.imageIndex == -1) {
                this.imageIndex = this.images.length - 1;
            }
        }
    },
})