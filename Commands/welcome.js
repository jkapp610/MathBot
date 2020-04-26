module.exports = {
    //name of the command 
    name: "welcome",
    //description of the command
    description: "welcome",
    //execute is the function that gets ran when the file is called
    execute(message,args){
        //bot replys hello friend
        message.reply(' Welcome to math bot :)')
    }

}