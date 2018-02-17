## FlyBird

## 源码目录介绍
```
./js
├── base
│   ├── DataStore.js                       // 变量缓存器，方便在不同类中访问和修改变量
│   ├── ResourceLoader.js                  // 资源文件加载器，确保canvas在图片资源加载完成后才进行渲染
│   ├── Resources.js                       // 资源文件
│   └── Sprite.js                          // 精灵的基类，负责初始化精灵加载的资源、大小和位置
├── player
│   ├── Birds.js                           // 小鸟类
│   ├── Score.js                           // 计分器类
│   └── StartButton.js                     // 开始按钮类
├── runtime
│   ├── BackGround.js                      // 背景类
│   ├── DownPencil.js                      // 下半部分铅笔
│   ├── Land.js                            // 不断移动的陆地
│   └── UpPencil.js                        // 上半部分铅笔
├── Director.js                            // 导演类，控制游戏的逻辑
└── Main.js                                // 游戏开始的入口，初始化整个游戏的精灵

```
