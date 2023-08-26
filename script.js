const trigger = document.querySelector('.trigger'),
addclass = document.querySelector('.site');
trigger.addEventListener('click', function() {
    addclass.classList.toggle('showmenu')
})

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('this')
        }
    })
})
const animate = document.querySelectorAll('.animate');
animate.forEach((el) => {
    io.observe(el);
})