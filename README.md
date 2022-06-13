# LinkedList
LinkedList is a <b>Dynamic Data structure</b> used in computer programming. Each element in the linkedlist is called a Node. The nodes are linked using pointers.
Each node consists of data and pointer to next/prev node.

## Types of LinkedList
1. Singly linkedlist
2. doubly linkedlist
3. Circly linkedlist

Singly linkedlist looks like the below,

<img width="781" alt="image" src="https://user-images.githubusercontent.com/17009300/173416283-0a4327a9-cb35-481f-a365-04167248c14e.png">

The Linkedlist can be represented as an object like below,
```js
{
  head: {
    value: 1, // first value
    next: {
      value: 'A', // second value
      next: {
        value: true , // third value
        next: null
      }
    }
  }
}
```
## Properties
1. Unlike arrays, Nodes are not stored in contiguous memory locations.
2. Unike arrays, the linkedlist doesn't have fixed memory size. so, the length of the linkedlist may increase or decrease based on the program execution.
3. It requires more memory than Arrays as it stores both data and pointer.
4. The first element of the linkedlist is called `head`.
5. The last element of the linkedlist is called `tail`.

## Application
Linkedlist can be implemented in the data structure that doesn't know the required memory allocation. For example, Music play list, Infinite scrolling, Image carousels.

In this repo, the following operations are implemented in singly linkedlist
1. **Push** - Appends an element to the list
2. **InsertAt** - Inserts an element in the given position
3. **IndexOf** - Returns the index of the first occurence of the list
4. **Join** - Returns the string of array elements by concatening them using the given separator
5. **Pop** - Removes the last element of the list
6. **Shift** - Removes the first element of the list
7. **Unshift** - Inserts an element in the beginning of the list
