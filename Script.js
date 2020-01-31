//generate random password
//password which will be sent with the user selects generate
let password = "";
let passwordCharSet= "";

function generate(){
 
     // password values
    // let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890()<>!.,/?#~@";
     let numbers = "1234567890";
     let specialChar = "()<>!.,/?#~@";
     let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     let lower = "abcdefghijklmnopqrstuvwxyz1234567890";
     
     
  // add password to text box
  

    

  alert ('Please click okay to generate a password');
  passwordPrompt = prompt("How many characters would you like to be included in your string?");

  if (Number(passwordPrompt) < 8 || Number(passwordPrompt) > 126 ){
      alert ('password must be between 8 and 126 characters!')
     
      return;

  }
 
   if(passwordPrompt === "".trim){
       alert('Password must be between 8 and 126 characters!');
   } 
  
     const upperInput = confirm('would you like to include uppercase?');
     if (upperInput) {
          passwordCharSet += upper;
      }


      const numberInput =   confirm ('would you like to include numbers?')
  if (passwordPrompt === numbers)  {
             
               passwordCharSet += number;
   }
            if (password = specialChar)  {
              alert ('would you like to include specialcase?');
                passwordCharSet += specialChar;
                      }

 

 

      for(let i = 1; i<=Number(passwordPrompt); i++ ){

          //setting password = whatever the length user sets.
  
          password = password + passwordCharSet.charAt(Math.floor(Math.random() * Math.floor(passwordCharSet.length - 1)));
      }
      document.getElementById("display").value = password;
        
      console.log(password)
  }

    
    
    // function to copy password to clipboard

    function copyPassword(){

        document.getElementById('display').select();

        document.execCommand("Copy");

        alert ("Password copied to clipboard")
    }