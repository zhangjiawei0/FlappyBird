/**
 * Create by zhangjiawei on 2018/2/17.
 */
import {DataStore} from './base/DataStore.js';

export class Director {

    constructor() {
        this.dataStore = DataStore.getInstance();
    }

    // 单例模式
    static getInstance() {
        if(!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }

    run() {
        this.dataStore.get('background').draw();
        this.dataStore.get('land').draw();
        requestAnimationFrame(() => this.run());
    }
}
