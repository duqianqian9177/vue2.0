const express = require('express')   //express 是node的服务端框架
const app = express()    

var list = require('./public/scriptList.json') //本地json文件数据

var apiRoutes = express.Router();   //   express.Router() 路由使用

app.use('/api',apiRoutes)        //把【/api】的方法赋值给apiRoutes

module.exports = {
	devServer:{    //nodeJS的本地服务器
			before(app) {    //  before(形参)  形参的值为 express服务框架所赋值的变量   
				app.get('/api/list', (req, res) => {  //把【/api】的方法赋值给apiRoutes
				res.json({    //发送一个json的响应。这个方法和将一个对象或者一个数组作为参数传递给res.send()方法的效果相同。
				errno: 0, 
				data: list// 这里是你的json内容
			})
		})
	},
		host: '0.0.0.0',
		port: 9000,
		https: false,
		hotOnly: false,
		proxy: {
			"/rest/*": {
				target: "http://172.16.1.12:7071",
				changeOrigin: true,
				// ws: true,//websocket支持
				secure: false
			 },
			 "/pbsevice/*": {
				target: "http://172.16.1.12:2018",
				changeOrigin: true,
				//ws: true,//websocket支持
				secure: false
			 },
		
		}
		
	},
}