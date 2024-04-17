// Define the make_album Function :

function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} ={
        artist: artist_name,
        title: album_title,

    };
    if(tracks !== undefined){
        album.tracks = tracks;
    
    }

    return album;

}
// Calling three functions with different values:

let album1 = make_album("Minahil", "DUA");
console.log(album1);
let album2 = make_album("Hina", "Future");
console.log(album2);

let album3 = make_album("Ayat", "Life");
console.log(album3);
