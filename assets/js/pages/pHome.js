var pHome = {
    init: function() {
        $(window).on("resize", pHome.onResize), pHome.onResize(), $("#btn-upload").on("click", function(n) {
            n.preventDefault(), DUpload.browse(), DUpload.onSelect = function(n) {
                console.log(n);
                var e = new Image;
                e.src = n, $(".imgContainer")[0].appendChild(e)
            }
        })
    },
    onResize: function(n) {
        console.log("Browser size: " + window.innerWidth + "x" + window.innerHeight)
    },
    galleryInit: function() {}
};