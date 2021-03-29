async function getFish() {
    let res = await fetch('http://acnhapi.com/v1/fish');
    let fish = await res.json();
    return Object.keys(fish).map(key => fish[key]);
}

async function getRandomFish() {
    let fish = await getFish()
    return fish[Math.floor(Math.random() * fish.length)];
}

function getRandomNavn() {
    let names = ["Quinn", "Skyr", "Kaylee", "Sindre", "Hami", "Fame", "Sandra", "Marco", "Esmee"];
    return names[Math.floor(Math.random() * names.length)];
}

function getRandomAdjective() {
    let adjectives = ["blå", "grønn", "rask", "ekkel", "hårete", "fin", "treig"];
    return adjectives[Math.floor(Math.random() * adjectives.length)];
}

function getFishImageUrl(fish) {
    return 'http://acnhapi.com/v1/images/fish/' + fish.id
}

function startBgm() {
    let bgm = document.getElementById('bgm');
    bgm.play();
}

async function generate() {
    let navn = document.getElementById('navn')
    let bilde = document.getElementById('bilde')
    let catchp = document.getElementById('catch')

    let fish = await getRandomFish();

    let fiskeNavn = fish.name['name-EUen']
    let bildeLink = getFishImageUrl(fish);
    let catchpText = fish['catch-phrase']

    navn.textContent = fiskeNavn;
    bilde.src = bildeLink;
    catchp.textContent = catchpText;

    startBgm();
}
