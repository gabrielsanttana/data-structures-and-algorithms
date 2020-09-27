int function(input) {
  int a = 5; //O(1)
  int b = 10; //O(1)
  int c = 50; //O(1)

  for (int i = 0; i < input; i++) { //O(n)
    int x = i + 1; //O(n)
    int y = i + 2; //O(n)
    int z = i + 3; //O(n)
  }

  for (int j = 0; j < input; j++) { //O(n)
    int p = j * 2; //O(n)
    int q = j * 2; //O(n)
  }

  int hey[3] = "hey"; //O(1)
}

//O(4 + 7n) or simply O(n)