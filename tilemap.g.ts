// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "hub":
            case "level1":return tiles.createTilemap(hex`0b000b0015141414141414141414161106050c050105050c0713110b101010101010100d13110b100e0e0e0e0e100d13110b100e0e0e0e0e100d1311021b0e0e0f0e0e190313110b100e0e0e0e0e100d13110b100e0e0e0e0e100d13110b1010101a1010100d1311080a0a0a040a0a0a09131812121212121212121217`, img`
. . . . . 2 . . . . . 
. 2 2 2 2 . 2 2 2 2 . 
. 2 . . . . . . . 2 . 
. 2 . . . . . . . 2 . 
. 2 . . . . . . . 2 . 
2 . . . . . . . . . 2 
. 2 . . . . . . . 2 . 
. 2 . . . . . . . 2 . 
. 2 . . . . . . . 2 . 
. 2 2 2 2 . 2 2 2 2 . 
. . . . . 2 . . . . . 
`, [myTiles.transparency16,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenWest,sprites.dungeon.doorOpenEast,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenOuterNorth0,myTiles.tile1,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.greenOuterNorth1,myTiles.tile10,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLight0,myTiles.tile12,myTiles.tile13,myTiles.tile14,sprites.dungeon.greenOuterSouth0,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,sprites.castle.rock0,sprites.castle.saplingOak,sprites.swamp.swampTile3], TileScale.Sixteen);
            case "sword room":
            case "level2":return tiles.createTilemap(hex`0b000b000000000109150a02000000000000050b120e08000000000000050f161007000000000000050f131008000000000000050f161008000000000000050f161007000000000000050f161008000000000000170f161008000000000000050f161008000000000000050c110d080000000000000406140603000000`, img`
. . . 2 2 2 2 2 . . . 
. . . 2 . . . 2 . . . 
. . . 2 . . . 2 . . . 
. . . 2 . . . 2 . . . 
. . . 2 . . . 2 . . . 
. . . 2 . . . 2 . . . 
. . . 2 . . . 2 . . . 
. . . 2 . . . 2 . . . 
. . . 2 . . . 2 . . . 
. . . 2 . . . 2 . . . 
. . . 2 2 2 2 2 . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.dungeon.chestClosed,sprites.dungeon.doorClosedSouth,sprites.dungeon.doorClosedNorth,sprites.castle.tilePath5,sprites.dungeon.greenOuterWest1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "shadow-plant 1":
            case "tile1":return tile1;
            case "fire torch":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile":
            case "tile11":return tile11;
            case "myTile0":
            case "tile12":return tile12;
            case "myTile9":
            case "tile13":return tile13;
            case "myTile10":
            case "tile14":return tile14;
            case "myTile11":
            case "tile15":return tile15;
            case "myTile12":
            case "tile16":return tile16;
            case "myTile13":
            case "tile17":return tile17;
            case "myTile14":
            case "tile18":return tile18;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
