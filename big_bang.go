package main

import "fmt"

/*
   Stores the document and have it available to search.
       @param doc: A one level hierarchy dict.
       @param id: The ID for the given doc, or -1 for automatic ID.
*/
func index(text string, id int) {
	fmt.Printf("index(%s, %d)", text, id)
}

/*
   Returns the IDs of documents that contained ANY of the words in this text.
   This operation is case insensitive.
       @param text: text that we want to search for.
       @return: The list of matching document IDs.
*/
func match(text string) []int {
	fmt.Printf("match(%s)", text)
	return []int{}
}

func main() {
	fmt.Println("Hello, World!")
	index("hello, world", 1)
}
