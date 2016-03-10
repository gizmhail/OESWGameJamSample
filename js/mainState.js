var mainState = function(){
    this.sampleKey =  null;
    this.sampleKey2 =  null;
    this.sampleSprite = null;
};

mainState.prototype = { 
    // Assets loading - do not use asssets here
    preload: function () {
        oeswGame.load.image('duck', 'assets/duck.png');
    },

    // Called after preload - create sprites,... using assets here is ok
    create: function () {
        oeswGame.stage.backgroundColor = "#ff6600";
        // Add a sprite at 100 x, 50 y (0,0 is the top left corner)
        this.sampleSprite = oeswGame.add.sprite(100, 50, "duck");
        // Add observer on keys
        this.sampleKey = oeswGame.input.keyboard.addKey(Phaser.Keyboard.T);
        this.sampleKey2 = oeswGame.input.keyboard.addKey(Phaser.Keyboard.M);

    },

    // Called for each refresh
    update: function (){
        if(this.sampleKey.isDown){
            // "Manually" moves a sprite. You can also use tweens, or a physics engine, to do it automatically
            this.sampleSprite.x = Math.min(this.sampleSprite.x + 1, 700);
        }
        if(this.sampleKey2.isDown){
            // Ask Phaser engine to change a sprite properties - coordinates here - progressively
            oeswGame.add.tween(this.sampleSprite).to( { x:Math.random()*700, y: Math.random()*500 }, 2000).start();
        }
    },

    // Called after the renderer rendered - usefull for debug rendering mainly
    render: function  () {
     
    },
};
