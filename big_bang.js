
/******************************************************************************************************************************************

 In this exercise you will implement a text search engine.
 * You can use one store object with any data structure that suits your idea.
 * The tests are divided into steps, please pass each step at a time, but keep previous steps working.
 * Try to complete as many steps as you can but keep in mind the complexity and quality of your solution.

 Few tips before you go -
 * We suggest you to read all tests and assert messages before you start implementing, it will save you some time in the advanced steps.
 * Feel free to install and import any external package that might help you, but make sure that the implementation of the DB is yours
   (and not imported from the external package).

*******************************************************************************************************************************************/

const assert = require('assert').strict;
const fs = require('fs');

function _generate_data() {
    i = 0;
    fs.readFileSync('./transcript.txt', 'utf-8').split(/\r?\n/).forEach(function(line) {
        key = `line ${i}`;
        index({key: line}, i++);
    });
}

/******************************************************************************************************************************************/
// Your code goes here

/*
    Stores the document and have it available to search.
        @param doc: A one level hierarchy dict.
        @param id: The ID for the given doc, or undefined for automatic ID.
*/
index = (doc, id) => {
   
};

/*
    Returns the IDs of documents that contained ANY of the words in this text.
    This operation is case insensitive.
        @param text: text that we want to search for.
        @return: The list of matching document IDs.
*/
match = (text) => {
    
    return [];
};

/******************************************************************************************************************************************/

/* Sanity Tests */

// Step 1

index({'Sheldon': 'Our whole universe was in a hot, dense state'}, 1)
assert.deepEqual(match("universe"), [1], 'The word "universe" should appear in the DB');

// Step 2

index({'Lenoard': 'Then nearly fourteen billion expansion ago expansion started, wait!'}, id_=1)
assert.deepEqual(match('It all started with the big bang!'), [1], 'The word "started" should appear in the DB')
assert.deepEqual(match('AGO'), [1], 'The word "ago" should appear in the DB')

// Step 3

index({'Penny': "Our best and brightest figure that it'll make an even bigger bang!"}, 1)
index({'Penny': 'Music and mythology, Einstein and astrology', 'Raj': 'It all started with the big bang!'}, 2)
assert.deepEqual(match('BANG'), [1,2], 'The word "bang" should appear in the DB multiple times');

// Step 4

index({'Howard': "It's expanding ever outward but one day"}, 1);
assert.deepEqual(match('expanding'), [1], 'Document with id = 1 contains the word "expanding"');

index({'Bernadette': "Our best and brightest figure that it'll make an even bigger bang!"}, 1);
assert.deepEqual(match('expanding'), [], 'Document with id = 1 was overriden by a new doc that does not contain the word expanding');
assert.deepEqual(match('brightest'), [1], 'Document with id = 1 contains the word "brightest"');

// Step 5

index({'Sheldon': "It doesn't need proving"}, id=1);
assert.deepEqual(match('prove'), [1], 'Our search should support variations match, so in this case it should find all documents containing - proving, prove, proves, proved..');

// Step 6

_generate_data();
assert.equal((match('jedi').length) > 70, true, 'expected more appearances of the word "jedi"');


// Performance Test

_generate_data();

var start = process.hrtime();
match('jedi')
var elapsed = process.hrtime(start)[1] / 1000000; // nano -> mili

assert(elapsed < 0.1, 'Too slow :(')
