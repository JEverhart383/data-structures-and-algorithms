class LinkedList {

	constructor(head = null){
		this.head = head
	}

	traverseList(){
		
		let node = this.head
		
		while(node){
			console.log(node.data)
			node = node.next
		}

	}
	push(newData){

		let newNode = new Node(newData)
		newNode.next = this.head 
		this.head = newNode

	}


}

class Node {
	constructor(data = null, next = null){
		this.data = data
		this.next = next 
	}
}



let linkedList = new LinkedList()

linkedList.head = new Node(1)
secondNode = new Node(2)
thirdNode = new Node(3) 



linkedList.head.next = secondNode
secondNode.next = thirdNode


linkedList.traverseList()

linkedList.push(6)

linkedList.traverseList() 





