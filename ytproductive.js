document.getElementById("secondary").remove()
document.getElementById("buttons").remove()
document.getElementById("meta").remove()
document.getElementById("comments").remove()
const myNode = document.getElementById("start")
while (myNode.lastElementChild) {
  myNode.removeChild(myNode.lastElementChild)
}
