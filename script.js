//your JS code here. If required.
var counter = 0;

function increment() {
	const elm = document.getElementById("counter_val");
	alert(counter);
	counter++;
	elm.textContent = counter;
}