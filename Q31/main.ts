let userNames2: string[] = ["Ayesha","Areeba","Iqra","Afshan"];

userNames2 = [];

if (userNames2.length > 0){
    for(let i = 0; i < userNames2.length; i++)
    if(userNames2[i] =="Admin"){
        console.log(`Hello ${userNames2[i]}thank yuo for logging in again`)
    }
}
else{
    console.log(`We need to find sonme users!`)
}