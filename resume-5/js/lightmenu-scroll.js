	/*高亮当前模块菜单*/
/*使用一个立即执行函数，前面加上！取反这样不会产生全局变量，chrome也不会报错*/
!function (){
  // 添加 offset 类
  var specialTags = document.querySelectorAll('[data-x]')
  for(let i =0;i<specialTags.length; i++){
    specialTags[i].classList.add('offset')
  }
  findClosestAndRemoveOffset()
  window.addEventListener('scroll', function(x){
    findClosestAndRemoveOffset()
  })


  /* helper */
  function findClosestAndRemoveOffset(){
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for(let i =1;i<specialTags.length; i++){
      if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
        minIndex = i
      }
    }
    // minIndex 就是里窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#'+ id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for(let i=0; i<brothersAndMe.length; i++){
      brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }
  let liTags = document.querySelectorAll('nav.menu > ul > li')
  for(let i=0; i<liTags.length; i++){
    liTags[i].onmouseenter = function(x){
      x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function(x){
      x.currentTarget.classList.remove('active')
    }
  }
}.call()


/*window.addEventListener('scroll', function(x){
	
	let sTags = document.querySelectorAll('[data-x]')
		for(let i =0;i<sTags.length; i++){
		  sTags[i].classList.add('offset')
		}

		let minIndex = 0
		for(let i = 1; i < sTags.length; i++){
			if(Math.abs(sTags[i].offsetTop - window.scrollY) < Math.abs(sTags[minIndex].offsetTop - window.scrollY)){
				minIndex = i
			}
		}

		sTags[minIndex].classList.remove('offset')
		let tagId = sTags[minIndex].id
		let a = document.querySelector('a[href="#'+tagId+'"]')
		let li = a.parentNode
		let allTag = li.parentNode.children
		for(let i=0; i< allTag.length; i++){
			allTag[i].classList.remove('highlight')
		}
		li.classList.add('highlight')
 })
*/
