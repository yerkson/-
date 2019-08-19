块级格式化上下文(BFC: Block Formatting Contexts)
生成BFC
1. 根元素
2. 浮动（float不为none）
3. 定位（absolute或fixed）
4. overflow 且值不为visible
5. display:inline-block,table-cell,flex,inline-flex

margin叠加
属于同一个BFC的两个相邻box的块级元素（一定是垂直方向）

解决方法：开启一个BFC或者不让它们相邻
1. 设父元素height
2. 设父元素overflow:hidden(浮动元素参与计算BFC高度)

#两列布局（利用BFC）
1. 第一列：float:left;width:80px;height:80px;
2. 第二列：overflow：hidden;white-space:nowrap;text-overflow:ellipsis;display:block;

#清除浮动（清除其它浮动元素对当前元素的影响）
1. 给父级加高度（拓展性不好）
2. 通过开启BFC；overflow:hidden;position:absolute;float:left;
3. 父级加伪元素
 ```$xslt
/*开启haslayout*/
    .xfz{
         *zoom: 1;
    }
   			
    /*ie 6 7 不支持伪元素*/
    .xfz:after{
        content: "";
        display: block;
        clear: both;
    }
```

clear就是清除，both指的是左浮动、右浮动都要清除。clear:both的意思就是：不允许左侧和右侧有浮动对象。

这种方法有一个非常大的、致命的问题，它所在的标签，margin属性失效了。读者可以试试看。

margin失效的本质原因是：上图中的box1和box2，高度为零。
所以用内墻法

