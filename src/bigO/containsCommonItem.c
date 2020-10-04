#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void fillArrayWithRandomNumbers(int array[], int length, int number) {
  for (int i = 0; i < length; i++) {
    array[i] = rand() % number;
  }
}

int getBiggestNumberInArray(int array[], int length) {
  int biggestNumber = 0;

  for (int i = 1; i < length; i++) {
    if (array[i] > array[biggestNumber]) {
      biggestNumber = i;
    }
  }

  return biggestNumber;
}

void sortArrayInAscendingOrder(int array[], int length) {
  while (length > 1) {
    int biggestNumberInArray = getBiggestNumberInArray(array, length);
    int temp = array[biggestNumberInArray];

    array[biggestNumberInArray] = array[length - 1];
    array[length - 1] = temp;

    length--;
  }
}

void printArray(int array[], int length) {
  printf("[");

  for (int i = 0; i < length; i++) {
    printf("%d", array[i]);
    if (i < length - 1) {
      printf(",");
    }
  }

  printf("]\n");
}

int main() {
  int length = 160000;
  int array[length];
  long timeInSeconds = time(NULL);

  fillArrayWithRandomNumbers(array, length, length);
  sortArrayInAscendingOrder(array, length);

  printf("Tempo: %lds", time(NULL) - timeInSeconds);

  return 0;
}
