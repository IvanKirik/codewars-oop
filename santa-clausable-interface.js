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
    const methods = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];
    return methods.every(method => typeof obj[method] === 'function');
}

console.log(isSantaClausable(santa)); // must return TRUE
console.log(isSantaClausable(notSanta)); // must return FALSE
