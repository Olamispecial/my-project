let form = document.querySelector('form');
let input = document.querySelector('#name');
let message = document.querySelector('#error-message');

form.addEventListener('submit',function (event) {
	event.preventDefault();


	let name = input.value;

	if(name.length === 0){
		message.innerText = "Please enter a name";
		message.style.color = "red";
				
	}else if (name.length < 5){
		message.textContent = "Name must be at least 5 characters";
		message.style.color = "red";
		
	}else {
		form.submit();
	}

		
});