class Game {
    constructor() {}
    
    //reads the gameState value from the database
    getState() {
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
    }

    //writing the gameState value to the database
    updateState (state) {
        database.ref("/").update({
            gameState: state
        })
    }

    //start screen
    async start(){
        if(gameState===0){
        player = new Player()
        var playerCountRef = await database.ref("playerCount").once("value")
        if(playerCountRef.exists()) {
            playerCount = playerCountRef.val()
            player.getCount()
        }
        form = new Form()
        form.display()
    }
    car1 = createSprite(100,200)
    car2 = createSprite(300,200)
    car3 = createSprite(500,200)
    car4 = createSprite(700,200)
    car1.addImage (car1Img)
    car2.addImage (car2Img)
    car3.addImage (car3Img)
    car4.addImage (car4Img)
    cars = [car1,car2,car3,car4]
}
    play(){
        form.hide()
 Player.getPlayersInfo()
player.getCarsAtEnd()
 if(players!==undefined) {
     background("yellow") 
     image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
    var index = 0
    var x = 175
    var y
    //connecting players to their particular cars
    for(var i in players) {
        index += 1
        x += 200
        y = displayHeight - players[i].distance
        cars[index-1].x = x
        cars[index-1].y = y
        if(index===player.index) {
        fill("yellow")
        ellipse(x,y,60)
        camera.position.x = displayWidth/2
        camera.position.y = cars[index-1].y
        }
    }
 }
 //!== means not equal too
 if(keyDown("up")&&player.index!==null) {
     player.distance += 10
     player.updateInfo()
 }
 if(player.distance>3860) {
     gameState = 2
     player.rank++
     Player.updateCarsAtEnd(player.rank)
 }
 drawSprites();
    }

    end() {
        console.log("game over")
        console.log(player.rank)
    }
}
