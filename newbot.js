// starting bell
console.log("Starting bot...");
// node api requirement that makes this work
var Twit = require('twit');
// api key requirement
var config = require('./config');
// api keys
var T = new Twit(config);
// filesystem node requirement
var fs = require('fs');
// image manipulator
var Jimp = require("jimp");


// random numbers
var RN200 = Math.floor(Math.random()*200);
var RN200S = Math.floor(Math.random()*200)*2;
var RN300 = Math.floor(Math.random()*300);
var RN400 = Math.floor(Math.random()*400);
var RN4 = Math.random()*100+4;
var R = Math.floor(Math.random()*10000000);

// image creation and posting
// image set one
tweetIt35();
  setInterval(tweetIt35, 1000*60*35);
  function tweetIt35() {
    var image = new Jimp(1024, 1024, function (err, image) {
      Jimp.read("https://source.unsplash.com/collection/578066/800x600").then(function (imagetwo) {
        imagetwo.opacity(.6).scaleToFit(512, 512).contrast(.8).opaque();
        Jimp.read("https://source.unsplash.com/collection/578066/801x601").then(function (imageone) {
          imageone.composite(imagetwo, RN200, RN200S).contrast(.8);
          imageone.composite(imageone, RN4, RN400);
          imageone.write("newimageone.jpg"); // save
          imageone.composite(imageone, RN4, 120).fade(.4).contrast(-.8).scaleToFit(512,512)
          .blit(imagetwo, RN200, RN200, RN200S, RN200S, RN400, RN400 )
          .write("newimagetwo.jpg");
        })
          .catch(function (err) {
              console.error(err);
          });
      });
    });

  // var filePathNI1 = 'newimageone.jpg';
  // var filePathNI2 = 'newimagetwo.jpg';
  //
  // T.postMediaChunked({ file_path: filePathNI1, filePathNI2 }, function (err, data, response) {
  //   var firstImagetoPost = fs.readFileSync('newimageone.jpg', 'base64');
  //   var secondImagetoPost = fs.readFileSync('newimagetwo.jpg', 'base64');
  //   T.post('media/upload', { media_data: firstImagetoPost }, uploaded);
  //   T.post('media/upload', { media_data: secondImagetoPost }, uploaded);
  //   function uploaded(err, data, response) {
  //     var id = data.media_id_string;
  //     var tweet = {
  //       status: 'Unsplash Pink+Purple #' + R,
  //       media_ids: [id]
  //     }
  //     T.post('statuses/update', tweet, tweeted);
  //     }
  //     function tweeted(err, data, response) {
  //       if (err) {
  //         console.log("Something went wrong, image didn't post!");
  //       } else {console.log("One pink and purple inspired image posted!")}
  //     }
  //     console.log("Data received for Pink+Purple images.");
  //   })
  // console.log("Working on pulling + processing pink n purple images..");
  // }
