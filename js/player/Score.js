import {DataStore} from '../base/DataStore.js';

/**
 * Create by zhangjiawei on 2018/2/17.
 */
export class Score {

    constructor() {
        this.dataStore = DataStore.getInstance();
        this.ctx = this.dataStore.ctx;
        this.scoreNumber = 0;
        // 加分控制
        this.isScore = true;
    }

    draw() {
        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = '#ffcbeb';
        this.ctx.fillText(
            this.scoreNumber,
            window.innerWidth / 2,
            window.innerHeight / 18,
            1000
        );
    }
}
