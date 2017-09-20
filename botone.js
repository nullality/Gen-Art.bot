var Jimp = require("jimp");
/* I could make this following bit MORE confusing for you if you'd like */
var ranOne = Math.floor(Math.random()*200);
var ranTwo = Math.floor(Math.random()*200);
var ranThree = Math.floor(Math.random()*300);
var ranFour = Math.floor(Math.random()*400);
var ranFourTwo = Math.floor(Math.random()*400);
var ranFourThree = Math.floor(Math.random()*400);
var ranLess = Math.random()*1;
var ranLessTwo = Math.random()*1;
var ranLessThree = Math.random()*1;

var duoOne = Math.floor(Math.random()*200);
var duoTwo = Math.floor(Math.random()*200);
var duoThree = Math.floor(Math.random()*300);
var duoFour = Math.floor(Math.random()*400);
var duoFourTwo = Math.floor(Math.random()*400);
var duoFourThree = Math.floor(Math.random()*400);
var duoLess = Math.random()*1;
var duoLessTwo = Math.random()*1;
var duoLessThree = Math.random()*1;

console.log(ranOne, ranTwo, ranThree, ranFour, ranFourTwo, ranFourThree, ranLess, ranLessTwo, ranLessThree, duoFourTwo);

var image = new Jimp(1024, 1024, function (err, image) {
    Jimp.read("https://source.unsplash.com/collection/578066/800x600").then(function (imagetwo) {
            imagetwo.opacity(.7).scaleToFit(512, 512).contrast(ranLessTwo).opaque();
            imagetwo.blit(imagetwo, ranOne, ranOne, ranTwo, ranTwo, ranFourTwo, ranFour );
            imagetwo.blit(imagetwo, ranTwo, ranTwo, ranOne, ranOne, ranFour, ranFourTwo );
            imagetwo.blit(imagetwo, 5, 10, 15, 20, 15, 10 );
            imagetwo.blit(imagetwo, 10, 20, 30, 40, 30, 20 );
            imagetwo.blit(imagetwo, 15, 30, 45, 60, 45, 30 );
            imagetwo.blit(imagetwo, 20, 40, 50, 80, 50, 40 )
            imagetwo.write("outpuu.jpg"); // save
        Jimp.read("https://source.unsplash.com/collection/578066/801x601").then(function (imageone) {
            imageone.composite(imagetwo, ranOne, ranThree).contrast(ranLessThree);
            imageone.blit(imageone, 50, 75, 100, 50, 75, 50 );
            imageone.blit(imageone, 150, 75, 100, 150, 75, 150 );
            imageone.blit(imageone, 350, 275, 100, 350, 275, 350 );
            imageone.blit(imageone, 450, 375, 100, 450, 375, 450 )
            imageone.composite(imageone, ranLess, ranFour);
            imageone.write("outputt.jpg"); // save
            imagetwo.opacity(.7).scaleToFit(512, 512).contrast(ranLessTwo).opaque();
            imageone.blit(imageone, 50, 75, 100, 50, 75, 50 );
            imageone.blit(imageone, 150, 75, 100, 150, 75, 150 );
            imageone.blit(imageone, 350, 275, 100, 350, 275, 350 );
            imageone.blit(imageone, 450, 375, 100, 450, 375, 450 )
            .write("outputtt.jpg");
        }).catch(function (err) {
               console.error(err);
            });
    });
})
