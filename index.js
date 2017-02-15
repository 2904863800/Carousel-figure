//jQuery 出让 $ 符号的使用权（也就是说，从这里开始 $ 将不是 jQuery，只能用变量 jQuery）
jQuery.noConflict();

//zySlide（）只要轮播图的根标签（任何选择器都行）
jQuery('.zy-slide').zySlide();
//jQuery('#slide').zySlide();