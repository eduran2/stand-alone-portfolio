// Randomize Header

// Store & Generate Number
var maxRand = 5;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = '/img/fullsize/asad.jpg';
var img1 = '/img/fullsize/ewuframe.jpg';
var img2 = '/img/fullsize/poachedsign.jpg';
var img3 = '/img/fullsize/swcan.jpg';
var img4 = '/img/fullsize/whiskeyad2.jpg';

// Show Images
$('header img').attr('src', eval('img' + numRand) );

// Activate Gallery
$('figure').lightGallery({
    selector: 'a'
});
