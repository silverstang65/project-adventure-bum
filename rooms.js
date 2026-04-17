const images = [
    'images/2mz2h7zsnyob1 1.png',
    'images/6OP04VAt1.webp',
    'images/9f70317ee2f903e8793ce0ebe760ba57 1.png',
    'images/5625994ba8cb4e219045a913cf506228 1.png',
    'images/dark 1.png',
    'images/fjunc21hwof51 1.png',
    'images/hall 1.png',
    'images/image 35.png',
    'images/image 64.png',
    'images/image 65.png',
    'images/image 70.png',
    'images/image 76.png',
    'images/image 77.png',
    'images/image 78.png',
    'images/image 79.png',
    'images/image 80.png',
    'images/image 88.png',
    'images/image 89.png',
    'images/image 90.png',
    'images/image 94.png',
    'images/image 97.png',
    'images/image 98.png',
    'images/image 99.png',
    'images/images.steamusercontent 1.png',
    'images/is-there-a-place-to-swim-irl-that-resembles-the-endlessness-v0-dbk2taj6swr91 1.png',
    'images/Level 94- Rolling Hills.png',
    'images/Level_0_alt 1.png',
    'images/level94 1.png',
    'images/pools 1.png',
    'images/SCPtitle.png',
    'images/source-of-the-iconic-house-liminal-space-was-found-along-v0-0m9x4jp5g24d1 1.png',
    'images/source-of-the-iconic-house-liminal-space-was-found-along-v0-whms4jv9g24d1 1.png',
    'images/which-is-the-real-level-94-v0-onfuiti1m19d1 1.png'
];

const arrows = ['images/arrow.png'];

document.addEventListener('DOMContentLoaded', () => {
    const randomizer = document.querySelector('random-level');
    const randoPage = [
        'Level0.html',
        'Level1.html',
        'Level5.html',
        'Level37.html',
        'Level94.html',
        'Level232.html',
        'Level.html'
    ];

    randomizer.addEventListener('click', (event) => {
        event.preventDefault();
        const next = chooseRandoPage(randoPage);
    if (next) {
        window.location.href=next;
    }
    });

    const randoImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url(${encodeURI(randoImage)})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';

    const img = document.querySelector('img');
    if (img) {
        const rotations = ['rotate0', 'rotate90', 'rotate180', 'rotate270'];
        const randoRotation = rotations[Math.floor(Math.random() * rotations.length)];
        img.className = randoRotation;
    }
});

function chooseRandoPage(pages) {
    if(!Array.isArray(pages) || pages.length === 0) {
        return null;
    }
    const index = Math.floor(Math.random() * pages.length);
    return pages[index];
}