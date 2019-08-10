let arrData = new Array<string>();
arrData.push('Dr.No');
arrData.push('Goldfinger');
arrData.push('The Living Daylights');
arrData.push('Dimonds are Forever');
arrData.push('Crystal Skull');
arrData.push('Goosebumps');
arrData.push('Die Another Day');
arrData.push('Moonrekar');

// iteration using forEach()
arrData.forEach((v, i) => {
    console.log(`Element at ${i}th index is ${v}`);
});

arrData.map((v, i) => {
    console.log(`Element at ${i}th index is ${v}`);
});


