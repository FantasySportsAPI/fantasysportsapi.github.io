$(document).ready(function(){
    $("#genToken").click(function(){
		function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
		}
		var tokenText = s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
        $("#token").text(tokenText);
	
			$.ajax({
                url: "../token/store_token.php",
                type: "POST",
                data: {
                    token:tokenText
                },
                cache: false
            })
	});
});