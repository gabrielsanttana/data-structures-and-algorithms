int function(input) {
  int a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (int i = 0; i < input; i++) { //O(n)
    anotherFunction(); //O(n) 
    int stranger = 1; //O(n)
    a++; //O(n)
  }

  return a; //O(1)
}

//O(3 + 4n)