function myFunction(){
    const node = document.createElement("li")
    const textnode = document.createTextNode("Added")
    node.appendChild(textnode)
    document.getElementById("myList").appendChild(node)
}