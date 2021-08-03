export class SceneMain extends Phaser.Scene {
    constructor() {
        super("SceneMain");
    }
    preload() {
      this.load.image("tiles","src/assets/tiles.png");
      
    }
    create() {         

    	//make a multi-dimensonial array
        const array=[[0,1,2,22],
                     [17,18,19],
                     [34,35,36]];

        //make the tile map           
        const map = this.make.tilemap({ data:array, tileWidth: 64, tileHeight: 64});

        //add the tileset to the map
        map.addTilesetImage("tiles");

        //add a layer to the map
        const layer = map.createLayer(0, "tiles", 0, 0);
    }
    update() {

    }
}
export default SceneMain;