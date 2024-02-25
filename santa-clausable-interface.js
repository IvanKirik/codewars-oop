const santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

const notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};

function isSantaClausable(obj) {
    const interface = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];
    const keys = new Set([...Object.keys(obj)]);
    return interface.every((item) => keys.has(item))
}

console.log(isSantaClausable(santa)); // must return TRUE
console.log(isSantaClausable(notSanta)); // must return FALSE
