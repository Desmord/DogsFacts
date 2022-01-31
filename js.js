const loader = document.querySelector(`.loader`);
const content = document.querySelector(`.content`);
const error = document.querySelector(`.error`);
const image = document.querySelector(`#dogImage`);
const reload = document.querySelector(`.reload`);

const loaderAnimationTime = 500;

const hideLoader = () => {
    loader.style.opacity = `0`;
    setTimeout(() => loader.style.display = `none`, loaderAnimationTime);
}

const showContent = () => {
    content.style.display = `flex`;
    setTimeout(() => content.style.opacity = `1`, 100);
}

const hideContent = () => {
    content.style.opacity = `0`;
    setTimeout(() => content.style.display = `none`, loaderAnimationTime);
}

const showError = (errorText) => {
    error.style.display = `flex`;
    error.innerHTML = errorText;
    setTimeout(() => error.style.opacity = `1`, 100);
}

const showInitialFact = () => {
    hideLoader();
    setTimeout(() => showContent(), loaderAnimationTime)
}

const showIniitialError = (errorText) => {
    hideLoader();
    setTimeout(() => showError(errorText), loaderAnimationTime)
}

const showErrorReload = (errorText) => {
    hideContent();
    setTimeout(() => showError(errorText), loaderAnimationTime)
}


const loadData = () => {

    try {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                image.src = `${data.message}`
                showInitialFact()
            });

    } catch (err) {
        showError(`Bład podczas wczytywania danych.`)
    }

}

const reloadData = () => {

    try {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                image.src = `${data.message}`
            });

    } catch (err) {
        showErrorReload(`Bład podczas odświerzania`)
    }
}

reload.addEventListener(`click`, reloadData);

try {

    loadData()
} catch (err) {
    console.log(`błąd`);
    console.log(err);
}

