
const MATERIAIS = {
    "plastico": {
        nome: "Plástico", icone: "🥤", cor: "#dc2626", corNome: "Vermelha (plástico)", tipo: "reciclavel", selo: "Reciclável",
        resumo: "Garrafas PET, potes, embalagens e sacolas limpas podem ser reciclados.",
        como: "Esvazie a embalagem, enxágue rapidamente, amasse para ocupar menos espaço e descarte na coleta seletiva. Retire tampas e rótulos quando possível.",
        lavar: "Sim, um enxágue rápido já basta.",
        decomposicao: "Em torno de 100 a 400 anos (estimativa)",
        dica: "Embalagens metalizadas (como as de salgadinho) e isopor sujo costumam não ser aceitos. Veja com a cooperativa da sua cidade."
    },
    "papel": {
        nome: "Papel", icone: "📰", cor: "#2563eb", corNome: "Azul (papel e papelão)", tipo: "reciclavel", selo: "Reciclável",
        resumo: "Jornais, revistas, caixas de papelão e folhas podem ser reciclados.",
        como: "Mantenha seco e limpo, sem gordura ou umidade. Desmonte e amasse as caixas de papelão e descarte na coleta seletiva.",
        lavar: "Não. Papel deve ser descartado seco.",
        decomposicao: "Cerca de 3 a 6 meses (estimativa)",
        dica: "Papel higiênico, guardanapo usado, papel engordurado e fotografias não são recicláveis."
    },
    "vidro": {
        nome: "Vidro", icone: "🍾", cor: "#16a34a", corNome: "Verde (vidro)", tipo: "reciclavel", selo: "Reciclável",
        resumo: "Garrafas, potes e frascos de vidro podem ser reciclados.",
        como: "Esvazie e enxágue. Embale com cuidado, principalmente se estiver quebrado (em papel ou jornal), para não ferir quem faz a coleta, e descarte na coleta seletiva.",
        lavar: "Sim, um enxágue rápido.",
        decomposicao: "Milhares de anos (estimativa)",
        dica: "Espelhos, vidros de janela, box de banheiro, cristais, cerâmica e lâmpadas NÃO entram na reciclagem do vidro comum."
    },
    "metal": {
        nome: "Metal", icone: "🥫", cor: "#eab308", corNome: "Amarela (metal)", tipo: "reciclavel", selo: "Reciclável",
        resumo: "Latas, tampas, fios e peças metálicas podem ser reciclados.",
        como: "Lave latas e embalagens metálicas, amasse quando possível e descarte na coleta seletiva.",
        lavar: "Sim, um enxágue rápido.",
        decomposicao: "Latas de alumínio: de 200 a 500 anos (estimativa)",
        dica: "A reciclagem do alumínio economiza muita energia em relação à produção a partir do minério. Latinhas valem dinheiro em sucateiros!"
    },
    "residuos eletronicos": {
        nome: "Resíduos Eletrônicos", icone: "💻", cor: "#475569", corNome: "Ponto de entrega específico", tipo: "entrega", selo: "Ponto de entrega",
        resumo: "Celulares, computadores, cabos e carregadores têm descarte próprio.",
        como: "Não descarte no lixo comum. Leve a um ecoponto, a um ponto de coleta de eletrônicos ou devolva ao fabricante ou loja (logística reversa).",
        lavar: "Não se aplica.",
        decomposicao: "Muito variável (contêm metais pesados que contaminam o solo)",
        dica: "Antes de descartar, apague seus dados pessoais. Aparelhos ainda funcionais podem ser doados."
    },
    "madeira": {
        nome: "Madeira", icone: "🪵", cor: "#1f2937", corNome: "Preta (madeira)", tipo: "entrega", selo: "Ecoponto / reaproveitamento",
        resumo: "Móveis, caixas e pallets podem ser reaproveitados ou levados a ecopontos.",
        como: "Pequenos pedaços e móveis velhos podem ir para ecopontos ou para a coleta de volumosos da sua cidade. Sempre que possível, reaproveite ou doe.",
        lavar: "Não se aplica.",
        decomposicao: "Varia de 6 meses a vários anos, conforme a madeira e o tratamento",
        dica: "Madeira tratada ou pintada exige mais cuidado. Pallets em bom estado podem virar móveis e jardins verticais."
    },
    "residuos organicos": {
        nome: "Resíduos Orgânicos", icone: "🍌", cor: "#92400e", corNome: "Marrom (orgânicos)", tipo: "reciclavel", selo: "Compostável",
        resumo: "Restos de alimentos, cascas de frutas e folhas podem virar adubo.",
        como: "Destine à compostagem (caseira ou comunitária) ou à coleta de orgânicos do município, se houver.",
        lavar: "Não se aplica.",
        decomposicao: "De algumas semanas a poucos meses na compostagem",
        dica: "Evite colocar carnes, laticínios e comidas muito gordurosas na composteira caseira, pois atraem animais e causam mau cheiro."
    },
    "materiais medicos": {
        nome: "Materiais Médicos", icone: "💊", cor: "#94a3b8", corNome: "Branca (serviços de saúde)", tipo: "entrega", selo: "Ponto de entrega",
        resumo: "Medicamentos vencidos e materiais de saúde precisam de destino seguro.",
        como: "Não descarte no lixo comum nem no ralo. Leve medicamentos vencidos a farmácias ou postos de saúde com ponto de coleta. Perfurocortantes (agulhas) devem ir em recipiente rígido e fechado.",
        lavar: "Não se aplica.",
        decomposicao: "Variável. Medicamentos no esgoto contaminam a água.",
        dica: "Ao levar remédios, mantenha-os na embalagem original e separe a caixa/bula para a reciclagem de papel."
    },
    "materiais perigosos": {
        nome: "Materiais Perigosos", icone: "⚠️", cor: "#ea580c", corNome: "Laranja (resíduos perigosos)", tipo: "entrega", selo: "Ponto de entrega",
        resumo: "Pilhas, baterias, lâmpadas, tintas e solventes exigem descarte especial.",
        como: "Não jogue no lixo comum. Pilhas e baterias podem ser entregues em lojas e assistências. Lâmpadas, tintas e solventes devem ir a pontos de coleta ou ecopontos.",
        lavar: "Não se aplica.",
        decomposicao: "Muito longa e com risco de contaminação do solo e da água",
        dica: "Mantenha o produto na embalagem original, bem fechada, e nunca misture produtos químicos."
    },
    "residuos radioativos": {
        nome: "Resíduos Radioativos", icone: "☢️", cor: "#7c3aed", corNome: "Roxa (radioativos)", tipo: "nao", selo: "Descarte especializado",
        resumo: "Não são recicláveis comuns. Exigem tratamento e descarte por órgãos especializados.",
        como: "Nunca descarte em lixo comum ou reciclável. Procure orientação de órgãos especializados, como a CNEN (Comissão Nacional de Energia Nuclear).",
        lavar: "Não se aplica.",
        decomposicao: "Depende do material (podem permanecer radioativos por muito tempo)",
        dica: "Em caso de dúvida sobre um objeto suspeito, não o manuseie e avise as autoridades."
    },
    "rejeitos": {
        nome: "Rejeitos", icone: "🗑️", cor: "#6b7280", corNome: "Cinza (não reciclável ou misturado)", tipo: "nao", selo: "Não reciclável",
        resumo: "Materiais contaminados e sem reaproveitamento vão para o lixo comum.",
        como: "Rejeitos não são recicláveis e devem ir para a coleta de lixo comum (não seletiva), bem embalados.",
        lavar: "Não se aplica.",
        decomposicao: "Varia bastante conforme o material",
        dica: "Exemplos: papel higiênico, fraldas, esponjas, cerâmica, bitucas de cigarro e embalagens muito sujas."
    }
};

const LIXEIRAS = [
    { cor: "#2563eb", nome: "Azul", desc: "Papel e papelão" },
    { cor: "#dc2626", nome: "Vermelha", desc: "Plástico" },
    { cor: "#16a34a", nome: "Verde", desc: "Vidro" },
    { cor: "#eab308", nome: "Amarela", desc: "Metal" },
    { cor: "#1f2937", nome: "Preta", desc: "Madeira" },
    { cor: "#ea580c", nome: "Laranja", desc: "Resíduos perigosos" },
    { cor: "#f8fafc", nome: "Branca", desc: "Resíduos de serviços de saúde" },
    { cor: "#7c3aed", nome: "Roxa", desc: "Resíduos radioativos" },
    { cor: "#92400e", nome: "Marrom", desc: "Resíduos orgânicos" },
    { cor: "#9ca3af", nome: "Cinza", desc: "Não reciclável, misturado ou contaminado" }
];

const QUIZ = [
    {
        p: "Uma caixa de pizza com gordura pode ir inteira para a coleta de papel?",
        o: ["Sim, o papelão sempre é reciclável", "Só a parte limpa, a parte engordurada vai para o lixo comum", "Não, caixa de pizza nunca é reciclável"],
        c: 1,
        e: "A gordura contamina o papel e atrapalha a reciclagem. Rasgue a tampa limpa para reciclar e descarte a parte suja no lixo comum."
    },
    {
        p: "Qual é a cor da lixeira de vidro na coleta seletiva?",
        o: ["Verde", "Azul", "Amarela"],
        c: 0,
        e: "Verde é o vidro. Azul é papel e amarela é metal."
    },
    {
        p: "Onde devo descartar pilhas e baterias?",
        o: ["No lixo comum, bem embaladas", "Na lixeira vermelha", "Em pontos de coleta, lojas ou assistências"],
        c: 2,
        e: "Pilhas e baterias têm metais pesados e entram na logística reversa. Entregue em pontos de coleta."
    },
    {
        p: "Espelhos e vidros de janela podem ir junto com as garrafas de vidro?",
        o: ["Sim, é tudo vidro", "Não, têm composição diferente e atrapalham a reciclagem", "Só se estiverem quebrados"],
        c: 1,
        e: "Espelhos, cristais, vidros temperados e cerâmica derretem em temperaturas diferentes e contaminam o vidro reciclável."
    },
    {
        p: "O que fazer com óleo de cozinha usado?",
        o: ["Jogar na pia com bastante água quente", "Guardar em garrafa PET fechada e levar a um ponto de coleta", "Jogar no terreno baldio"],
        c: 1,
        e: "Um litro de óleo pode contaminar milhares de litros de água. Guarde em garrafa PET e entregue em um ponto de coleta."
    },
    {
        p: "Qual cor de lixeira é usada para restos de comida (orgânicos)?",
        o: ["Marrom", "Preta", "Roxa"],
        c: 0,
        e: "Marrom é para orgânicos. Preta é para madeira e roxa para resíduos radioativos."
    }
];

const ESPECIAIS = [
    { i: "🔋", t: "Pilhas e baterias", d: "Contêm metais pesados. Entregue em lojas, assistências técnicas ou pontos de coleta." },
    { i: "🍳", t: "Óleo de cozinha", d: "Guarde em garrafa PET fechada e leve a um ponto de coleta. Nunca jogue na pia." },
    { i: "💡", t: "Lâmpadas", d: "Fluorescentes contêm mercúrio. Leve a lojas ou pontos de coleta, sem quebrar." },
    { i: "💊", t: "Medicamentos vencidos", d: "Leve a farmácias ou postos de saúde com coleta. Não jogue no lixo nem no vaso." },
    { i: "📱", t: "Eletrônicos", d: "Celulares, cabos e computadores vão a ecopontos ou para devolução ao fabricante." },
    { i: "🛞", t: "Pneus", d: "Devolva em borracharias ou revendedores, que são obrigados a receber (logística reversa)." }
];

const $ = (id) => document.getElementById(id);
const normalizar = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

function observarReveal(raiz) {
    const itens = (raiz || document).querySelectorAll(".reveal:not(.visivel)");
    if (!("IntersectionObserver" in window)) {
        itens.forEach((el) => el.classList.add("visivel"));
        return;
    }
    itens.forEach((el) => observador.observe(el));
}

const observador = "IntersectionObserver" in window
    ? new IntersectionObserver((entradas) => {
        entradas.forEach((en) => {
            if (en.isIntersecting) {
                en.target.classList.add("visivel");
                observador.unobserve(en.target);
            }
        });
    }, { threshold: 0.12 })
    : null;

const select = $("material");
Object.keys(MATERIAIS).forEach((chave) => {
    const op = document.createElement("option");
    op.value = chave;
    op.textContent = MATERIAIS[chave].nome;
    select.appendChild(op);
});

let filtroAtual = "todos";

function renderCards() {
    const termo = normalizar($("busca").value);
    const container = $("cards");
    container.innerHTML = "";
    let total = 0;

    Object.keys(MATERIAIS).forEach((chave) => {
        const m = MATERIAIS[chave];
        const passaFiltro = filtroAtual === "todos" || m.tipo === filtroAtual;
        const alvo = normalizar(m.nome + " " + m.resumo + " " + m.dica);
        if (!passaFiltro || (termo && !alvo.includes(termo))) return;

        total++;
        const card = document.createElement("div");
        card.className = "card reveal";
        card.style.setProperty("--cor", m.cor === "#f8fafc" ? "#cbd5e1" : m.cor);
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", "Ver detalhes de " + m.nome);

        const classeBadge = m.tipo === "nao" ? "nao" : (m.tipo === "entrega" ? "entrega" : "");
        card.innerHTML =
            '<div class="icone">' + m.icone + '</div>' +
            '<span class="badge ' + classeBadge + '">' + m.selo + '</span>' +
            '<h3>' + m.nome + '</h3>' +
            '<p>' + m.resumo + '</p>' +
            '<span class="ver-mais">Ver detalhes →</span>';

        card.addEventListener("click", () => abrirModal(chave));
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                abrirModal(chave);
            }
        });
        container.appendChild(card);
    });

    $("semResultado").hidden = total !== 0;
    observarReveal(container);
}

$("busca").addEventListener("input", renderCards);

$("chips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("ativo"));
    chip.classList.add("ativo");
    filtroAtual = chip.dataset.filtro;
    renderCards();
});

const overlay = $("modalOverlay");
const modalBox = $("modalBox");
let ultimoFoco = null;

function abrirModal(chave) {
    const m = MATERIAIS[chave];
    ultimoFoco = document.activeElement;

    modalBox.style.setProperty("--cor", m.cor === "#f8fafc" ? "#cbd5e1" : m.cor);
    $("modalTitulo").textContent = m.icone + " " + m.nome;
    $("modalConteudo").innerHTML =
        linha("Como descartar", m.como) +
        linha("Lixeira / destino", '<span class="pilula" style="--cor:' + m.cor + '"><i></i>' + m.corNome + '</span>') +
        linha("Precisa lavar?", m.lavar) +
        linha("Decomposição", m.decomposicao) +
        linha("Dica", m.dica);

    overlay.classList.add("ativo");
    overlay.setAttribute("aria-hidden", "false");
    $("modalFechar").focus();
}

function linha(rotulo, valor) {
    return '<div class="info-linha"><span class="rotulo">' + rotulo + '</span><span>' + valor + '</span></div>';
}

function fecharModal() {
    overlay.classList.remove("ativo");
    overlay.setAttribute("aria-hidden", "true");
    if (ultimoFoco) ultimoFoco.focus();
}

$("formConsulta").addEventListener("submit", (e) => {
    e.preventDefault();
    const chave = select.value.trim().toLowerCase();
    if (MATERIAIS[chave]) abrirModal(chave);
});

$("modalFechar").addEventListener("click", fecharModal);
overlay.addEventListener("click", (e) => { if (e.target === overlay) fecharModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") fecharModal(); });

$("gridLixeiras").innerHTML = LIXEIRAS.map((l) =>
    '<div class="lixeira reveal" style="--cor:' + l.cor + '">' +
    '<div class="balde"></div>' +
    '<h3>' + l.nome + '</h3>' +
    '<p>' + l.desc + '</p></div>'
).join("");

let qIndex = 0;
let pontos = 0;

function renderQuiz() {
    const box = $("quizBox");

    if (qIndex >= QUIZ.length) {
        const msg = pontos === QUIZ.length ? "Perfeito! Você é um(a) mestre da reciclagem! 🏆"
            : pontos >= QUIZ.length / 2 ? "Muito bem! Você já sabe bastante. 👏"
                : " Leia as seções acima e tente de novo. 🌱";
        box.innerHTML =
            '<div class="quiz-final">' +
            '<div class="placar">' + pontos + '/' + QUIZ.length + '</div>' +
            '<p class="quiz-pergunta">' + msg + '</p>' +
            '<button class="btn" id="quizReiniciar">Jogar de novo</button></div>';
        $("quizReiniciar").addEventListener("click", () => { qIndex = 0; pontos = 0; renderQuiz(); });
        return;
    }

    const q = QUIZ[qIndex];
    box.innerHTML =
        '<div class="quiz-topo"><span>Pergunta ' + (qIndex + 1) + ' de ' + QUIZ.length + '</span><span>Pontos: ' + pontos + '</span></div>' +
        '<div class="barra"><div style="width:' + (qIndex / QUIZ.length * 100) + '%"></div></div>' +
        '<p class="quiz-pergunta">' + q.p + '</p>' +
        '<div class="opcoes">' +
        q.o.map((txt, i) => '<button class="opcao" data-i="' + i + '">' + txt + '</button>').join("") +
        '</div><div id="quizFeedback"></div>';

    box.querySelectorAll(".opcao").forEach((btn) => {
        btn.addEventListener("click", () => responder(Number(btn.dataset.i)));
    });
}

function responder(escolha) {
    const q = QUIZ[qIndex];
    const botoes = document.querySelectorAll(".opcao");
    botoes.forEach((b, i) => {
        b.disabled = true;
        if (i === q.c) b.classList.add("certa");
        else if (i === escolha) b.classList.add("errada");
    });

    const acertou = escolha === q.c;
    if (acertou) pontos++;

    const ultima = qIndex === QUIZ.length - 1;
    $("quizFeedback").innerHTML =
        '<div class="feedback"><strong>' + (acertou ? "✅ Correto! " : "❌ Quase! ") + '</strong>' + q.e + '</div>' +
        '<button class="btn" id="quizProxima">' + (ultima ? "Ver resultado" : "Próxima pergunta →") + '</button>';
    $("quizProxima").addEventListener("click", () => { qIndex++; renderQuiz(); });
    $("quizProxima").focus();
}
renderQuiz();

$("gridEspeciais").innerHTML = ESPECIAIS.map((x) =>
    '<div class="especial reveal"><div class="icone">' + x.i + '</div><h3>' + x.t + '</h3><p>' + x.d + '</p></div>'
).join("");

$("formEcopontos").addEventListener("submit", (e) => {
    e.preventDefault();
    const local = $("local").value.trim();
    if (!local) return;
    const consulta = "ecoponto coleta seletiva " + local;
    window.open("https://www.google.com/maps/search/" + encodeURIComponent(consulta), "_blank", "noopener");
});

const raiz = document.documentElement;
const temaBtn = $("temaBtn");

function atualizarIconeTema() {
    temaBtn.textContent = raiz.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";
}
atualizarIconeTema();

temaBtn.addEventListener("click", () => {
    const escuro = raiz.getAttribute("data-theme") === "dark";
    if (escuro) raiz.removeAttribute("data-theme");
    else raiz.setAttribute("data-theme", "dark");
    try { localStorage.setItem("tema", escuro ? "claro" : "escuro"); } catch (e) { }
    atualizarIconeTema();
});

const menu = $("menu");
const menuBtn = $("menuBtn");
menuBtn.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    menuBtn.setAttribute("aria-expanded", String(aberto));
    menuBtn.textContent = aberto ? "✕" : "☰";
});
menu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        menu.classList.remove("aberto");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    }
});

const topo = $("topo");
window.addEventListener("scroll", () => {
    topo.classList.toggle("visivel", window.scrollY > 500);
}, { passive: true });
topo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

$("ano").textContent = new Date().getFullYear();

renderCards();
observarReveal(document);

document.documentElement.classList.add("js");
try {
    var temaSalvo = localStorage.getItem("tema");
    var escuro = temaSalvo ? temaSalvo === "escuro" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (escuro) document.documentElement.setAttribute("data-theme", "dark");
} catch (e) { }
