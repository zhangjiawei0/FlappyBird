/**
 * Create by zhangjiawei on 2018/2/17.
 */
import {ResourceLoader} from './base/ResourceLoader.js';
import {Director} from './Director.js';
import {BackGround} from './runtime/BackGround.js';
import {Land} from './runtime/Land.js';
import {DataStore} from './base/DataStore.js';

export class Main {

    constructor(){
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));
    }

    onResourceFirstLoaded(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    init() {
        this.dataStore
            .put('background', BackGround)
            .put('land', Land);
        this.director.run();
    }
}
