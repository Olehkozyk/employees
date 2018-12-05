;(function() {
    "use strick";
    const listTmpl = document.querySelector('#list-tmpl').innerHTML;
    const listDiv = document.querySelector('#employeeList');
    const stat = document.querySelector('#ba-list-statis');
    const xhr = new XMLHttpRequest();
   
    

    xhr.open('GET', './data/employees.json');
    xhr.send();
    xhr.onload = function(){
        let masiv
        
        masiv = JSON.parse(this.response);

        listHTML = '';

        //check masiv
        masiv.forEach(function(list) {
        //add who in    
            if(list.inoffice === true){
            listHTML += listTmpl.replace(/{{status}}/ig, "in")
            .replace(/{{name}}/ig, list.name);
        }
        //add who out
            else if(list.inoffice === false){
            listHTML += listTmpl.replace(/{{status}}/ig, "out")
            .replace(/{{name}}/ig, list.name);
            
        }
    });
        // add code to html        
        listDiv.innerHTML = listHTML; 

       
         
    }
    
    
    
    

})();