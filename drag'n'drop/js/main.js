let rect = document.querySelector('.container').getBoundingClientRect()
let currentItem;
let startX = 0;
let startY = 0;
let elemLeft = 0;
let elemTop = 0;

document.querySelectorAll('.delete').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.target.parentNode.remove()
    })
})

document.querySelectorAll('.togging__item').forEach(function(item) {
    item.addEventListener('mousedown', {handleEvent: onDragStart, item: item})
})

function onDragStart(e) {
    currentItem = this.item
    currentItem.style.zIndex = 1000;

    startX = startX || e.clientX - rect.x;
    startY = startY || e.clientY - rect.y;

    onDrag(e)

    document.addEventListener('mousemove', onDrag)
    document.addEventListener('mouseup', onDragEnd)
}

function onDrag(e) {    

    elemLeft = e.clientX - startX - rect.x;
    elemTop = e.clientY - startY - rect.y;

    if (rect.width - elemLeft - currentItem.offsetWidth < 0 && !currentItem.classList.contains('tooRight')) {
        currentItem.classList.add('tooRight')
    }
    else if (rect.width - elemLeft - currentItem.offsetWidth >= 20 && currentItem.classList.contains('tooRight')) {
        currentItem.classList.remove('tooRight')
    }
    
    elemLeft = Math.max(0, elemLeft);
    elemLeft = Math.min(elemLeft, rect.width - currentItem.offsetWidth);

    elemTop = Math.max(0, elemTop);
    elemTop = Math.min(elemTop, rect.height - currentItem.offsetHeight);

    currentItem.style.left = elemLeft + 'px';
    currentItem.style.top = elemTop + 'px';
}

function onDragEnd(e) {
    onDrag(e)

    currentItem.style.zIndex = 500;

    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('mouseup', onDragEnd)
}