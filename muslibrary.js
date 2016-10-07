'use strict'

function Library(name, creator){
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name){
  this.name = name;
  this.tracks = [];
  this.averageRating = function(){
    let ratingArr = [];
    for(var i=0; i<this.tracks.length; i++){
      ratingArr.push(this.tracks[i].rating)
    }
    return (ratingArr.reduce((a,b)=>{
          return a + b;
        })/this.tracks.length)
  };
  this.totalDuration = function(){
    let durationArr = [];
    for(var i=0; i<this.tracks.length; i++){
      durationArr.push(this.tracks[i].duration)
    }
    return durationArr.reduce((a,b)=>{
          return a + b;
        })
  };
}

function Track(title, rating, duration){
  this.title = title;
  this.rating = rating;
  this.duration = duration;
}
//Instances of these objects
var chillLibrary = new Library('chill','Anderson');
var chillPlaylist = new Playlist('superchill');

//Instances of Tracks
var chillTrack1 = new Track('Numb', 3, 330);
var chillTrack2 = new Track('Wonton Soup', 2, 1300);
var chillTrack3 = new Track('Caiou', 5, 510);

//Push tracks in to playlists, and playlists into library
chillPlaylist.tracks.push(chillTrack1,chillTrack2, chillTrack3);
chillLibrary.playlists.push(chillPlaylist);

//Select Methods of the chillest library on earth.
var overallRating = chillLibrary.playlists[0].averageRating();
var duration = chillLibrary.playlists[0].totalDuration();

//Tests
console.log(`The overall rating is ${overallRating}`);
console.log(`The total duration is ${duration}`);

/*console.log(chillLibrary);*/

/*console.log(chillPlaylist);*/