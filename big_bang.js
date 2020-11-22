const assert = require('assert').strict;

index = (doc, id) => {
    console.log("index("+doc+", "+id+")");
}

match = (text) => {
    console.log("match("+text+")");
    return undefined;
}

index({'Sheldon': 'Our whole universe was in a hot, dense state'}, 1)
assert.deepEqual(match("universe"), [1]);

index({'Penny': "Our best and brightest figure that it'll make an even bigger bang!"}, 1)
index({'Penny': 'Music and mythology, Einstein and astrology', 'Raj': 'It all started with the big bang!'}, 2)
assert.deepEqual(match('BANG'),[1,2]);

index({'Howard': "It's expanding ever outward but one day"}, 1);
assert.deepEqual(match('expanding'),[1]);

index({'Bernadette': "Our best and brightest figure that it'll make an even bigger bang!"}, 1);
assert.deepEqual(match('expanding'), []);
assert.deepEqual(match('brightest'),[1]);

index({'Sheldon': 'It doesn\'t need proving'}, id_=1)
assert(match(db, 'prove'),[1]) ; // Our search should support variations match, so in this case it should find all documents containg - proving, prove, proves, proved..'


// _generate_data(db) nneed to be implemented
        
assert.equal((match('jedi').length) > 70,true); 

// duration test TBD...