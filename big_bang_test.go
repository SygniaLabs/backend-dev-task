package main

import (
	"bufio"
	"log"
	"os"
	"reflect"
	"testing"
)

func Assert(t *testing.T, str string, expected []int) {
	actual := match(str)
	if !reflect.DeepEqual(actual, expected) {
		t.Errorf("assertion failed, expected: %v, actual: %v", expected, actual)
	}
}

func Test1(t *testing.T) {
	index("Sheldon: Our whole universe was in a hot, dense state", 1)
	Assert(t, "universe", []int{1})
}

func Test2(t *testing.T) {
	index("Penny: Our best and brightest figure that it'll make an even bigger bang!", 1)
	index("Penny: Music and mythology, Einstein and astrology\n Raj: It all started with the big bang!", 2)

	Assert(t, "BANG", []int{1, 2})
}

func Test3(t *testing.T) {
	index("Howard: It's expanding ever outward but one day", 1)
	Assert(t, "expanding", []int{1})
}

func Test4(t *testing.T) {
	index("Howard: It's expanding ever outward but one day", 1)
	Assert(t, "expanding", []int{1})
	index("Bernadette: Our best and brightest figure that it'll make an even bigger bang!", 1)
	Assert(t, "expanding", []int{})
	Assert(t, "brightest", []int{1})

}

func Test5(t *testing.T) {
	index("Sheldon: It doesn't need proving", 1)
	Assert(t, "prove", []int{1}) // need to support different variables of the same verb
}

func GenerateData() {
	f, err := os.Open("transcript.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer f.Close()

	scanner := bufio.NewScanner(f)
	i := 0
	for scanner.Scan() {
		index(scanner.Text(), i)
		i = i + 1
	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}
}

func Test6(t *testing.T) {
	GenerateData()
	result := match("jedi")
	if len(result) < 70 {
		t.Errorf("Expected at least 70 times jedi...")
	}
}
