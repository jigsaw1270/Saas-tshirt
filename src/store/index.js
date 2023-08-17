import {proxy} from 'valtio';

const state = proxy({
    intro : true ,
    color :  '#5d30bf',
    isLogoTexture: true ,
    isFullTexture: false,
    logoDecal: './react.png',
    fullDecal: './threejs.png',

});

export default state ;