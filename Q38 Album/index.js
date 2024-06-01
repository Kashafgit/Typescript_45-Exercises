// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
// function make_album(artist_name: string, album_title: string, tracks? : number){
//     let album: {
//         artist: string, title: string, tracks? : number
//     }={
//         artist: artist_name,
//         title: album_title,
//     };
//     if(tracks !== undefined){
//         album.tracks = tracks;
//     }
//     return album;
// }
//  let album1 = make_album("Fahad", "Album Title 1");
//  console.log(album1);
//  let album2 = make_album("Ahmed", "Album Title 2");
//  let album3 = make_album("Hamid", "Album Title 3", 46);
//  console.log(album2);
//  console.log(album3)
// function make_album(album_artist: string, album_title: string, tracks? : number){
//     let album : {
//         artist: string,title:string, tracks? : number
//     }={
//         artist : album_artist,
//         title: album_title,
//     };
//     if(tracks !== undefined){
//         album.tracks = tracks;
//     }
//     return album;
// }
// let album1 = make_album("fahad", "mehad")
// let album2 = make_album("fahad", "mehad", 67)
// let album3 = make_album("fahad", "mehad")
// console.log(album1);
// console.log(album2);
// console.log(album3)
// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function make_album(artist_name, album_title, tracks) {
    var album = {
        name: artist_name, title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    ;
    return album;
}
var album1 = make_album("Kashaf", "sofia", 6);
var album2 = make_album("Faris", "Zumar");
var album3 = make_album("omama", "Salar", 4);
var album4 = make_album("Jihan sikandar", "Haya suleman");
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
console.log(album3);
console.log(album2);
console.log(album4);
console.log(album2);
console.log(album1);
