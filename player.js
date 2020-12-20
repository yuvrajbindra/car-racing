class Player {
    constructor() {
        this.index = null 
        this.name = null 
        this.distance = 0 
        this.rank = null
    }
    
    //reads the playerCount value from the database
    getCount() {
        database.ref("playerCount").on("value",function(data){
            playerCount = data.val()
        })
    }

    //writing the playerCount value to the database
    updateCount (count) {
        database.ref("/").update({
            playerCount: count
        })
    }
    
    //writing the player name and distance to the database
    updateInfo () {
        database.ref("players/player" + this.index).set({
            name: this.name,
            distance:this.distance 
        })
    }

    //shortform of function is =>
    //static means it is not associated to one single player
    // read all the players info 
    static getPlayersInfo() {
        database.ref("players").on("value",(data)=>{
            players = data.val()
        })
    }

    getCarsAtEnd() {
        database.ref("carsAtEnd").on("value",(data)=>{
            this.rank = data.val()
        })
    }

    
    static updateCarsAtEnd (rank) {
        database.ref("/").update({
            carsAtEnd: rank
        })
    }
}
