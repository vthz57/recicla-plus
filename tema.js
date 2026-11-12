document.documentElement.classList.add("js");
try {
    var temaSalvo = localStorage.getItem("tema");
    var escuro = temaSalvo ? temaSalvo === "escuro" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (escuro) document.documentElement.setAttribute("data-theme", "dark");
} catch (e) { }
