async function get() {
	var response = await fetch("https://www.breakingbadapi.com/api/characters")
	var data = await response.json()
		data.map(function(actor){
	const testOne = document.getElementById("content")               //${actor.name}
	testOne.innerHTML +=  `                   

<div onclick="" class="character" id="character">
<h4>
<span class="border">
Name: ${actor.name}
</span><br>
<span class="border">
Birthday: ${actor.birthday}
</span><br>
<span class="border">
Occupation: ${actor.occupation}
</span>  <br>
<span class="border">
Status: ${actor.status} 
</span> <br>
<span class="border">
Nickname: ${actor.nickname} 
</span> <br>
<span class="border">
Category: ${actor.category}
</span>
</h4>	
<img id="pictures" src="${actor.img}">
</div>
`

})
		
	function info() {
	alert("hi")
}
	
/*
<div id="centered" class="centered">
Birthday: ${actor.birthday}
<br>
Occupation: ${actor.occupation}
<br>
Status: ${actor.status}     
<br>
Nickname: ${actor.nickname}
<br>
Portrayed: ${actor.portrayed}
<br>
Category: ${actor.category}
</div>
*/
let information  = document.getElementById("centered")

}
get()