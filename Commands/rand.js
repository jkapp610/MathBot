//connecting the api for discord to index.js(like including library in c++)
const Discord =require('discord.js');

module.exports = {
    //name of the command 
    name: "rand",
    //description of the command
    description: "generates a random number",
    //execute is the function that gets ran when the file is called
    execute(message,args){

        function getRandom(max){
            return Math.floor(Math.random() * max);
        }
        let num1;
          //if there is no 2nd argument
        if(!args[1]){
            // output error message
           num1= getRandom(2);
        }
        //if the 2nd arument is not a number
         else if(isNaN(args[1])){
            //bot gives error message to
            return message.reply('Error please enter a number!!');
        }
    else{
        // set the number of deleate  to +1
         int = parseInt(args[1]);
         // deleate the number of messageges
         num1 = getRandom(int);

        }      

        //bot reply 
        message.channel.send(`Your random number is ${num1}`);
    }

}