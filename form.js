class Form {
    constructor() {
        this.title = createElement("h2") 
        this.input = createInput ("enter your name!")
        this.button = createButton ("start")
        this.greeting = createElement("h3") 
        this.reset = createButton ("reset")
    }
hide() {
    this.title.hide()
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
}
    
    display() {
    // createElement : it will create heading. size of the heading is h2
//.html : is used to give the content to the heading
this.title.html ("car racing")
this.title.position (displayWidth/2-50,0)
this.reset.position (displayWidth-100,20)
// createInput : creates place where the player can enter his details
this.input.position (displayWidth/2-40,displayHeight/2-80)
//createButton : it creates the button where in the player can click after entering the name
this.button.position(displayWidth/2+30,displayHeight/2)
this.button.mousePressed(()=>{
    this.button.hide()
    this.input.hide()
    player.name = this.input.value()
    playerCount+=1
    player.index = playerCount
    player.updateInfo(player.name)
    player.updateCount(playerCount)
//.html : is used to give the content to the heading
this.greeting.html ("hello "+player.name)
this.greeting.position (displayWidth/2-70,displayHeight/4)
})

this.reset.mousePressed(()=>{
player.updateCount(0)
game.updateState(0)
Player.updateCarsArEnd(0)
})
    } 
}
