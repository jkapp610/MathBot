//connecting the api for discord to index.js(like including library in c++)
const Discord =require('discord.js');

module.exports = {
    //name of the command 
    name: "math",
    //description of the command
    description: "performs math on the given ",
    //execute is the function that gets ran when the file is called
    execute(message,args){

      
        let num1;
        let num2;
        let ans;
          //if there is no 2nd argument
        if(!args[1]){
            // output error message
           return message.channel.send(`error there is no first number`);
        }
        if(!args[3]){
            // output error message
             return message.channel.send(`error there is no second number`);
        }
        //if the 1st arument is not a number
         if(isNaN(args[1])){
            //bot gives error message to
            return message.reply('Error the first number is not a number!!');
        }
        else{
            // set the number of deleate  to +1
            num1 = parseInt(args[1]);
       

        }
        
        //if the 2nd arument is not a number
        if(isNaN(args[3])){
            //bot gives error message to
            return message.reply('Error the second number is not a number!!');
        }
        else{
            // set args3 to num2
             num2 = parseInt(args[3]);
           
    
            } 
        
        if(!args[2]){
            return message.channel.send(`error there is no sign given`);
        }
        // if args[2]is +
        if(args[2] === "+"){
            //add the the sum
            ans = num1 + num2;
         }
         // if args[2]is -
        else if(args[2] === "-"){
            //take the difference
            ans = num1 - num2;
         }
        // if args[2]is -
        else if(args[2] === "*"){
            //multiply the number
            ans = num1 * num2;
         }
        // if args[2]is -
        else if(args[2] === "/"){
            //multiply the number
            ans = num1 / num2;
         }
        else{
            return message.channel.send(`error  the sigh was not recinized`);
        }



        //bot reply 
        message.channel.send(`${num1} ${args[2]} ${num2} = ${ans}`);
    }

}