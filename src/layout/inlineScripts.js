<script type="text/javascript">
  var host = "yoursite.com";
  if ((host == window.location.host) && (window.location.protocol != "https:"))
    window.location.protocol = "https";
</script>
<!--https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role-->
<script type="text/javascript">
	function handleBtnClick(event) {
		event = event || window.event;
		var pressed = event.target.getAttribute("aria-pressed") == "true";
		//change the aria-pressed value as the button is toggled:
		event.target.setAttribute("aria-pressed", pressed ? "false" : "true");
	}

	function handleBtnKeyUp(event) {
		event = event || window.event;
		if (event.keyCode === 32) { // check for Space key
			handleBtnClick(event);
		}
	}
</script>
