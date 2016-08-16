/* 
###### Insertion Sort ######

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:

Simple implementation: Bentley shows a three-line C version, and a five-line optimized version[1]:116
Efficient for (quite) small data sets, much like other quadratic sorting algorithms
More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or bubble sort
Adaptive, i.e., efficient for data sets that are already substantially sorted: the time complexity is O(nk) when each element in the input is no more than k places away from its sorted position
Stable; i.e., does not change the relative order of elements with equal keys
In-place; i.e., only requires a constant amount O(1) of additional memory space
Online; i.e., can sort a list as it receives it
When people manually sort cards in a bridge hand, most use a method that is similar to insertion sort.

Source: Wikipedia
*/

(function(exports) {
  'use strict';

  function insertionSort(array) {
	var current;
	var j;
	for (var i = 1; i < array.length; i++) {
		current = array[i];
		j = i - 1;
		while (j >= 0 && (array[j] - current) > 0) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = current;
	}	
	return array;
}
exports.insertionSort = insertionSort;

})(typeof window === 'undefined' ? module.exports : window);