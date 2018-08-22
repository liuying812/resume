window.addEventListener('scroll', function(x){
    /*知道用户滚动页面*/
		if(window.scrollY > 0){//滚动高度
			topNavBar.classList.add('sticky')
		}else{
			topNavBar.classList.remove('sticky')
		}
})
