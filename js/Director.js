/**
 * Create by zhangjiawei on 2018/2/17.
 */
import {DataStore} from './base/DataStore.js';
import {UpPencil} from './runtime/UpPencil.js';
import {DownPencil} from './runtime/DownPencil.js';

export class Director {

    constructor() {
        this.dataStore = DataStore.getInstance();
        // 移动速度
        this.moveSpeed = 2;
    }

    // 单例模式
    static getInstance() {
        if(!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }

    createPencil() {
        const minTop = window.innerHeight / 8;
        const maxTop = window.innerHeight / 2;
        const top = minTop + Math.random() * (maxTop - minTop);
        this.dataStore.get('pencils').push(new UpPencil(top));
        this.dataStore.get('pencils').push(new DownPencil(top));
    }

    run() {
        this.dataStore.get('background').draw();

        this.dataStore.get('pencils').map((value) => value.draw());

        this.dataStore.get('land').draw();

        let timer = requestAnimationFrame(() => this.run());
        this.dataStore.put('timer', timer);
        // cancelAnimationFrame(this.dataStore.get('timer'));
    }
}
