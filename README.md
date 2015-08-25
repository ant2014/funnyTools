# funnyTools
这是一个用CSS/JavaScript/jQuery实现的小玩意儿

###1、ToolTip
你可以[点击这里](http://www.coolwubo.com/funny/1ToolTip/index.html)来查看效果

ToolTipsTooltips也被称为屏幕提示，它是当鼠标悬停在一个图标、图片、超链接或其它元素上面的时候出现的一串提示信息。  
这是一个纯CSS实现的小例子。 


###2、jQuery.tableUI.js
这是一个特别简单的jQuery插件案例，本tableUI插件主要功能是装饰表格，例如，表格奇偶行颜色交替，当鼠标移动到上面的时候，高亮当前行。关于这个案例，你可以学到最简单的jQuery插件的写法。

关于jQuery插件开发的基础知识可以访问[jQuery插件开发入门](http://www.coolwubo.com/work/5546dec7d7610e9368714dda)

###3、使用原生JS实现焦点轮播图    
效果图可参见[点击这里](http://www.coolwubo.com/funny/2JSlunbo/index.html)

**布局上**，最外层的container设置600X400的合适的显示宽高，并设置overflow为hidden，position为relative为子元素的绝对定位打下基础。
第二层div#list的宽为所有子图片的宽的和，采用absolute定位，通过设置left为不断变小的负值，来实现页面向左移动的效果。
对于#list下面的所有img，设置其向左浮动，变成一行

JS上：  

**箭头切换**：每次点击next箭头，给原有left的偏移量-600；当其超过边界值时，再将偏移量赋给初始值。prev按钮，同理。

**无限滚动**：我们在最后一张图片之后插入第一张图片img1’，若在最后一张图片时，再次点击下一张，则此时显示的是后来插入的img1’，然后判断越界后迅速的切换到真正的第一张图片img1，看起来就像是连续的无间隙的切换了。

**按钮切换**：点击每张图片对应的小圆点实现切换  
通过算出当前页面的序号和目标页面的序号，来算出偏移量。然后进行切换。

**动画函数**：设置一个setTimeout()递归定时器，每隔一个10ms移动一个步长，若总移动距离没到，则继续移动，若到了，则不再移动

**自动播放**：  
setInterval()每隔3s去触发一次next.click();  
container.mouseover时clearInterval()  
container.mouseout时setInterval();  

###5、ScrollWidth.js
效果图可参见[点击这里](http://www.coolwubo.com/funny/3ScrollWidth/index.html)

核心代码：

    $(window).scroll(function(){
        var scrollTo = $(window).scrollTop(),
            docHeight = $(document).height(),
            windowHeight = $(window).height();
        scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
        scrollPercent = scrollPercent.toFixed(1);
        $('#showProgress').text(scrollPercent+"%");
        var scrollWidth = scrollPercent+"%";
        $('#scrollProgress').css("width",scrollWidth);
    }).trigger('scroll');


###6、LoadingWidth.js
效果图可参见[点击这里](http://www.coolwubo.com/funny/4LoadingWidth/index.html)

在前端，实现网页的进度条目前还没有一个比较精确的方案，都是一些模拟进度。即页面打开的时候是 1%，然后定时器增加进度到 99%，然后 window.onload 之后，进度跑到 100%。

使用随机函数生成随机的时间和随机的进度

        var random = function(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

### 7、RequireJs

1. <\script type="text/javascript" src="require.js" data-main="main"><\/script> 使用该句引入requireJs，data-main指定了main.js文件，作为入口文件，require.js加载完后，会立即调用的
2. main.js中定义了requirejs.config定义一些常用库的别名和baseUrl。还可以使用requirejs(['jquery','validate'], function ($,validate)){.....}来调用和使用模块
3. validate.js中使用define(['jquery'], function ($){return ...}定义了一个模块，可以在requirejs中调用

### 8、cssLunbo

1. 控制所有img，display:none; 让其脱离文档流，不占用位置。
2. 为checkbox或者radio加上label，让对label中文字的点击也同时对checkbox/radio生效，使用for关联相应id
3. input:checked + img {display: block;} 使被选中的radio紧跟的img显示出来
