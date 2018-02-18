/**
 * Create by zhangjiawei on 2018/2/17.
 */
import {ResourceLoader} from './base/ResourceLoader.js';
import {Director} from './Director.js';
import {DataStore} from './base/DataStore.js';
import {BackGround} from './runtime/BackGround.js';
import {Land} from './runtime/Land.js';
import {Birds} from './player/Birds.js';
import {Score} from './player/Score.js';
import {StartButton} from './player/StartButton.js';

export class Main {

    constructor() {
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
        this.director.isGameOver = false;
        this.dataStore
            .put('pencils', [])
            .put('background', BackGround)
            .put('land', Land)
            .put('birds', Birds)
            .put('score', Score)
            .put('startButton', StartButton);
        this.registerEvent();
        // 创建铅笔要在游戏逻辑运行之前
        this.director.createPencil();
        this.director.run();
    }

    registerEvent() {
        this.canvas.addEventListener('touchstart', e => {
            e.preventDefault();
            if (this.director.isGameOver) {
                console.log('游戏开始');
                this.init();
            } else {
                this.director.birdsEvent();
            }
        })
    }
}
