const form = document.getElementById("questionForm");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const result = document.getElementById("result");
const answer = document.getElementById("answer");
const comment = document.getElementById("comment");
const mood = document.getElementById("mood");
const again = document.getElementById("again");
const reset = document.getElementById("reset");

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");
const themeMeta = document.querySelector('meta[name="theme-color"]');

const replies = [
  ["forse sì.", "che è praticamente un sì, se abbassi abbastanza gli standard."],
  ["forse no.", "non abbastanza no da fermarti, però abbastanza da poter dire “te l’avevo detto”."],
  ["sì.", "vai. se va male, questa conversazione non è mai esistita."],
  ["no.", "stavolta siamo incredibilmente sicuri. ed è già preoccupante."],
  ["boh.", "finalmente una risposta all’altezza della situazione."],
  ["51% sì.", "democrazia salvata per un soffio."],
  ["non oggi.", "rimandare è brutto solo se lo chiami procrastinare."],
  ["fai pure.", "avevi già deciso prima di entrare qui, ammettilo."],
  ["lascia stare.", "non sappiamo niente, ma l’energia è strana."],
  ["chiedi a tua madre.", "noi abbiamo già dato tutto quello che potevamo dare."],

  ["direi di sì.", "ma lo direi anche sottovoce, per sicurezza."],
  ["direi di no.", "con la stessa convinzione di uno che ha letto solo il titolo."],
  ["assolutamente.", "assolutamente cosa non è stato specificato."],
  ["manco per sogno.", "eppure sappiamo già che probabilmente lo farai lo stesso."],
  ["vai tranquillo.", "frase storicamente pronunciata subito prima di molti problemi."],
  ["fermo lì.", "non sappiamo cosa stai facendo, ma fermati un secondo."],
  ["prova.", "la scienza avanza anche grazie a pessime idee."],
  ["non provarci.", "oggi scegliamo la conservazione della specie."],
  ["sì, ma piano.", "non serve trasformare ogni decisione in un documentario."],
  ["no, ma con affetto.", "non cambia il verdetto, però almeno suona meglio."],

  ["50 e 50.", "abbiamo lavorato molto per arrivare esattamente al punto di partenza."],
  ["52% no.", "statisticamente inutile, emotivamente devastante."],
  ["67% sì.", "il restante 33% sta già preparando le scuse."],
  ["99% no.", "l’1% esiste solo per tutelarci legalmente."],
  ["tecnicamente sì.", "praticamente… vediamo come va."],
  ["tecnicamente no.", "ma sappiamo entrambi che 'tecnicamente' non ti fermerà."],
  ["quasi.", "non sappiamo quasi cosa, ma quasi."],
  ["mah, tendente al sì.", "un modo elegante per non assumersi responsabilità."],
  ["mah, tendente al no.", "stessa indecisione, ma con un leggero pessimismo."],
  ["dipende.", "complimenti: hai appena ottenuto la risposta più italiana possibile."],

  ["fallo.", "almeno poi smetti di pensarci."],
  ["non farlo.", "almeno poi potrai chiederti per mesi come sarebbe andata."],
  ["vai.", "le conseguenze sono un problema del te del futuro."],
  ["scappa.", "non sappiamo da cosa, ma sembra prudente."],
  ["aspetta.", "cinque minuti. un’ora. tre mesi. vedi tu."],
  ["dormi sopra.", "non letteralmente, soprattutto se la domanda riguarda un oggetto fragile."],
  ["mangia qualcosa prima.", "metà delle crisi decisionali sono solo fame travestita."],
  ["bevi dell’acqua.", "non risolve la domanda, ma almeno sei idratato."],
  ["fingi di non aver visto.", "tecnica avanzata, risultati sorprendentemente frequenti."],
  ["manda tutto.", "questa risposta è stata sponsorizzata dal caos."],

  ["non rispondere.", "il silenzio: gratis, elegante e spesso fraintendibile."],
  ["rispondi.", "peggio di così può sempre andare, ma almeno succede qualcosa."],
  ["scrivilo.", "poi fissalo per dieci minuti senza inviarlo, come da tradizione."],
  ["cancellalo.", "se era importante, lo riscriverai. se non lo era, problema risolto."],
  ["compralo.", "non siamo consulenti finanziari e si vede."],
  ["non comprarlo.", "tra 48 ore probabilmente ti sembrerà molto meno necessario."],
  ["prenota.", "il conto in banca ha lasciato la chat."],
  ["resta a casa.", "il divano ha presentato un’offerta competitiva."],
  ["esci.", "hai già aperto abbastanza schede oggi."],
  ["chiudi internet.", "sì, sappiamo che siamo su internet. è proprio questo il punto."],

  ["chiedi a un amico.", "possibilmente uno con una cronologia decisionale migliore della tua."],
  ["tira una moneta.", "se il risultato ti delude, hai già la risposta vera."],
  ["testa o croce.", "noi siamo praticamente una moneta con hosting."],
  ["fai il contrario.", "strategia terribile, ma almeno originale."],
  ["segui l’istinto.", "se poi va male, puoi sempre dare la colpa all’istinto."],
  ["ignora l’istinto.", "oggi il tuo istinto ci sembra un po’ sospetto."],
  ["chiedi di nuovo.", "forse la prossima risposta sarà quella che volevi sentirti dire."],
  ["non chiederlo a noi.", "finalmente una decisione sensata."],
  ["troppo tardi.", "non sappiamo per cosa, ma suona drammatico e ci piace."],
  ["ormai sì.", "quando arrivi fino a forse.si, forse il processo decisionale è già compromesso."],

  ["sì-ish.", "abbiamo aggiunto '-ish' così nessuno può accusarci di essere troppo precisi."],
  ["no-ish.", "negazione con possibilità di retromarcia."],
  ["vediamo.", "un classico intramontabile dell’evitamento."],
  ["può darsi.", "informazione tecnicamente vera e praticamente inutile."],
  ["probabile.", "probabile quanto? non roviniamo tutto con i numeri."],
  ["improbabile.", "ma anche noi esistiamo, quindi mai dire mai."],
  ["non male.", "non significa bene. significa semplicemente non male."],
  ["pessima idea.", "ed è proprio per questo che una parte di noi vuole vedere come finisce."],
  ["idea accettabile.", "il massimo entusiasmo che riusciamo a produrre oggi."],
  ["capolavoro.", "oppure disastro. la linea è sottile."],

  ["approvato.", "da un comitato composto esclusivamente da questa pagina web."],
  ["respinto.", "puoi presentare ricorso premendo 'nah, rifai'."],
  ["in revisione.", "non stiamo revisionando niente, volevamo solo prendere tempo."],
  ["archiviato.", "nessuno sa dove."],
  ["rimandato.", "la burocrazia dell’indecisione ha vinto ancora."],
  ["consentito.", "ma non incoraggiato, sia chiaro."],
  ["sconsigliato.", "con quel tono passivo-aggressivo da foglietto illustrativo."],
  ["accettabile.", "che romanticismo."],
  ["discutibile.", "quindi perfettamente in linea con questo sito."],
  ["nessun commento.", "questo è un commento, purtroppo."],

  ["vai col cuore.", "il cervello oggi può prendersi mezza giornata."],
  ["usa il cervello.", "il cuore ha già causato abbastanza riunioni straordinarie."],
  ["parlane con qualcuno.", "una persona vera, possibilmente. noi siamo letteralmente JavaScript."],
  ["lascia perdere per 24 ore.", "se domani ti importa ancora, purtroppo era davvero importante."],
  ["manda un meme.", "non risolve quasi niente, ma rompe il ghiaccio in modo irresponsabile."],
  ["metti il telefono giù.", "questa è sorprendentemente una delle nostre risposte migliori."],
  ["vai a dormire.", "nessuna buona decisione è mai migliorata alle 3:17 di notte."],
  ["aspetta il caffè.", "certe decisioni richiedono almeno 80 mg di caffeina."],
  ["fai una passeggiata.", "il problema ti seguirà, ma almeno cambi panorama."],
  ["boh, però divertiti.", "se dobbiamo essere inutili, almeno facciamolo con ottimismo."]
];

const moods = [
  "umore: discutibile",
  "sicurezza: boh",
  "metodo: improvvisato",
  "fonte: fidati",
  "precisione: vedremo",
  "parere legale: assolutamente no",
  "attendibilità: simpatica",
  "rigore scientifico: assente",
  "livello di panico: gestibile",
  "consenso interno: litigioso",
  "qualità della fonte: internet",
  "metodologia: vibes",
  "bias: probabilmente sì",
  "responsabilità: delegata",
  "garanzia: ahahah",
  "consulenti coinvolti: zero",
  "prove a supporto: nessuna",
  "fiducia ingiustificata: alta",
  "buon senso: in pausa",
  "verifica umana: ma figurati"
];

let lastReplyIndex = -1;

function pickReply() {
  let index;
  do {
    index = Math.floor(Math.random() * replies.length);
  } while (replies.length > 1 && index === lastReplyIndex);

  lastReplyIndex = index;
  return replies[index];
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function showReply() {
  const [a, c] = pickReply();
  answer.textContent = a;
  comment.textContent = c;
  mood.textContent = pick(moods);
  result.hidden = false;

  if (window.matchMedia("(max-width: 720px)").matches) {
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function applyTheme(theme) {
  const dark = theme === "dark";

  document.body.classList.toggle("dark", dark);
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute(
    "aria-label",
    dark ? "Attiva modalità chiara" : "Attiva modalità scura"
  );

  themeIcon.textContent = dark ? "☀" : "☾";
  themeLabel.textContent = dark ? "light" : "dark";
  themeMeta.setAttribute("content", dark ? "#1f211f" : "#f7f0d8");
}

const savedTheme = localStorage.getItem("forse-si-theme");
applyTheme(savedTheme === "light" ? "light" : "dark");

themeToggle.addEventListener("click", () => {
  const next = document.body.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("forse-si-theme", next);
  applyTheme(next);
});

question.addEventListener("input", () => {
  counter.textContent = `${question.value.length}/180`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!question.value.trim()) {
    question.focus();
    return;
  }

  showReply();
  question.blur();
});

again.addEventListener("click", showReply);

reset.addEventListener("click", () => {
  result.hidden = true;
  question.value = "";
  counter.textContent = "0/180";
  question.focus();
});
