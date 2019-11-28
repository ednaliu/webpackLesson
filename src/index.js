// var dom = document.getElementById('root')

// js模块打包工具 --->css


// // 这是面向对象编程
// new Header();
// new Sidebar();
// new Content();

// 在index.html引入多个js会造成页面加载速度较慢
// 采用以下方式

// 
// Common JS
// var Header = require('./header')
// var Sidebar = require('./sidebar')
// var Content = require('./content')
// var avatar = require('./avatar.jpg')
// console.log(avatar)
// AMD
// CMD
// webpack 核心上是一个模块打包工具
// es Module 模块引入方式
// import Header from './header'
// import Sidebar from './sidebar'
// import Content from './content'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
import avatar from './avatar.jpg';
import style from  "./index.scss";//这样样式就不是全局样式了，仅对当前模块有效
import createAvator from './createAvatar'

createAvator()

var img = new Image()
img.src = avatar
img.classList.add(style.avatar)
var root = document.getElementById('root')
root.append(img)


// 这是面向对象编程
// new Header();
// new Sidebar();
// new Content();



