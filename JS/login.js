
var dbArray =["Aiden", "Jeff", "Dad", "Mom", "Sister"]
var passwordArray =["aaa", "bbb", "ccc", "ddd","eee"]
var trigger = 0 

while(true){


	if(trigger ==1){
		break
	}

	var userId = prompt("What is your Id?")
	console.log(dbArray.indexOf(userId))
	if(dbArray.includes(userId)){
		alert("Welcome "+userId)
		var userIdIndex =dbArray.indexOf(userId)
		
		while(true) {
			var password =  prompt("What is your Password?")
	
			var userPassIndex = passwordArray.indexOf(password)
			if (userIdIndex == userPassIndex){
				alert("You are logged in!")
				trigger = 1
				break;

			} else {
				alert("You're Password doesn't match")
			}
		}

	} else {
		alert("Please type Id correctly ")
	}	


}