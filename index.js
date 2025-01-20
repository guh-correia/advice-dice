async function getUrl() {
    const url = "https://api.adviceslip.com/advice";
    const advice = await fetch(url);
    return await advice.json();
};

async function getAdvice() {
    const advice = await getUrl();
    return await advice.slip.advice;
};

async function getId() {
    const advice = await getUrl();
    return await advice.slip.id;
};

async function showAdvice() {
    document.getElementById("advice-number").innerText = "advice #" + await getId();
    document.getElementById("advice").innerText = `"` + await getAdvice() + `"`;
}

showAdvice()
document.getElementById("dice").addEventListener("click", showAdvice)
