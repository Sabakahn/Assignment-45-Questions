let magicianNames = ["Ayesha","Iqra","Shaima","Shaista",];
function show_magicians(greet: string){
    for(let item of magicianNames){
        console.log(greet, item);
    }
};
show_magicians("Hello, How are you.");