function swapNodes(list, data1, data2) {
  let node1 = list.head;
  let node2 = list.head;
  let node1Prev = null;
  let node2Prev = null;
 
  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }
}
