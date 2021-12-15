#include <vector>
#include <iostream>
#include <cmath>
#include <string> 

using namespace std;

// Binary search
// Time complexity = 
// Space complexity =

class Solution {
  public:
  int getFirstBadVersion(int n) {
    int mid, left = 0, right = n;

    while(left < right) {
      mid = left + (right - left) / 2;

      if(isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  }
};