/****************************************************************************************************************************************** 
    In this exercise you will implement a text search engine.
    You can use one store object with any data structure that suits your idea.
    The tests are divied into steps, please pass each step at a time, but keep previous steps working.
    Try to complete as much steps as you can but keep in mind the complexity and quality of your solution.
    Few tips before you go -
    We suggest you to read all tests and assert messages before you start implementing, it will save you some time in the advanced steps.
    Feel free to install and impoort any external package that might help you, but make sure that the implementation of the of the DB should be yours 
    (and not imported from the external package).
*******************************************************************************************************************************************/
const assert = require('assert').strict;
const fs = require('fs')

function _generate_data() {
    i = 0;
    fs.readFileSync('./transcript.txt', 'utf-8').split(/\r?\n/).forEach(function(line) {
        key = `line ${i}`;
        index({key: line}, i++);
    });
}

/*
    Stores the document and have it available to search.
        @param doc: A one level hierarchy dict.
        @param id: The ID for the given doc, or undefined for automatic ID.
*/
index = (doc, id) => {
    //console.log(`index(${doc} , ${id})`);
}

/* 
    Returns the IDs of documents that contained ANY of the words in this text.
    This operation is case insensitive.
        @param text: text that we want to search for.
        @return: The list of matching document IDs.
*/
match = (text) => {
    console.log(`match(${text})`);
    return undefined;
}

_generate_data();


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


_generate_data(db);
        
assert.equal((match('jedi').length) > 70,true); 

// duration test TBD...
