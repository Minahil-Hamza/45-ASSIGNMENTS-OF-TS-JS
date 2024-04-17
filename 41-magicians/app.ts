function show_magicians(magicians: string[]): void{

    for (const magician of magicians)  {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician:string[] = ["Mahnoor", "Meerub", "Danish"];
show_magicians(magician);
