//% color="#AA0000" weight=100 icon="\uf0c8"
namespace horrorBlocks {

    /**
     * Places a scary block at a random empty tile on the tilemap.
     */
    //% block="place scary block"
    export function placeScaryBlock() {
        // Find random empty tile
        let x = Math.randomRange(0, tiles.tilemapColumns() - 1)
        let y = Math.randomRange(0, tiles.tilemapRows() - 1)
        // Place scary tile (tile id 5 assumed)
        tiles.setTileAt(tiles.getTileLocation(x, y), 5)
    }
}
