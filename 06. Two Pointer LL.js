// nthLastNodePointer = null
// tailPointer = linked list head
// count = 0

// while tail pointer exists
//   move tail pointer forward
//   if count >= n
//     set nthLastNodePointer to head if it's still null or move it forward
//   increment count

// return nthLastNodePointer

const nthLastNode = (linkedList, n) => {
  let current = null;
  let tailSeeker = linkedList.head;
  let count = 0;
  while (tailSeeker) {
    tailSeeker = tailSeeker.next;
    if (count >= n) {
      if (!current) {
        current = linkedList.head;
      }
      current = current.next;
    }
    count++
  }
  return current;
}
