requirejs.config({
	//定义别名
	paths: {
		jquery: 'jquery-2.0.3'
	}
});

requirejs(['jquery', 'validate'], function ($, validate){
	console.log(validate.isEqual(1, 1));
});