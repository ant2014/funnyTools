/*
* tableUI 0.1
* Copyright(c) 2015 wubo http://www.coolwubo.com
* Date:2015-06-01
* 本tableUI插件主要功能是装饰表格，例如，表格奇偶行颜色交替，当鼠标移动到上面的时候，高亮当前行
*/

(function($){ 
	$.fn.tableUI = function(options){ 
		//各种属性、参数
		var defaults = {
			evenRowClass:"evenRow",
			oddRowClass: "oddRow",
			activeRowClass: "activeRow"
		}
	
		var options = $.extend(defaults, options); 
		this.each(function(){ 
			//插件实现代码 
			var thisTable = $(this);
			$(thisTable).find("tr:even").addClass(options.evenRowClass);
			$(thisTable).find("tr:odd").addClass(options.oddRowClass);
			$(thisTable).find("tr").bind("mouseover", function(){
				$(this).addClass(options.activeRowClass);
			})
			$(thisTable).find("tr").bind("mouseout", function(){
				$(this).removeClass(options.activeRowClass);
			})
		}); 
	} 
})(jQuery); 