/**
 * Create by zhangjiawei on 2018/2/17.
 */
export class DataStore {

    constructor() {
        this.map = new Map();
    }

    // 单例模式
    static getInstance() {
        if(!DataStore.instance) {
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }

    put(key, value) {
        if(typeof value === 'function') {
            value = new value();
        }
        this.map.set(key, value);
        return this;
    }

    get(key) {
        return this.map.get(key);
    }

    destory() {
        for(let value of this.map.values()) {
            value = null;
        }
    }
}
