模块化

    - 在Node中，一个js文件就是一个模块
    - 在Node中，每一个js文件中的js代码都是独立运行在一个函数中
        而不是全局作用域，所以一个模块的中的变量和函数在其他模块中无法访问
 
 	在node中，通过require()函数来引入外部的模块
 		require()可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
 		这里路径，如果使用相对路径，必须以.或..开头
 
 	使用require()引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块
 
 	我们使用require()引入外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块
 	- 模块分成两大类
 		核心模块
 			- 由node引擎提供的模块
 			- 核心模块的标识就是，模块的名字
 		文件模块
 			- 由用户自己创建的模块
 			- 文件模块的标识就是文件的路径（绝对路径，相对路径）
 				相对路径使用.或..开头
 	
 	
	在node中有一个全局对象 global，它的作用和网页中window类似
		在全局中创建的变量都会作为global的属性保存
		在全局中创建的函数都会作为global的方法保存

	当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码
 			function (exports, require, module, __filename, __dirname) {

 	在代码的最底部，添加如下代码
 			}

 	实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递进了5个实参
		 exports
		 	- 该对象用来将变量或函数暴露到外部

		 require
		 	- 函数，用来引入外部的模块

		 module
		 	- module代表的是当前模块本身
		 	- exports就是module的属性
		 	- 既可以使用 exports 导出，也可以使用module.exports导出

		 __filename
 			C:\Users\lilichao\WebstormProjects\class0705\01.node\04.module.js
 			- 当前模块的完整路径

	  	 __dirname
 			C:\Users\lilichao\WebstormProjects\class0705\01.node
 			- 当前模块所在文件夹的完整路径			
 			
 			
###exports 和 module.exports
		- 通过exports只能使用.的方式来向外暴露内部变量
			exports.xxx = xxx

		- 而module.exports既可以通过.的形式，也可以直接赋值
			module.exports.xxx = xxxx
			module.exports = {}
			
	
###包
包就是一个压缩文件，解压以后还原为目录，符合规范的目录，应该包含以下：
* package.json	描述文件（一定有）
* bin 可执行的二进制文件
* lib js代码
* doc 文档
* test 测试

注:json文件中不能写注释

* npm install 初始化一个项目，创建一个package.json

- npm的命令
    - npm -v 查看npm的版本
    - npm version 查看所有模块的版本
    - npm search 包名 搜索包
    - npm install / i 包名 安装包
    - npm remove / r 包名 删除包
    - npm install 包名 --save 安装包并添加到依赖中 *****
    - npm install 下载当前项目所依赖的包
    - npm install 包名 -g 全局安装包（全局安装的包一般都是一些工具）
   
    
计算机一个0或1称为1位（bit）

- 8bit = 1byte(字节)
- 1024byte = 1kb
- 1024kb = 1mb
- 1024mb = 1gb
- 1024gb = 1tb

buffer中的一个元素占用内存中的一个字节

- 一个字母占用一个字节，一个汉字占用三个字节


