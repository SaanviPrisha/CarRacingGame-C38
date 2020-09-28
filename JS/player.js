class Player {
    constructor() {
        this.name = null;
        this.distance = 0;
        this.index = 0;
    }
    //Gets the number of players
    getCount() {
        var countRef = database.ref("playerCount")
        countRef.on("value", function(data) {
            playerCount = data.val()
        })
    }
    //updates the number of the player count
    updateCount(count) {
        database.ref("/").update({
            playerCount: count
        })
    }
    //updates the name
    update() {
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }
    static getPlayerInfo() {
        database.ref("players").on("value", (data)=> {
            allPlayers = data.val(); 
        })
    }
} 