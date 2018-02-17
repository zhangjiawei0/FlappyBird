/**
 * Create by zhangjiawei on 2018/2/17.
 */
import {Sprite} from '../base/Sprite.js';
import {Director} from '../Director.js';

export class Land extends Sprite {
    constructor() {
        const image = Sprite.getImage('land');
        super(image,
            0, 0,
            image.width, image.height,
            0, window.innerHeight - image.height,
            image.width, image.height);
        this.director = Director.getInstance();
        // 地板的水平变化坐标
        this.landX = 0;
        // 地板的移动速度
        //this.landSpreed = this.director.moveSpeed;
    }

    draw() {
        // this.landX += this.landSpreed;
        // if(this.landX > this.img.width - window.innerWidth) this.landX = 0;
        this.landX = this.landX > this.img.width - window.innerWidth ? 0 : this.landX + this.director.moveSpeed;
        super.draw(this.img,
            this.srcX,
            this.srcY,
            this.srcW,
            this.srcH,
            -this.landX,
            this.y,
            this.width,
            this.height);
    }
}
