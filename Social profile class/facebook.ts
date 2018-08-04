
class FaceBook{     //creating a class

   constructor(
        private userName:String, private profilePicture: URL, private coverPhoto: URL, private updateInfo: boolean,
        private dateOfBirth:String, private gender: String, private work:String, private education:String,
        private contactInfo:String[], private place:String, private relationshipStatus:String, private games:String[],
        private music:String[], private movies:String[], private tvShows:String[], private likedPages:String[]
               )

    {
        this.userName = userName
        this.profilePicture = profilePicture
        this.coverPhoto = coverPhoto
        this.updateInfo= updateInfo
        this.dateOfBirth = dateOfBirth
        this.gender = gender
        this.work = work
        this.education = education
        this.contactInfo = contactInfo
        this.place = place
        this.relationshipStatus = relationshipStatus
        this.games = games
        this.music = music
        this.movies = movies
        this.tvShows = tvShows
        this.likedPages = likedPages
    }
                                       // All possible methods
    getUserName =()=>{
        return this.userName
    }

    getProfilePicture =()=>{
        return this.profilePicture
    }

    getCoverPhoto =()=>{
        return this.coverPhoto
    }

    getupdateInfo =()=>{
        return this.updateInfo
    }

    getDateOfBirth =()=>{
        return this.dateOfBirth
    }

    getGender =()=>{
        return this.gender
    }

    getWork =()=>{
        return this.work
    }

    getEducation =()=>{
        return this.education
    }

    getContactInfo =()=>{
        return this.contactInfo
    }

    getplace =()=>{
        return this.place
    }

    getRelationshipStatus =()=>{
        return this.relationshipStatus
    }

    getgames =()=>{
        return this.games
    }

    getMusic =()=>{
        return this.music
    }

    getMovies =()=>{
        return this.movies
    }

    getTvShows =()=>{
        return this.tvShows
    }

    setTvShows =(addMoreShows:string)=>{
        let newobj = (this.tvShows).push(addMoreShows)
    }

    getLikedPges =()=>{
        return this.likedPages
    }
}

let storeFacebookdata = new FaceBook("Arbaz khan",new URL(`https://www.facebook.com`),new URL(`https://www.facebook.com/mycover-photo`),
                            false,"04/05/1996", "Male","inProcess","engineering",["Mobile","9900000000","Email","arbazkhan@protonmail.com",],"bangalore","single",
                               ["God of War, counterstrike, NFS"],["BollyWood","hollywood"],["Hangover","Mission impossible","fast and furious",],["supernaurals"], ["web development","BMW"])

console.log("-------------------facebook profile-------------------")
console.log(`Name : ${storeFacebookdata.getUserName()}`)
console.log(`DOB : ${storeFacebookdata.getDateOfBirth()}`)
console.log(`gender : ${storeFacebookdata.getGender()}`)
console.log(`work : ${storeFacebookdata.getWork()}`)
console.log(`education : ${storeFacebookdata.getEducation()}`)
console.log(`relationship : ${storeFacebookdata.getRelationshipStatus()}`)
console.log(`games : ${storeFacebookdata.getgames()}`)
console.log(`movies : ${storeFacebookdata.getMovies()}`)

console.log("------------------pushing new data-----------------")

//current tv shows 
console.log(`current tv shows  : ${storeFacebookdata.getTvShows()}`)

// after updating setter 
storeFacebookdata.setTvShows("Ted talks");
console.log(`updated tv shows : ${storeFacebookdata.getTvShows()}`)
