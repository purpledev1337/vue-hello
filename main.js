var app = new Vue({
        el: "#root",
        data: {
            message: "Hello Word! Welcome Vue!",
            source: "https://unsplash.it/300/300?image=1",
            color: "red"
        },
        methods: {
            changeImg: function() {
                if (this.source === "https://unsplash.it/300/300?image=1"){
                    this.source = "https://unsplash.it/300/300?image=2"
                } else {
                    this.source = "https://unsplash.it/300/300?image=1"
                }
            },
            changeColor: function() {
                if (this.color === "red"){
                    this.color = "blue"
                } else {
                    this.color = "red"
                }
            }
        }
    })