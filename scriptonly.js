    //window.onload = function(){
        // ALL OF YOUR JAVASCRIPT CODE SHOULD GO HERE. 
        // We have to use window.onload so your JavaScript doesn't execute until the page has loaded and all HTML has been downloaded to your browser
        console.log("test");
        function loadMail(messages){
        	for(var i=0; i<messages.length; i++){
        		console.log(messages[i].subject); 
        		console.log(messages[i].sender);
            	console.log(messages[i].body); 
                console.log(messages[i].date); 

				var dateDiv = document.createElement('div');
                dateDiv.className = "date";
                dateDiv.innerHTML = messages[i].date;
                container.appendChild(dateDiv);

            	var senderDiv = document.createElement('div');
            	senderDiv.className = "sender";
            	senderDiv.innerHTML = messages[i].sender;
            	container.appendChild(senderDiv);

            	var subjectDiv = document.createElement('div');
            	subjectDiv.className = "subject";
            	subjectDiv.innerHTML = messages[i].subject;
            	container.appendChild(subjectDiv);

                var bodyDiv = document.createElement('div');
                bodyDiv.className = "body";
                bodyDiv.innerHTML = messages[i].body;
                container.appendChild(bodyDiv);

        	}
        }

        //loadMail(geemails);
        	console.log(geemails);

        var bodyContent = document.getElementsByClassName('subject');
        for(var i = 0; i<bodyMessages.length; i++){
            bodyMessages[i].addEventListener('click',showMessage);
        }

        function showMessage(){
            var showBody = this.querySelectorAll('.body')[0];
            if(showBobdy.classList.contains('show')===false){
                return showBody.classList.add()('show');
            }
            else {
                return showBody.classList.remove('show');
            }
        
}      