async function get() {
	var response = await fetch("https://www.breakingbadapi.com/api/characters")
	var data = await response.json()
		data.map(function(actor){
	const testOne = document.getElementById("content")               //${actor.name}
	testOne.innerHTML +=  `                   
<div onclick="" class="character" id="character">
<h4>
 الاسم : ${actor.name}
<br>
 تاريخ الميلاد : ${actor.birthday}
<br>              
الاشغال : ${actor.occupation}
<br>

الحالة : ${actor.status} 
<br>

  الاسم المستعار : ${actor.nickname}
 <br>

 التصنيف : ${actor.category}

</h4>	
<img id="pictures" src="${actor.img}">
</div>
`

})
		
	function info() {
	alert("hi")
}
	
}
get()