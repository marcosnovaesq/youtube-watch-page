setInterval(() => {
  const elements = [
    document.getElementById("secondary"),
    document.getElementById("buttons"),
    document.getElementById("meta"),
    document.getElementById("comments"),
  ]
  elements.forEach((e) => {
    if (e !== null) {
      e.remove()
    }
  })
}, 5000)
