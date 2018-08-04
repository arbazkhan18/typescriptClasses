var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var youtubeVideo = /** @class */ (function () {
    function youtubeVideo(channelName, videoName, videoTime, videoDate, views, likes, dislikes, comments, autoplay, description, subscribers, shares, pinnedComment) {
        var _this = this;
        this.channelName = channelName;
        this.videoName = videoName;
        this.videoTime = videoTime;
        this.videoDate = videoDate;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
        this.autoplay = autoplay;
        this.description = description;
        this.subscribers = subscribers;
        this.shares = shares;
        this.pinnedComment = pinnedComment;
        //all possible methods 
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getvideoName = function () {
            return _this.videoName;
        };
        this.getvideoTime = function () {
            return _this.videoTime;
        };
        this.getvideoDate = function () {
            return _this.videoDate;
        };
        this.getviews = function () {
            return _this.views;
        };
        this.getlikes = function () {
            return _this.likes;
        };
        this.setlikes = function (totalLikes) {
            _this.likes = totalLikes;
        };
        this.getdislikes = function () {
            return _this.dislikes;
        };
        this.setdislikes = function (totalDislikes) {
            _this.dislikes = totalDislikes;
        };
        this.getcomments = function () {
            return _this.comments;
        };
        this.getautoplay = function () {
            return _this.autoplay;
        };
        this.getDescirption = function () {
            return _this.description;
        };
        this.getsubscribers = function () {
            return _this.subscribers;
        };
        this.getpinnedComment = function () {
            return _this.pinnedComment;
        };
        this.channelName = channelName;
        this.videoName = videoName;
        this.videoTime = videoTime;
        this.videoDate = videoDate;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
        this.autoplay = autoplay;
        this.description = description;
        this.subscribers = subscribers;
        this.shares = shares;
        this.pinnedComment = pinnedComment;
    }
    return youtubeVideo;
}());
//inheritence
var nextVideo = /** @class */ (function (_super) {
    __extends(nextVideo, _super);
    function nextVideo(channelName, videoName, is_It_A_song, isPlaying, videoQuality, addToWatchlater) {
        var _this = _super.call(this, channelName, videoName) || this;
        _this.channelName = channelName;
        _this.videoName = videoName;
        _this.is_It_A_song = is_It_A_song;
        _this.isPlaying = isPlaying;
        _this.videoQuality = videoQuality;
        _this.addToWatchlater = addToWatchlater;
        _this.getis_It_A_song = function () {
            return _this.is_It_A_song;
        };
        _this.getIsPlaying = function () {
            return _this.isPlaying;
        };
        _this.setIsPlaying = function (playing) {
            _this.isPlaying = playing;
        };
        _this.is_It_A_song = is_It_A_song;
        _this.isPlaying = isPlaying;
        _this.videoQuality = videoQuality;
        _this.addToWatchlater = addToWatchlater;
        return _this;
    }
    return nextVideo;
}(youtubeVideo));
var storeData = new youtubeVideo('BB ki vines', 'angry masterji', '9 minutes', '04/05/2018', 120000, 75600, 12000, 52995, true, 'Bubbly sir is furious', 20000000, 5000, 'Keep Sharing, Keep Loving!');
var nextVideoObj = new nextVideo(storeData.getChannelName(), storeData.getvideoName(), false, false, 360, false);
//printing youtubeVideo object details 
//console.log(`Your Current Video details are : ${JSON.stringify(storeData)}`)
//printing Current Video object details 
//console.log(`Your Current Video details are : ${JSON.stringify(nextVideoObj)}`)
console.log("-------------------VIDEO  DETAILS-------------------");
console.log("channel name:  " + storeData.getChannelName());
console.log("video name:  " + storeData.getvideoName());
console.log("video date:  " + storeData.getvideoDate());
console.log("total views:  " + storeData.getviews());
console.log("total likes:  " + storeData.getlikes());
console.log("total dislikes:  " + storeData.getdislikes());
console.log("total comments: " + storeData.getcomments());
console.log("description:  " + storeData.getDescirption());
console.log(" pinned comment:  " + storeData.getpinnedComment());
console.log("is the next video playing:  " + nextVideoObj.getIsPlaying());
console.log("is that a song:  " + nextVideoObj.getis_It_A_song());
//changing values Comments using setter
console.log("-------------changing the values using a setter-----------------");
storeData.setlikes(5000);
console.log("Total Likes : " + storeData.getlikes());
storeData.setdislikes(562);
console.log("Total Dislikes : " + storeData.getdislikes());
