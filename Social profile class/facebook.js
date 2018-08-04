var FaceBook = /** @class */ (function () {
    function FaceBook(userName, profilePicture, coverPhoto, updateInfo, dateOfBirth, gender, work, education, contactInfo, place, relationshipStatus, games, music, movies, tvShows, likedPages) {
        var _this = this;
        this.userName = userName;
        this.profilePicture = profilePicture;
        this.coverPhoto = coverPhoto;
        this.updateInfo = updateInfo;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.work = work;
        this.education = education;
        this.contactInfo = contactInfo;
        this.place = place;
        this.relationshipStatus = relationshipStatus;
        this.games = games;
        this.music = music;
        this.movies = movies;
        this.tvShows = tvShows;
        this.likedPages = likedPages;
        // All possible methods
        this.getUserName = function () {
            return _this.userName;
        };
        this.getProfilePicture = function () {
            return _this.profilePicture;
        };
        this.getCoverPhoto = function () {
            return _this.coverPhoto;
        };
        this.getupdateInfo = function () {
            return _this.updateInfo;
        };
        this.getDateOfBirth = function () {
            return _this.dateOfBirth;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getEducation = function () {
            return _this.education;
        };
        this.getContactInfo = function () {
            return _this.contactInfo;
        };
        this.getplace = function () {
            return _this.place;
        };
        this.getRelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.getgames = function () {
            return _this.games;
        };
        this.getMusic = function () {
            return _this.music;
        };
        this.getMovies = function () {
            return _this.movies;
        };
        this.getTvShows = function () {
            return _this.tvShows;
        };
        this.setTvShows = function (addMoreShows) {
            var newobj = (_this.tvShows).push(addMoreShows);
        };
        this.getLikedPges = function () {
            return _this.likedPages;
        };
        this.userName = userName;
        this.profilePicture = profilePicture;
        this.coverPhoto = coverPhoto;
        this.updateInfo = updateInfo;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.work = work;
        this.education = education;
        this.contactInfo = contactInfo;
        this.place = place;
        this.relationshipStatus = relationshipStatus;
        this.games = games;
        this.music = music;
        this.movies = movies;
        this.tvShows = tvShows;
        this.likedPages = likedPages;
    }
    return FaceBook;
}());
var storeFacebookdata = new FaceBook("Arbaz khan", new URL("https://www.facebook.com"), new URL("https://www.facebook.com/mycover-photo"), false, "04/05/1996", "Male", "inProcess", "engineering", ["Mobile", "9900000000", "Email", "arbazkhan@protonmail.com",], "bangalore", "single", ["God of War, counterstrike, NFS"], ["BollyWood", "hollywood"], ["Hangover", "Mission impossible", "fast and furious",], ["supernaurals"], ["web development", "BMW"]);
console.log("-------------------facebook profile-------------------");
console.log("Name : " + storeFacebookdata.getUserName());
console.log("DOB : " + storeFacebookdata.getDateOfBirth());
console.log("gender : " + storeFacebookdata.getGender());
console.log("work : " + storeFacebookdata.getWork());
console.log("education : " + storeFacebookdata.getEducation());
console.log("relationship : " + storeFacebookdata.getRelationshipStatus());
console.log("games : " + storeFacebookdata.getgames());
console.log("movies : " + storeFacebookdata.getMovies());
console.log("------------------pushing new data-----------------");
//current tv shows 
console.log("current tv shows  : " + storeFacebookdata.getTvShows());
// after updating setter 
storeFacebookdata.setTvShows("Ted talks");
console.log("updated tv shows : " + storeFacebookdata.getTvShows());
