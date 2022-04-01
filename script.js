function generatePassword(){
  //TODO: your code goes here
  var plength = window.prompt("Choose password length between 8-128 charcters")
    if (plength < 8 || plength > 128){
      window.alert("Password must be between 8-128 characters")
      return "Try again"
        }
  var lowerQuestion= window.confirm("Would you like lower case letters?")
  var upperQuestion= window.confirm("Would you like upper case letters?")
  var numQuestion= window.confirm("Would you like numbers?")
  var specQuestion= window.confirm("Would you like special characters?")


  //var lowletters = [abcdefghijklmnopqrstuvwxyz]
  //var upletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q", "R","S","T","U","V","W","X","Y","Z"]
 // var numbers = ["1","2","3","4","5","6","7","8","9","0"]
  //var special = ["!", "@","#","$","%","^","&","*","(",")"]
 // var allChar = lowletters.concat(upletters,numbers,special)
  //can condesne to one string
  //var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
  //document.querySelector(".btn")
 //can condesne to one const
 const pool = {
   lower:"abcdefghijklmnopqrstuvwxyz",
   upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
   num:"1234567890",
   specChar:"!@#$%^&*()_-=+[{]};:',.<>/?"
 }

 var output = ""
 var characters= ""
 if(lowerQuestion=== true) {
   output=output + pool.lower
 }

 if(upperQuestion=== true) {
  output=output + pool.upper
}

if(numQuestion=== true) {
  output=output + pool.num
}

if(specQuestion=== true) {
  output=output + pool.specChar
}
 
 
 
  for (let i=0; i <plength; i++){
    output + characters.charAt(Math.floor(Math.random() * characters.length))
  }
  
  
  
  return output
}
  //Assigning variables:
  //snag the button
  //varpasswordlenthg
  //document.querySelector(whatever the button is)
  //variasble for lenght min max
  //maybe seperate arrays? or find way to group all
  //piggybank
  //text output field
  //output password set = to string



  //Prompts/storing repsonses:
// prompt user
//listen to button
//how long is password?-fallback incase wrong amount
//passwordlength=
//lowercase? (if yes) store in mepty piggybank array (concat)
//uppercase? (if yes) store in mepty piggybank array
//numbers? (if yes) store in empty piggybank array
//spec-char? (if yes) store in empty piggybank array
  
//generating/returning password:
// for loop grab random characters from piggy bank array-- password length (tempArray) (output array) 
//for (let i=0; i <password lenth; i++) {
  //grab one random char
  //storetemp
//}
//join as string
//print generated password onto page

// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
