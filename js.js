const loader = document.querySelector(`.loader`);
const content = document.querySelector(`.content`);
const error = document.querySelector(`.error`);

const loaderAnimationTime = 500;

const hideLoader = () => {
    loader.style.opacity = `0`;
    setTimeout(() => loader.style.display = `none`, loaderAnimationTime);
}

const showContent = () => {
    content.style.display = `flex`;
    setTimeout(() => content.style.opacity = `1`, 100);
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


const loadData = () => {
    // tutaj sciagamy dane
}
