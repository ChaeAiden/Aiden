function plusFunction() {
			var firstVariable = document.querySelector('#first').value
			var numberFirstVariable = Number(firstVariable)
			
			var secondVariable = document.querySelector('#second').value
			var numberSecondVariable = Number(secondVariable) 
			
			
			
			if(isNaN(numberFirstVariable) || isNaN(numberSecondVariable)) {
				alert("Type numbers!!")
				document.getElementById("answer").innerHTML = "Please type correctly"
			} else {
				var answer = numberFirstVariable+numberSecondVariable
				document.getElementById("answer").innerHTML = answer				
			} 

		}
		function minusFunction() {
			var firstVariable = document.querySelector('#first').value
			var numberFirstVariable = Number(firstVariable)
			
			var secondVariable = document.querySelector('#second').value
			var numberSecondVariable = Number(secondVariable) 
			
			
			if(isNaN(numberFirstVariable) || isNaN(numberSecondVariable)) {
				alert("Type numbers!!")
				document.getElementById("answer").innerHTML = "Please type correctly"
			} else {ß
				var answer = numberFirstVariable-numberSecondVariable
			
				document.getElementById("answer").innerHTML = answer				
			}
		} 
		function timesFunction() {
			var firstVariable = document.querySelector('#first').value
			var numberFirstVariable = Number(firstVariable)
			
			var secondVariable = document.querySelector('#second').value
			var numberSecondVariable = Number(secondVariable) 
			
			
			if(isNaN(numberFirstVariable) || isNaN(numberSecondVariable)) {
				alert("Type numbers!!")
				document.getElementById("answer").innerHTML = "Please type correctly"
			} else {
				var answer = numberFirstVariable*numberSecondVariable
			
				document.getElementById("answer").innerHTML = answer				
			}
		} 
		function divisionFunction() {
			var firstVariable = document.querySelector('#first').value
			var numberFirstVariable = Number(firstVariable)
			
			var secondVariable = document.querySelector('#second').value
			var numberSecondVariable = Number(secondVariable) 
			
			
			if(isNaN(numberFirstVariable) || isNaN(numberSecondVariable)) {
				alert("Type numbers!!")
				document.getElementById("answer").innerHTML = "Please type correctly"
			} else {
				var answer = numberFirstVariable/numberSecondVariable
			
				document.getElementById("answer").innerHTML = answer				
			}
		} 