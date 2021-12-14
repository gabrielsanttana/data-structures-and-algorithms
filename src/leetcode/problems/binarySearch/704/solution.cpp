#include <vector>
#include <iostream>
#include <cmath>
#include <string> 

using namespace std;

// Binary search
// Space complexity = O(1)
// Time complexity = O(log(n))

class Solution {
  public:
  int search(vector<int>& nums, int target) { 
    int pivot, left = 0, right = nums.size() - 1;

    while (left <= right) { 
      pivot = left + (right - left) / 2;
      if (nums[pivot] == target) return pivot;
      if (target < nums[pivot]) right = pivot - 1;
      else left = pivot + 1;
    }

    return -1;
  }
};

int main() {
  Solution solution;
  vector<int> array;

  array.push_back(1);
  array.push_back(2);
  array.push_back(3);
  array.push_back(4);
  array.push_back(5);

  std::cout << solution.search(array, 4) << "\n"; //2
}