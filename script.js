/*__________________________________ SCROLL ANIMATION __________________________________*/


const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible-2')
            observer.unobserve(entry.target)
        }
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible-3')
            observer.unobserve(entry.target)
        }
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible-4')
            observer.unobserve(entry.target)
        }
    })
}
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*= "reveal-"]').forEach(function (r) {
    observer.observe(r)
})
document.querySelectorAll('[class*= "reveal_2-"]').forEach(function (r) {
    observer.observe(r)
})
document.querySelectorAll('[class*= "reveal_3-"]').forEach(function (r) {
    observer.observe(r)
})
document.querySelectorAll('[class*= "reveal_4-"]').forEach(function (r) {
    observer.observe(r)
})


