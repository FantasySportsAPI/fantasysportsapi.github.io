$(document).ready(function(){
    $("#genToken").click(function(){
		
		var tokenText = "3a2993df-e8a2-11e5-9f31-0228a770e05b";
        $("#token").text(tokenText);
	
			/*$.ajax({
                url: "../token/store_token.php",
                type: "POST",
                data: {
                    token:tokenText
                },
                cache: false
            })*/
	});
});