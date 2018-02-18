/**
 * Create by zhangjiawei on 2018/2/17.
 */
import {Sprite} from '../base/Sprite';
import {DataStore} from '../base/DataStore';

export class Pencil extends Sprite {
    constructor(image, top) {
        super(image,
            0, 0,
            image.width, image.height,
            DataStore.getInstance().canvas.width, 0,
            image.width, image.height);
        this.top = top;
        // 铅笔移动速度
        this.moveSpeed = 2;
    }

    draw() {
        this.x -= this.moveSpeed;
        super.draw(this.img,
            0, 0,
            this.width, this.height,
            this.x, this.y,
            this.width, this.height);
    }
}
