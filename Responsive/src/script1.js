		function myFunction() {
			var x = document.getElementById("myNavBar");
			if (x.className === "NavBar") {
				x.className += " responsive";
			}
			else {
				x.className = "NavBar";
			}
		}