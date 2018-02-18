/**
 * Create by zhangjiawei on 2018/2/17.
 */
import {Sprite} from '../base/Sprite.js';
import {Director} from '../Director.js';

export class Pencil extends Sprite {
    constructor(image, top) {
        super(image,
            0, 0,
            image.width, image.height,
            window.innerWidth, 0,
            image.width, image.height);
        this.top = top;
        this.director = Director.getInstance();
    }

    draw() {
        this.x -= this.director.moveSpeed;
        super.draw(this.img,
            0, 0,
            this.width, this.height,
            this.x, this.y,
            this.width, this.height);
    }
}
