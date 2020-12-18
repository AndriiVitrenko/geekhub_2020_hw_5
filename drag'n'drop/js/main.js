document.querySelectorAll('.delete').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.target.parentNode.remove()
    })
})

document.querySelectorAll('.togging__item').forEach(function(item) {
    item.addEventListener('mousedown', function(event) {
        item.style.zIndex = 1000;
        let marginLeft = (document.body.offsetWidth - item.parentNode.offsetWidth) / 2;
        let marginTop = (document.body.offsetHeight - item.parentNode.offsetHeight) / 2;
        let X = event.pageX - marginLeft;
        let Y = event.pageY - marginTop;

        moveAt(X, Y)

        function moveAt(pageX, pageY) {
            let left = pageX - item.offsetWidth / 2;
            let top = pageY - item.offsetHeight / 2;

            if (left >= 0 && left <= item.parentNode.offsetWidth - item.offsetWidth) {
                item.style.left = left + 'px'
            }
            
            if (top >= 0 && top <= item.parentNode.offsetHeight - item.offsetHeight) {
                item.style.top = top + 'px'
            }
        }

        function onMouseMove(event) {
            moveAt(event.pageX - marginLeft, event.pageY - marginTop);
        }

        document.addEventListener('mousemove', onMouseMove);

        item.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', onMouseMove)
            item.style.zIndex = 500;
        })
    })
})