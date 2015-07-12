# funnyTools
这是一个用CSS/JavaScript/jQuery实现的小玩意儿

1、ToolTipsTooltips也被称为屏幕提示，它是当鼠标悬停在一个图标、图片、超链接或其它元素上面的时候出现的一串提示信息。  
这是一个纯CSS实现的小例子。  
你可以[点击这里](http://www.coolwubo.com/funny/1ToolTip/index.html)来查看效果

2、这是一个特别简单的jQuery插件案例，本tableUI插件主要功能是装饰表格，例如，表格奇偶行颜色交替，当鼠标移动到上面的时候，高亮当前行，关于jQuery插件开发的基础知识可以访问[jQuery插件开发入门](http://www.coolwubo.com/work/5546dec7d7610e9368714dda)

3、用原生JS实现焦点轮播图
CSS:
#container 600x400,overflow:hidden;position:relative;
#list 4200*400,position:absolute;z-index:1
img float:left;

布局上，最外层的container设置600X400的合适的显示宽高，并设置overflow为hidden，position为relative为子元素的绝对定位打下基础。
第二层div#list的宽为所有子图片的宽的和，采用absolute定位，通过设置left为不断变小的负值，来实现页面向左移动的效果。
对于#list下面的所有img，设置其向左浮动，变成一行

JS上：
箭头切换：每次点击next箭头，给原有left的偏移量-600；当其超过边界值时，再将偏移量赋给初始值。prev按钮，同理。

无限滚动：我们在最后一张图片之后插入第一张图片img1’，若在最后一张图片时，再次点击下一张，则此时显示的是后来插入的img1’，然后判断越界后迅速的切换到真正的第一张图片img1，看起来就像是连续的无间隙的切换了。

按钮切换：点击每张图片对应的小圆点实现切换
通过算出当前页面的序号和目标页面的序号，来算出偏移量。然后进行切换。

动画函数：
设置一个setTimeout()递归定时器，每隔一个10ms移动一个步长，若总移动距离没到，则继续移动，若到了，则不再移动

自动播放：
setInterval()每隔3s去触发一次next.click();
container.mouseover时clearInterval()
container.mouseout时setInterval();
