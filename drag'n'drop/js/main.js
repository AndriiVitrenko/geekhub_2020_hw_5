document.querySelectorAll('.delete').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.target.parentNode.remove()
    })
})