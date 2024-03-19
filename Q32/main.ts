let curren_users = ["Ayesha","Areeba","iqrA","Afshan","Sidra","Aliza"];

let new_users = ["Shaima","Shaista","Iqra","Saba","sidra"];

new_users.forEach(new_users =>{
    let new_usertoLower = new_users.toLowerCase();

    //We will use some() methode
   let userNameTaken = curren_users.some(curren_user => curren_user.
    toLowerCase() === new_usertoLower);
    if(userNameTaken){
        console.log(`${new_users} needs to choose a new username because it's already taken);
    }else{
        console.log(${new_users} is the member added`);
        curren_users.push(new_users)

    }
});

console.log(curren_users);
