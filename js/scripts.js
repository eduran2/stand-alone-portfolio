// Randomize Header

// Store & Generate Number
var maxRand = 5;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = '/stand-alone-portfolio/img/fullsize/asad.jpg';
var img1 = '/stand-alone-portfolio/img/fullsize/ewuframe.jpg';
var img2 = '/stand-alone-portfolio/img/fullsize/poachedsign.jpg';
var img3 = '/stand-alone-portfolio/img/fullsize/swcan.jpg';
var img4 = '/stand-alone-portfolio/img/fullsize/whiskeyad2.jpg';

// Show Images
$('header img').attr('src', eval('img' + numRand) );

// Activate Gallery
$('figure').lightGallery({
    selector: 'a'
});
