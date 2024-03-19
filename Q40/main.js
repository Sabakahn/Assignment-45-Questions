function myAlbum(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = myAlbum("Ayesh", "Rang-e-Mohabat");
var album2 = myAlbum("Iqra", "Roshan-Andhera");
var album3 = myAlbum("Afshan", "Mausam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
function myAlbum2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = myAlbum2("Ayesh", "Rang-e-Mohabat", 30);
var album5 = myAlbum2("Iqra", "Roshan-Andhera", 55);
var album6 = myAlbum2("Afshan", "Mausam-e-Dil");
console.log(album4);
console.log(album5);
console.log(album6);
