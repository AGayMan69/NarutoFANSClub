function generateDotNavigation() {
    const characters = document.querySelectorAll('.character-container');
    const nav = document.createElement("nav");
    nav.classList.add('dotnav-container')
    const dotNav = Array.from(characters).map(character => {
        return `
        <a href="#${character.id}" data-section="${character.id}" class="dotnav-link"></a>
        `
    })

    nav.innerHTML = dotNav.join("")
    document.querySelector('main').appendChild(nav)

    const dotNavObserver = new IntersectionObserver(entries => {
        const dotNavs = document.querySelectorAll('.dotnav-link')
        dotNavs.forEach(dotNav => {
            dotNav.classList.remove('selected')
        })
        const activeSection = entries.filter(entry => entry.isIntersecting)[0]
        if (activeSection) {
            document.querySelector(`.dotnav-link[data-section="${activeSection.target.id}"]`).classList.add('selected')
        }
    }, {threshold: 0.5})

    characters.forEach(character => dotNavObserver.observe(character))
}

generateDotNavigation()
console.log('you are gay')