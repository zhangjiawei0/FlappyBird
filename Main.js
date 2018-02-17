/**
 * Create by zhangjiawei on 2018/2/17.
 */
import {ResourceLoader} from './js/base/ResourceLoader.js';
import {Director} from './js/Director.js';
import {BackGround} from './js/runtime/BackGround.js';
import {Land} from './js/runtime/Land.js';
import {DataStore} from './js/base/DataStore.js';

// 初始化整个游戏的精灵，作为游戏开始的入口
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
