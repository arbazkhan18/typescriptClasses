
class youtubeVideo{                 //creating a class 


    constructor(protected channelName:String, protected videoName:String, private videoTime?:string, protected videoDate?:String,
                protected views?:Number, protected likes?:Number, protected dislikes?:Number,
                private comments?:Number,protected autoplay?:Boolean, private description?:String,
                protected subscribers?:Number,protected shares?:Number, public pinnedComment?:string)
    {
        this.channelName = channelName
        this.videoName = videoName
        this.videoTime = videoTime
        this.videoDate = videoDate
        this.views = views
        this.likes = likes
        this.dislikes = dislikes
        this.comments = comments
        this.autoplay = autoplay
        this.description = description
        this.subscribers = subscribers
        this.shares = shares
        this.pinnedComment= pinnedComment
        
    }
                                //all possible methods 
    getChannelName = () => {
        return this.channelName
    }

    getvideoName = () => {
        return this.videoName
    }

    getvideoTime = () =>{
        return this.videoTime
    }
     
    getvideoDate = () =>{
        return this.videoDate
    }

    getviews = () =>{
        return this.views
    }

    getlikes = () =>{
        return this.likes
    }

            setlikes = (totalLikes:Number)=>{
                this.likes = totalLikes
            }


    getdislikes = () =>{
        return this.dislikes
    }


                setdislikes = (totalDislikes:Number)=>{
                    this.dislikes = totalDislikes
                }


    getcomments = () =>{
        return this.comments
    }

    getautoplay = () =>{
        return this.autoplay
    }

    getDescirption = () =>{
        return this.description
    }

    getsubscribers = () =>{
        return this.subscribers
    }

    getpinnedComment = () =>{
        return this.pinnedComment
    }

    
    
    
  
    
}

//inheritence
class nextVideo extends youtubeVideo{
    
    constructor( protected channelName:String, protected videoName:String,public is_It_A_song:boolean, public isPlaying:Boolean,
                 public videoQuality:Number, public addToWatchlater:Boolean )
    {
        super(channelName,videoName);
        this.is_It_A_song = is_It_A_song
        this.isPlaying = isPlaying
        this.videoQuality = videoQuality
        this.addToWatchlater = addToWatchlater
        
    }

    getis_It_A_song = () =>{
        return this.is_It_A_song
    }

    getIsPlaying = () =>{
        return this.isPlaying
    }

    setIsPlaying = (playing:Boolean)=>{
        this.isPlaying = playing
    }
    
}

let storeData = new youtubeVideo('BB ki vines','angry masterji','9 minutes','04/05/2018',
            120000,75600,12000,52995,true,'Bubbly sir is furious',20000000,5000,'Keep Sharing, Keep Loving!');

let nextVideoObj = new nextVideo( storeData.getChannelName(),storeData.getvideoName(), false, false, 360, false )
//printing youtubeVideo object details 
//console.log(`Your Current Video details are : ${JSON.stringify(storeData)}`)

//printing Current Video object details 
//console.log(`Your Current Video details are : ${JSON.stringify(nextVideoObj)}`)
console.log("-------------------VIDEO  DETAILS-------------------")
console.log("channel name:  "+ storeData.getChannelName())
console.log("video name:  "+ storeData.getvideoName())
console.log("video date:  "+ storeData.getvideoDate())
console.log("total views:  "+ storeData.getviews())
console.log("total likes:  "+ storeData.getlikes())
console.log("total dislikes:  "+ storeData.getdislikes())
console.log("total comments: "+ storeData.getcomments())
console.log("description:  "+ storeData.getDescirption())
console.log(" pinned comment:  "+ storeData.getpinnedComment())

console.log("is the next video playing:  "+nextVideoObj.getIsPlaying())
console.log("is that a song:  "+nextVideoObj.getis_It_A_song())


//changing values Comments using setter
console.log("-------------changing the values using a setter-----------------")

storeData.setlikes(5000)
console.log(`Total Likes : ${storeData.getlikes()}`)


storeData.setdislikes(562)
console.log(`Total Dislikes : ${storeData.getdislikes()}`)


