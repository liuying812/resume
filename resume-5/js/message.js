var APP_ID = 'XWEBdhyrvMCdzbysPIOMFBSS-gzGzoHsz';
var APP_KEY = 'BEEXn9aJ00dvLKntppWHswME';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

let msgForm = document.querySelector('#msgForm')
msgForm.addEventListener('submit',function(e){
	e.preventDefault()  //组织默认刷新页面
	let content = msgForm.querySelector('input[name=msg]').value
	let name = msgForm.querySelector('input[name=name]').value
	
	
	if(name != '' && content != '') {
		var Msg = AV.Object.extend('Message')
		var msg = new Msg()
		msg.save({
			'name':name,
		  'content': content
		}).then(function(object) {
			//window.location.reload()
			let li = document.createElement('li')
			//li.innerText = item.content
			li.innerText = `${object.attributes.name} : ${object.attributes.content}`
			let msgList = document.querySelector('#msgList')
			msgList.appendChild(li)

		  alert('留言成功')
		  msgForm.querySelector('input[name=name]').value = ''
		  msgForm.querySelector('input[name=msg]').value = ''
		})
	}else if(name === ''){
	   alert('请填写您的名称~~~')
	}else if(content === ''){
	   alert('请输入您的留言~~~')
	}



})

var query = new AV.Query('Message')
query.find()	
	.then(function(msg){
		let array = msg.map((item) => item.attributes)
		array.forEach((item) => {
			let li = document.createElement('li')
			//li.innerText = item.content
			li.innerText = `${item.name} : ${item.content}`
			let msgList = document.querySelector('#msgList')
			msgList.appendChild(li)
		})
	})




/*//创建 TestObject 表
var TestObject = AV.Object.extend('TestObject');
//在表中创建一行数据
var testObject = new TestObject();
//数据内容是words：‘Hello World’
//如果保存成功则运行alert
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})*/