# Vue Demo Introduction

#### How to build a Vue project?
You can do it :`vue init webpack projectName `

Run this demo project : `npm start` 

#### IDE Introduction 
* IDE:VScode
* Plug-ins
    * Vetur**(must)**
    * EsLint**(must)**
    * Auto Close Tag
    * JavaScript(ES6) code snippets
    * Auto Rename Tag
    * prettier-Code formatter**(must)
    
Solve format error problem.

To User Settings.
@Link:https://blog.csdn.net/SilenceJude/article/details/81589784
```
{
  "workbench.editor.enablePreview": false, //打开文件不覆盖
  "search.followSymlinks": false, //关闭rg.exe进程
  "editor.minimap.enabled": false, //关闭快速预览
  "files.autoSave": "afterDelay", //打开自动保存
  "editor.lineNumbers": "on", //开启行数提示
  "editor.quickSuggestions": {
    //开启自动显示建议
    "other": true,
    "comments": true,
    "strings": true
  },
  "editor.tabSize": 2, //制表符符号eslint
  "editor.formatOnSave": true, //每次保存自动格式化
  "eslint.autoFixOnSave": true, // 每次保存的时候将代码按eslint格式进行修复
  "prettier.eslintIntegration": true, //让prettier使用eslint的代码格式进行校验
  "prettier.semi": false, //去掉代码结尾的分号
  "prettier.singleQuote": true, //使用带引号替代双引号
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true, //让函数(名)和后面的括号之间加个空格
  "vetur.format.defaultFormatter.html": "js-beautify-html", //格式化.vue中html
  "vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned" //属性强制折行对齐
    }
  },
  "eslint.validate": [
    //开启对.vue文件中错误的检查
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}

```

  
#### Need to add dependencies

+ **Add bootstrap (Base on jquery)** @Link:https://blog.csdn.net/qq_38945126/article/details/81510656
    * `cnpm install --save-dev jquery` 
    * `cnpm install --save-dev bootstrap3`
    * Open the **_webpack.base.conf.js_** file
       *  Add `var webpack = require('webpack')` 
       *  Find _main.js_ file and add `import 'bootstrap3/dist/css/bootstrap.css'` and `import 'bootstrap3/dist/js/bootstrap.js'`
       *  Find _module.exports={}_ and insert 
```
plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ]
```

+ **Support SCSS**
    * cnpm install node-sass --save-dev
    * cnpm install sass-loader --save-dev
    * find build/webpack.base.config.js and insert 
```
module: {
    rules: [
      {
         test: /\.scss$/,
         loader: ['style', 'css', 'sass']
      }
    ]
}
```
   
    