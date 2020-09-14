"""
In this exercise you will implement a text search engine.
You can use one store object with any data structure that suits your idea.
The tests are divied into steps, please pass each step at a time, but keep previous steps working.
Try to complete as much steps as you can but keep in mind the complexity and quality of your solution.

"""

from typing import Dict, List

"""
Your code:
"""

def index(db, doc: Dict[str, str], doc_id: int = None):
    """
    Stores the document and have it available to search.

    :param db: The data structure to use.
    :param doc: A one level hierarchy dict.
    :param doc_id: The ID for the given doc, or None for automatic ID.
    """
    raise NotImplemented('Implement Me!')

def match(db, text: str) -> List[int]:
    """
    Returns the IDs of documents that contained ANY of the words in this text.
    This operation is case insensitive.

    :param db: The data structure to use.
    :param text: text that we want to search for.
    :return: The list of matching document IDs.
    """
    raise NotImplemented('Implement Me!')

"""
Sanity Tests:
"""
index(db, {'Sheldon': 'Our whole universe was in a hot, dense state'}, doc_id=1)
assert match(db, 'universe') == [1], 'The word "universe" should appear in the DB'

index(db, {'Lenoard': 'Then nearly fourteen billion expansion ago expansion started, wait!'}, doc_id=1)
assert match(db, 'It all started with the big bang!') == [1], 'The word "started" should appear in the DB'
assert match(db, 'AGO') == [1], 'The word "ago" should appear in the DB'

index(db, {'Penny': "Our best and brightest figure that it'll make an even bigger bang!"}, doc_id=1)
index(db, {'Penny': 'Music and mythology, Einstein and astrology', 'Raj': 'It all started with the big bang!'}, doc_id=2)
assert match(db, 'BANG') == [1,2], 'The word "bang" should appear in the DB multiple times'

index(db, {'Howard': "It's expanding ever outward but one day"}, doc_id=1)
index(db, {'Amy': "Collapsing ever inward, we won\'t be here, it won't be hurt", 'Bernadette': "Our best and brightest figure that it'll make an even bigger bang!"}, doc_id=1)
assert match(db, 'expanding') == [], 'The word "expanding" should not appear in the DB'
assert match(db, 'brightest') == [1], 'The word brightest should appear in the DB'

index(db, {'Sheldon': 'And they were all shivering (they froze their asses off)'}, doc_id=1)
assert match(db, 'shiver') == [1], 'A variation of the word "shiver" should appear in the DB'

"""
Performance Tests
"""


class Timer:
    def __init__(self):
        self.start = None
        self.end = None
        self.duration = None

    def __enter__(self):
        self.start = time.time()

    def __exit__(self, type, value, traceback):
        self.end = time.time()
        self.duration = self.end - self.start

for i, row in enumerate(open('./transcript.txt', 'r').readlines()):
    if row.strip():
        index(db, {f'line {i}': row.strip()}, doc_id=i)

assert len(match(db, 'jedi')) >= 70, 'expected more appearances of the word "jedi"'
t = Timer()
with t:
    match(db, 'jedi')

assert t.duration < 0.0001, 'Too slow :('
