function myAlbum(artistName: string, albumTitle: string){
    return {artistName, albumTitle}
}
let album1 = myAlbum("Ayesh", "Rang-e-Mohabat");
let album2 = myAlbum("Iqra", "Roshan-Andhera");
let album3 = myAlbum("Afshan", "Mausam-e-Dil");
console.log(album1)
console.log(album2)
console.log(album3)

function myAlbum2(artistName: string, albumTitle: string, numberOfTracks?: number){
    return {artistName, albumTitle, numberOfTracks}
}
let album4 = myAlbum2("Ayesh", "Rang-e-Mohabat", 30);
let album5 = myAlbum2("Iqra", "Roshan-Andhera", 55);
let album6 = myAlbum2("Afshan", "Mausam-e-Dil");
console.log(album4); 
console.log(album5);
console.log(album6);