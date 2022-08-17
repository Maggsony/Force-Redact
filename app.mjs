function startApp() {
    

   
  // REDACT BUTTON THAT GIVES OUTPUTS
    let redactNow = document.getElementById("redact-btn");
    redactNow.addEventListener('click', function(){    
   
  let string;
    let today = new Date()
    let timer = today.getMilliseconds() + "ms"
    let codedWord = document.getElementById("enterword").value;
    let message = document.getElementById("entermessage").value;
    let replaceWord = document.getElementById("replace").value;

   let re = new RegExp(`\\b${codedWord}\\b`, 'gimu');
    
    
    if(selectedOption.value == "asterisk"){
    string  =  message.replace(re, "*".repeat (codedWord.length));
    }
  else if(selectedOption.value == "characters"){
        string = message.replace(re, "$#?".repeat(codedWord.length));
    }
    else if (selectedOption.value == "replaceword"){
    string = message.replace(re, replaceWord);
    }
    document.getElementById("output").value = string;
    document.getElementById("scannedinput").value = string.split(/\s+/).length;
    document.getElementById("matchedinput").value = codedWord.split(/\s+/).length;
    document.getElementById("scrambledinput").value = codedWord.length
    document.getElementById("timer").value = timer
    
    });

  // GET OPTION VALUE
  let selectedOption = document.getElementById("selected");
  selectedOption.addEventListener('change', function(){
    console.log(selectedOption.value)
  })

  
// CLEAR FIELD BUTTON
   let clearField = document.getElementById("clear-btn");
    clearField.addEventListener('click', function(){
       document.getElementById("enterword").value = "" ;
       document.getElementById("entermessage").value = "";
       document.getElementById("replace").value = "" ;
       document.getElementById("output").value = "";
       document.getElementById("scannedinput").value = "";
       document.getElementById("matchedinput").value = "";
       document.getElementById("scrambledinput").value = "";
       document.getElementById("timer").value = "" ;
    });
  
// COPY TEXT BUTTON
  let  copyText = document.getElementById("copy-btn");
  copyText.addEventListener('click', function() {
    var copyOutput= document.getElementById("output").value;
    navigator.clipboard.writeText(copyOutput).then(() => {
    
        alert("Copied to clipboard");
    });
      });
  

  

    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!

  };

   
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //NowNow)        
 






