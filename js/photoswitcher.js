/** $(document).ready(function(){
	var $imgs = $(".fader").find("img"),
    i = 0;

	function changeImage(){
    var next = (++i % $imgs.length);
    $($imgs.get(next - 1)).fadeOut(2000);
    $($imgs.get(next)).fadeIn(1000);
}
var interval = setInterval(changeImage, 7000);
}); **/

$(document).ready(function () {
    
        setTimeout(function() {
        for (var i = 1; i <= 3; i++) {
        var image = "./img/main" + i + ".jpg";
        console.log(image);
        var x = document.getElementsByClassName("fader");
        x.src = image;
        console.log(x.src);
        };
    }, 5000);
});

