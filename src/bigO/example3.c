#include <stdio.h>

void printAllNumbersAndAllPairSums(int numbers[]) {
  printf("The numbers: "); //O(1)

  for(int i = 0; i < numbers; i++) { //O(n)
    printf("%d", numbers[i]);
  } 

  printf("Their sums: "); //O(1)

  for(int i = 0; i < numbers; i++) { //O(n)
    for(int j = 0; j < numbers; j++) { //O(n^2)
      printf("%d", i + j); //O(n^2)
    }
  }
} 

//O(2 + n + n + n^2 + n^2) or simply O(n^2)