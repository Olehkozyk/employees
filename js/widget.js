;(function() {
    "use strick";
    const listTmpl = document.querySelector('#list-tmpl').innerHTML;
    const listDiv = document.querySelector('#employeeList');
    const stat = document.querySelector('#ba-list-statis');
    const xhr = new XMLHttpRequest();
   
    

    xhr.open('GET', './data/employees.json');
    xhr.send();
    xhr.onload = function(){
        let obj
        
        obj = JSON.parse(this.response);

        listHTML = '';

        //check masiv
        obj.forEach(function(list) {
        //add who in    
            if(list.inoffice === true){
            listHTML += listTmpl.replace(/{{status}}/ig, "in")
            .replace(/{{name}}/ig, list.name)
            .replace(/{{class}}/ig, " ba-list-name-in");
        }
        //add who out
            else if(list.inoffice === false){
            listHTML += listTmpl.replace(/{{status}}/ig, "out")
            .replace(/{{name}}/ig, list.name)
            .replace(/{{class}}/ig, " ba-list-name-out");
            
        }
    });
        // add code to html        
        listDiv.innerHTML = listHTML; 

       
         
    }
    
    
    
    

})();