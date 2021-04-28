# cli3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 与vue-cli 2的区别
* vue-cli 3基于webpack 4打造,vue-cli 2基于webpack 3打造
* vue-cli 3的设计原则是“0配置”,移除了配置文件根目录下的build和config等目录
* vue-cli 提供了vue ui命令,提供了可视化配置
* 移除了static文件夹,新增了public文件夹,并且index.html移动到public中