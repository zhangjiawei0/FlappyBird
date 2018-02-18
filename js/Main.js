/**
 * Create by zhangjiawei on 2018/2/17.
 */
import {ResourceLoader} from './base/ResourceLoader';
import {Director} from './Director';
import {DataStore} from './base/DataStore';
import {BackGround} from './runtime/BackGround';
import {Land} from './runtime/Land';
import {Birds} from './player/Birds';
import {Score} from './player/Score';
import {StartButton} from './player/StartButton';

export class Main {

    constructor() {
        this.canvas = wx.createCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));
    }

    onResourceFirstLoaded(map) {
        this.dataStore.canvas = this.canvas;
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
        wx.onTouchStart(() => {
            if (this.director.isGameOver) {
                this.init();
            } else {
                this.director.birdsEvent();
            }
        })
    }
}
